import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUp, Globe, Copy, Check, AlertCircle, Download, MonitorSmartphone, Hexagon, Quote, Layers, ArrowRight } from "lucide-react";

interface ProductBlueprint {
  executive_summary: string;
  architecture: {
    stack: string[];
    details: string;
  };
  ui_ux_strategy: {
    vibe: string;
    features: string[];
  };
  branding: {
    voice: string;
    keywords: string[];
  };
}

const AIPage = () => {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<ProductBlueprint | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'architecture' | 'ui_ux' | 'branding'>('summary');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const fetchUrlContext = async (targetUrl: string) => {
    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
      const res = await fetch(proxyUrl);
      const data = await res.json();
      if (data.contents) {
        // Strip HTML tags and excessive whitespace, return first 5000 chars as context
        return data.contents.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 5000);
      }
    } catch (e) {
      console.warn("Could not scrape URL:", e);
    }
    return "";
  };

  const generateBlueprint = async () => {
    if (!input.trim() && !url.trim()) return;
    setIsLoading(true);
    setBlueprint(null);
    setError(null);
    setIsCopied(false);
    setActiveTab('summary');
    
    // Setting up reasoning model as requested.
    const apiKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.VITE_OPENROUTER_API_KEY;
    const model = import.meta.env.VITE_GROQ_MODEL || "openai/gpt-oss-120b"; // Kept user hint
    
    // We are locking this back to Groq because 'gsk_' keys are exclusive to Groq, 
    // and sending them to OpenRouter results in a 401 Unauthorized.
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "https://api.groq.com/openai/v1/chat/completions";

    if (!apiKey) {
      setError("Missing VITE_GROQ_API_KEY environment variable. Please check your .env file.");
      setIsLoading(false);
      return;
    }

    let scrapedContext = "";
    if (url.trim()) {
      scrapedContext = await fetchUrlContext(url.trim());
    }

    const systemPrompt = `You are a Lead Infrastructure Architect and Product Strategist at 'Agenttrace'. 
    Using deep reasoning, output a highly technical, multi-faceted product deployment blueprint based on the user's keywords and any provided website context. 
    Format your response EXACTLY as a raw JSON object with this exact schema:
    {
      "executive_summary": "A 2-3 sentence extremely powerful summary of what the product is.",
      "architecture": {
        "stack": ["React", "PostgreSQL", "..."],
        "details": "A technical paragraph explaining the infrastructure, latency optimizations, and RAG/scaling."
      },
      "ui_ux_strategy": {
        "vibe": "A vivid description of the visual identity and user feeling.",
        "features": ["Feature 1 detail", "Feature 2 detail"]
      },
      "branding": {
        "voice": "Description of the copywriting and brand voice.",
        "keywords": ["keyword1", "keyword2"]
      }
    }`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Blueprint this concept: ${input}. ${scrapedContext ? '\n\nScraped Context URL Data:\n' + scrapedContext : ''}` }
          ]
        })
      });

      if (!response.ok) {
        // Fallback strategy: If 'gpt-oss-120b' fails because it's not supported directly on this API endpoint, try the generic one.
        if (response.status === 404 || response.status === 400) {
            throw new Error(`The model '${model}' was rejected by the API server. Please check your VITE_GROQ_MODEL setting in .env and ensure your provider supports reasoning models.`);
        }
        throw new Error(`API failed with status: ${response.status}. Ensure your API key is valid.`);
      }

      const data = await response.json();
      const rawContent = data.choices[0].message.content;
      
      // Robust JSON Extraction
      const cleanContent = rawContent.replace(/```(?:json)?\n?/gi, '').replace(/```\n?/g, '').trim();
      let parsed: ProductBlueprint;
      try {
        parsed = JSON.parse(cleanContent);
      } catch (parseError) {
        throw new Error("AI generated an invalid artifact format. Please try again.");
      }

      setBlueprint(parsed);
    } catch (err: any) {
      console.error("AI generation failed:", err);
      setError(err.message || "An unexpected reasoning error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const getMarkdownText = () => {
    if (!blueprint) return "";
    return `# Blueprint: Agenttrace Forge

## Executive Summary
${blueprint.executive_summary}

## Architecture & Infrastructure
**Technical Stack**: ${blueprint.architecture.stack.join(", ")}
${blueprint.architecture.details}

## UI/UX & Design Strategy
**Aesthetic Vibe**: ${blueprint.ui_ux_strategy.vibe}

**Core Features**:
${blueprint.ui_ux_strategy.features.map(f => `- ${f}`).join('\n')}

## Branding & Positioning
**Brand Voice**: ${blueprint.branding.voice}
**Core Keywords**: ${blueprint.branding.keywords.join(", ")}
`;
  };

  const downloadMarkdown = () => {
    const md = getMarkdownText();
    if (!md) return;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Agenttrace_Blueprint_${new Date().getTime()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    const text = getMarkdownText();
    if (!text) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-body selection:bg-primary/30 flex flex-col">
      <Navbar />
      
      {/* Ambient Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-32 px-4 md:px-8 w-full max-w-5xl mx-auto relative z-10 transition-all duration-700">
        
        {/* Empty State */}
        {!blueprint && !isLoading && !error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)] mb-8">
               <Sparkles className="w-6 h-6 text-primary" />
             </div>
             <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight lowercase text-white mb-4">
               what can we <span className="text-primary italic">architect</span> today?
             </h1>
             <p className="text-white/40 font-body text-base max-w-lg mx-auto lowercase">
               input requirements or a live site url. our deep-reasoning system will forge a comprehensive product strategy.
             </p>
          </motion.div>
        )}

        {/* Dynamic Canvas Container */}
        <div className="w-full relative">
          
          {/* Output View (Artifact Tabs) */}
          <AnimatePresence mode="wait">
            {blueprint && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="mb-12"
              >
                <div className="bg-[#0A0A0A] border border-white/5 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                  
                  {/* Vertical Tabs */}
                  <div className="w-full md:w-64 bg-black/40 border-b md:border-b-0 md:border-r border-white/5 p-3 md:p-6 flex flex-row md:flex-col gap-2 overflow-x-auto hide-scrollbar scroll-smooth snap-x">
                    <button onClick={() => setActiveTab('summary')} className={`snap-start flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-technical uppercase tracking-widest whitespace-nowrap md:whitespace-normal text-left ${activeTab === 'summary' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white/70'}`}>
                      <Quote className="w-4 h-4 shrink-0" />
                      Summary
                    </button>
                    <button onClick={() => setActiveTab('architecture')} className={`snap-start flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-technical uppercase tracking-widest whitespace-nowrap md:whitespace-normal text-left ${activeTab === 'architecture' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white/70'}`}>
                      <Hexagon className="w-4 h-4 shrink-0" />
                      Architecture
                    </button>
                    <button onClick={() => setActiveTab('ui_ux')} className={`snap-start flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-technical uppercase tracking-widest whitespace-nowrap md:whitespace-normal text-left ${activeTab === 'ui_ux' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white/70'}`}>
                      <MonitorSmartphone className="w-4 h-4 shrink-0" />
                      UI / UX
                    </button>
                    <button onClick={() => setActiveTab('branding')} className={`snap-start flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-technical uppercase tracking-widest whitespace-nowrap md:whitespace-normal text-left ${activeTab === 'branding' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white/70'}`}>
                      <Layers className="w-4 h-4 shrink-0" />
                      Branding
                    </button>
                    
                    <div className="hidden md:block flex-grow" />
                    
                    <div className="hidden md:flex flex-col gap-2 mt-8">
                      <button onClick={downloadMarkdown} className="flex items-center gap-2 px-4 py-3 rounded-xl text-[11px] font-technical uppercase tracking-widest bg-white/5 hover:bg-primary text-white hover:text-black transition-all font-bold">
                        <Download className="w-4 h-4" /> Download .md
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 p-5 md:p-12 relative overflow-y-auto">
                    {activeTab === 'summary' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <h2 className="text-white font-display text-3xl font-bold lowercase tracking-tight mb-8">Executive Vision</h2>
                        <p className="text-white/80 font-body text-lg md:text-xl leading-relaxed lowercase">
                          {blueprint.executive_summary}
                        </p>
                      </motion.div>
                    )}

                    {activeTab === 'architecture' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <h2 className="text-white font-display text-3xl font-bold lowercase tracking-tight mb-8">Systems Infrastructure</h2>
                        <div>
                          <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold mb-4">Proposed Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {blueprint.architecture.stack.map(tech => (
                              <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm font-technical">{tech.toLowerCase()}</span>
                            ))}
                          </div>
                        </div>
                        <div className="h-px bg-white/5 my-6" />
                        <div>
                          <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold mb-4">Architecture Blueprint</p>
                          <p className="text-white/70 font-body text-base leading-loose lowercase">{blueprint.architecture.details}</p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'ui_ux' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <h2 className="text-white font-display text-3xl font-bold lowercase tracking-tight mb-8">Experience Design</h2>
                        <div>
                          <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold mb-4">Aesthetic Protocol</p>
                          <p className="text-white/80 font-body text-lg font-medium lowercase italic border-l-2 border-primary pl-4">{blueprint.ui_ux_strategy.vibe}</p>
                        </div>
                        <div className="h-px bg-white/5 my-6" />
                        <div>
                          <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold mb-4">Core Pathways</p>
                          <ul className="space-y-4">
                            {blueprint.ui_ux_strategy.features.map((f, i) => (
                              <li key={i} className="flex gap-4 items-start">
                                <span className="text-white/30 font-technical text-sm mt-0.5">{i+1}.</span>
                                <span className="text-white/70 font-body text-md lowercase leading-relaxed">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'branding' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        <h2 className="text-white font-display text-3xl font-bold lowercase tracking-tight mb-8">Brand Typography</h2>
                        <div>
                          <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold mb-4">Voice Identity</p>
                          <p className="text-white/70 font-body text-base leading-loose lowercase">{blueprint.branding.voice}</p>
                        </div>
                        <div className="h-px bg-white/5 my-6" />
                        <div>
                          <p className="font-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold mb-4">Semantic Keywords</p>
                          <div className="flex flex-wrap gap-2">
                            {blueprint.branding.keywords.map(kw => (
                              <span key={kw} className="px-4 py-2 bg-[#1A1A1A] text-white/50 rounded-full text-xs font-technical uppercase tracking-widest">#{kw}</span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* The "Talk to Us" Massive Lead Generation CTA */}
                <div className="mt-6 flex justify-center">
                  <Link 
                    to="/contact" 
                    className="group relative overflow-hidden bg-primary px-6 md:px-8 py-5 md:py-6 rounded-3xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 hover:scale-[1.01] transition-all shadow-[0_0_30px_rgba(107,140,77,0.15)] hover:shadow-[0_0_50px_rgba(107,140,77,0.3)]"
                  >
                    <div className="flex flex-col text-left">
                       <span className="text-[10px] md:text-xs font-technical tracking-[0.3em] font-black uppercase text-black/60 mb-1">Blueprint Verified</span>
                       <span className="text-black font-display font-black text-xl md:text-2xl lowercase leading-tight">Ready to build this? talk to our engineers.</span>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center text-primary group-hover:bg-white group-hover:text-black transition-colors shrink-0 self-end md:self-auto">
                       <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Error View */}
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-8 p-4 bg-red-950/30 border border-red-500/20 rounded-2xl flex items-start gap-4"
              >
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-red-200 font-body leading-relaxed">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Input Master Interface (Claude Style) */}
          <div className={`relative bg-[#111111] border ${error ? 'border-red-500/30' : 'border-white/10'} rounded-3xl p-3 shadow-2xl focus-within:border-white/30 transition-all duration-300 w-full`}>
            
            {/* Main Text Area */}
            <div className="px-4 pt-3 pb-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="describe your product features or engineering goal..."
                className="w-full bg-transparent text-white resize-none min-h-[50px] max-h-[400px] outline-none text-[15px] md:text-base font-body placeholder:text-white/30 leading-relaxed overflow-hidden"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    generateBlueprint();
                  }
                }}
              />
            </div>
            
            {/* Secondary Controls & Submit */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-2 pt-3 border-t border-white/5 px-2 gap-3">
              <div className="flex items-center gap-2 bg-black/40 rounded-full pl-3 pr-2 py-1.5 border border-white/5 flex-grow max-w-full md:max-w-[400px] focus-within:border-white/20 transition-all">
                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="attach url context for live web fetching"
                  className="bg-transparent text-white/70 text-[12px] md:text-[13px] outline-none w-full placeholder:text-white/30 font-technical truncate"
                />
              </div>
              
              <div className="flex items-center justify-end w-full md:w-auto gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                   <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                   <span className="text-[9px] font-technical uppercase tracking-widest text-primary/60">Reasoning Engine</span>
                </div>
                <button
                  onClick={generateBlueprint}
                  disabled={isLoading || (!input.trim() && !url.trim())}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black hover:bg-white hover:text-black hover:scale-105 transition-all disabled:opacity-50 disabled:hover:bg-primary disabled:hover:scale-100 disabled:cursor-not-allowed group shrink-0"
                >
                  {isLoading ? (
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  ) : (
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Processing Indicator Layer */}
            {isLoading && (
              <div className="absolute inset-0 bg-[#111111]/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10 border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                  <span className="text-primary text-[11px] font-technical tracking-[0.2em] font-bold uppercase">Executing reasoning models...</span>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIPage;
