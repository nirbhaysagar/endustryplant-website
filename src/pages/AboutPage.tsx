import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import ClientsBar from "@/components/ClientsBar";

const AboutPage = () => {
    return (
        <PageLayout>
            <div className="pt-20">
                <AboutSection />
                <ClientsBar />
            </div>
        </PageLayout>
    );
};

export default AboutPage;
