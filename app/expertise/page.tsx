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
    return (
        <Section>
            <Container>
                <h1 className="mb-16 text-center">Clinical Expertise</h1>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-4">
                                {service.title}
                            </h2>

                            <p className="text-neutral-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}