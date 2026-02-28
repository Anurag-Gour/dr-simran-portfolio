"use client";

import Container from "./Container";

export default function Navbar() {
    return (
        <nav className="py-6 border-b border-neutral-200 bg-white sticky top-0 z-50">
            <Container className="flex justify-between items-center">

                {/* Logo / Brand */}
                <a
                    href="#home"
                    className="text-lg font-semibold tracking-tight text-neutral-900"
                >
                    Dr. Simran Jeet Singh
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <a
                        href="#about"
                        className="text-neutral-700 hover:text-blue-600 transition-colors"
                    >
                        About
                    </a>

                    <a
                        href="#expertise"
                        className="text-neutral-700 hover:text-blue-600 transition-colors"
                    >
                        Expertise
                    </a>

                    <a
                        href="#cases"
                        className="text-neutral-700 hover:text-blue-600 transition-colors"
                    >
                        Cases
                    </a>

                    <a
                        href="#contact"
                        className="text-neutral-700 hover:text-blue-600 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </Container>
        </nav>
    );
}