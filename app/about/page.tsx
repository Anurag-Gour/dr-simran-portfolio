import Container from "@/components/Container";
import Section from "@/components/Section";
import doctor from "@/content/doctor.json";
import Image from "next/image";

export const metadata = {
    title:
        "About Dr. Simran Jeet Singh | Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
        "Learn more about Dr. Simran Jeet Singh, consulting aesthetic dentist based in Gandhinagar, offering smile design and cosmetic dentistry services across Gandhinagar and Ahmedabad.",
};

export default function AboutPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src="/images/profile/profile.webp"
                                alt="About Dr. Simran Jeet Singh"
                                width={600}
                                height={700}
                                className="object-cover w-full"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="mb-6">About</h1>

                            <p className="mb-6 text-neutral-700">
                                {doctor.about}
                            </p>

                            <h2 className="text-2xl mb-4">Philosophy</h2>

                            <p className="text-neutral-700">
                                {doctor.philosophy}
                            </p>
                        </div>

                    </div>
                </Container>
            </Section>
        </>
    );
}