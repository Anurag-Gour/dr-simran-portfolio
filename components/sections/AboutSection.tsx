import Container from "@/components/Container";
import Section from "@/components/Section";
import doctor from "@/content/doctor.json";

export const metadata = {
    title:
        "About Dr. Simran Jeet Singh | Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
        "Learn more about Dr. Simran Jeet Singh, consulting aesthetic dentist based in Gandhinagar, offering smile design and cosmetic dentistry services across Gandhinagar and Ahmedabad.",
};

export default function AboutPage() {
    const values = [
        {
            icon: "💎",
            title: "Ethical Excellence",
            description: "Evidence-based treatments with transparency and integrity"
        },
        {
            icon: "🤝",
            title: "Patient-Centric Care",
            description: "Your comfort and satisfaction is our top priority"
        },
        {
            icon: "🎯",
            title: "Precision & Artistry",
            description: "Combining science with aesthetic beauty"
        },
    ];

    const achievements = [
        { count: "2000+", label: "Procedures Completed" },
        { count: "99%", label: "Patient Retention Rate" },
        { count: "15", label: "Years Combined Experience" },
    ];

    return (
        <>
            <Section id="about" className="bg-gradient-to-b from-white via-blue-50 to-white py-24">
                <Container>
                    {/* Header */}
                    <div className="text-center mb-20">
                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                            Our Mission
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                            Creating Confident Smiles,<br />
                            One Patient at a Time
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            At a Consulting Aesthetic Dentist, I blend personalized smile transformations with extensive clinical expertise and evidence-based advice. My goal is to build confidence through ethical approaches combined with comprehensive patient care.
                        </p>
                    </div>

                    {/* Core Values Section */}
                    <div className="mb-24">
                        <h3 className="text-3xl font-bold text-center mb-12 text-neutral-900">
                            Why Choose <span className="text-blue-600">Dr. Simran</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer"
                                >
                                    {/* Glossy Card Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Card */}
                                    <div className="relative bg-white border-2 border-blue-200 rounded-2xl p-8 group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-xl">
                                        {/* Icon */}
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {value.icon}
                                        </div>

                                        {/* Content */}
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">
                                            {value.title}
                                        </h4>
                                        <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors">
                                            {value.description}
                                        </p>

                                        {/* Accent Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievement Metrics */}
                    <div>
                        <h3 className="text-3xl font-bold text-center mb-12 text-neutral-900">
                            Track <span className="text-blue-600">Record</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 text-center hover:shadow-lg transition-shadow"
                                >
                                    <p className="text-5xl font-bold text-blue-600 mb-4">
                                        {achievement.count}
                                    </p>
                                    <p className="text-lg font-semibold text-neutral-800">
                                        {achievement.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}