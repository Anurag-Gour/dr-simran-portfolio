import Container from "@/components/Container";
import Section from "@/components/Section";
import services from "@/content/services.json";

export const metadata = {
    title:
        "Clinical Expertise | Dr. Simran Jeet Singh - Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
        "Explore the clinical expertise of Dr. Simran Jeet Singh including smile design, cosmetic dentistry, and aesthetic dental treatments in Gandhinagar and Ahmedabad.",
};

export default function ExpertisePage() {
    const serviceIcons: Record<string, string> = {
        "Smile Design": "✨",
        "Cosmetic Dentistry": "💎",
        "Teeth Whitening": "🦷",
    };

    const colors = [
        { bg: "bg-blue-50", border: "border-blue-200", hover: "group-hover:border-blue-500", accent: "from-blue-500 to-blue-600", text: "text-blue-600" },
        { bg: "bg-purple-50", border: "border-purple-200", hover: "group-hover:border-purple-500", accent: "from-purple-500 to-purple-600", text: "text-purple-600" },
        { bg: "bg-pink-50", border: "border-pink-200", hover: "group-hover:border-pink-500", accent: "from-pink-500 to-pink-600", text: "text-pink-600" },
    ];

    return (
        <Section id="expertise" className="bg-gradient-to-b from-white via-blue-50 to-white py-24">
            <Container>
                <div className="text-center mb-20">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                        Areas of <span className="text-blue-600">Expertise</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Specialized dental care services designed to give you the confident smile you deserve. Each treatment is personalized for your unique needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const color = colors[index % colors.length];
                        const icon = serviceIcons[service.title] || "🦷";

                        return (
                            <div
                                key={index}
                                className="group relative h-full cursor-pointer"
                            >
                                {/* Glossy Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl`}></div>

                                {/* Card Container */}
                                <div className={`relative h-full ${color.bg} border-2 ${color.border} ${color.hover} rounded-2xl p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                                    {/* Top Accent Bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.accent} rounded-t-2xl`}></div>

                                    {/* Icon */}
                                    <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
                                        {icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold mb-4 text-neutral-900 ${color.text}`}>
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className={color.text}>Discover More</span>
                                        <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                                    </div>

                                    {/* Glass Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white opacity-0 group-hover:opacity-10 rounded-2xl pointer-events-none transition-opacity"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="mt-24 grid md:grid-cols-4 gap-6">
                    {[
                        { icon: "⚡", title: "Quick Results", desc: "Fast and efficient treatments" },
                        { icon: "🛡️", title: "Safe & Proven", desc: "Evidence-based procedures" },
                        { icon: "😊", title: "Pain-Free", desc: "Comfortable experiences" },
                        { icon: "🎯", title: "Personalized", desc: "Customized for you" },
                    ].map((benefit, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-3">{benefit.icon}</div>
                            <h4 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h4>
                            <p className="text-sm text-neutral-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}