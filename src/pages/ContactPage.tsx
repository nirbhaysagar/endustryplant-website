import PageLayout from "@/components/PageLayout";
import StickyCTASection from "@/components/StickyCTASection";

const ContactPage = () => {
    return (
        <PageLayout>
            <StickyCTASection />
            <div className="bg-black py-24 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8">Get In Touch</h2>
                    <p className="text-xl font-technical mb-12 uppercase tracking-widest">hello@endustryplant.studio</p>
                    <div className="max-w-2xl mx-auto">
                        {/* Contact Form could go here */}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default ContactPage;
