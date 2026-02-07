import CertificateCard from "../components/CertificateCard";

const certificates = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "ORACLE",
        date: "Sep 2025 - Sep 2027",
        href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=27BFE120589FCBA43ECA33E2D74A7B8D02A2DBFAAB2679E8D52F405643900BDD",
        thumb: "public/oracle cloud.png",
    },
    {
        title: "Microsoft Global AI Tour - Season of Agents",
        issuer: "Microsoft Corporation Pvt. Ltd.",
        date: "May 2025",
        href: "https://example.com/certificates/frontend.pdf",
        thumb: "public/microsoft logo.png",
    },
    {
        title: "SQL Intermediate",
        issuer: "HackerRank",             
        date: "Jun 2024", 
        href: "https://www.hackerrank.com/certificates/iframe/9aaaf8e4ee27", 
        thumb: "public/HR logo.png", 
    },
     {
        title: "IDEATHON 2.0",
        issuer: "PCU, Pune",
        date: "April 2025",
        href: "https://example.com/certificates/data-analysis.pdf",
        thumb: "public/Projects/ideathon logo.jpg",
    }, {
        title: "TCS TechBytes",
        issuer: "TCS",
        date: "April 2025",
        href: "https://example.com/certificates/data-analysis.pdf",
        thumb: "public/Projects/TCS.jpg",
    }, {
        title: "Explainable AI",
        issuer: "IEEE Computer Society",
        date: "Nov 2024",
        href: "https://example.com/certificates/data-analysis.pdf",
        thumb: "public/Projects/IEEE.jpg",
    }, 
    {
        title: "AI-nization",
        issuer: "Rakuten India",
        date: "Nov 2024",
        href: "https://example.com/certificates/data-analysis.pdf",
        thumb: "public/Projects/Rakuten.png",
    }, 
    {
        title: "Google AI Essentials",
        issuer: "Google",
        date: "June 2024",
        href: "https://example.com/certificates/data-analysis.pdf",
        thumb: "public/Projects/Google.png",
    }, 
    {
        title: "Walmart USA - Advanced Software Engineering Job Simulation",
        issuer: "Forage",
        date: "Dec 2024",
        href: "https://example.com/certificates/data-analysis.pdf",
        thumb: "public/Projects/walmart logo.png",
    }, 
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        Certifications
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-6">Verified Certificates</h2>
                    <p className="text-muted-foreground mt-3">
                        A curated list of professional certificates and achievements. Click any card to view or download the certificate.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((c, idx) => (
                        <CertificateCard key={idx} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;