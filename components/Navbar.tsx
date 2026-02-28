"use client";

import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
    return (
        <nav className="py-6 border-b border-neutral-200">
            <Container className="flex justify-between items-center">
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight"
                >
                    Dr. Simran Jeet Singh
                </Link>

                <div className="flex gap-8 text-sm font-medium">
                    <Link href="/about">About</Link>
                    <Link href="/expertise">Expertise</Link>
                    <Link href="/cases">Cases</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </Container>
        </nav>
    );
}