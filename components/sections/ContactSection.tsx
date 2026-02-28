"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    return (
        <Section id="contact">
            <Container>
                <h1 className="mb-12 text-center">Book Consultation</h1>

                <form
                    action="https://formspree.io/f/mqedozoz"
                    method="POST"
                    onSubmit={() => setLoading(true)}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    {/* Honeypot Field (Anti-Spam) */}
                    <input type="text" name="_gotcha" className="hidden" />

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <input type="hidden" name="_redirect" value="/thank-you" />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        {loading ? "Sending..." : "Submit Request"}
                    </button>
                </form>
            </Container>
        </Section>
    );
}