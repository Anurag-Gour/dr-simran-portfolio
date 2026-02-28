import Container from "@/components/Container";
import Section from "@/components/Section";
import cases from "@/content/cases.json";
import Image from "next/image";

export const metadata = {
    title:
        "Smile Design & Cosmetic Cases | Dr. Simran Jeet Singh",
    description:
        "Explore before and after smile design and cosmetic dentistry cases treated by Dr. Simran Jeet Singh in Gandhinagar and Ahmedabad.",
};

export default function CasesPage() {
    return (
        <Section id="cases">
            <Container>
                <h1 className="mb-16 text-center">Case Portfolio</h1>

                <div className="space-y-24">
                    {cases.map((caseItem) => (
                        <div key={caseItem.id}>
                            <h2 className="text-2xl font-semibold mb-4">
                                {caseItem.title}
                            </h2>

                            <p className="mb-8 text-neutral-600">
                                {caseItem.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <Image
                                        src={caseItem.beforeImage}
                                        alt={caseItem.altBefore}
                                        width={600}
                                        height={400}
                                        className="rounded-xl object-cover w-full"
                                    />
                                    <p className="text-sm text-neutral-500 mt-2">
                                        Before
                                    </p>
                                </div>

                                <div>
                                    <Image
                                        src={caseItem.afterImage}
                                        alt={caseItem.altAfter}
                                        width={600}
                                        height={400}
                                        className="rounded-xl object-cover w-full"
                                    />
                                    <p className="text-sm text-neutral-500 mt-2">
                                        After
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}