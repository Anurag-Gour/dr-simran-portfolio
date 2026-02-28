"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import doctor from "@/content/doctor.json";
import Image from "next/image";

export default function HeroSection() {
    return (
        <Section
            id="home"
            className="bg-gradient-to-b from-white to-neutral-50"
        >
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="mb-6 leading-tight">
                            {doctor.name}
                        </h1>

                        <p className="text-lg md:text-xl text-blue-600 font-medium mb-4">
                            {doctor.title}
                        </p>

                        <p className="mb-8 text-neutral-600">
                            Serving Gandhinagar & Ahmedabad with
                            evidence-based aesthetic and smile design dentistry.
                        </p>

                        <div className="flex gap-4">
                            <Button href="#cases">View Smile Cases</Button>

                            <Button href="#contact" variant="outline">
                                Book Consultation
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/images/profile/profile.webp"
                            alt="Dr. Simran Jeet Singh - Consulting Aesthetic Dentist"
                            width={600}
                            height={700}
                            className="object-cover w-full h-[400px] md:h-[500px]"
                            priority
                        />
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}