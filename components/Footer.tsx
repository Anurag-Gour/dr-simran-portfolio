import Container from "@/components/Container";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white py-16">
            <Container>
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                            Dr. Simran
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Creating beautiful, confident smiles through ethical, evidence-based cosmetic dentistry.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition text-white font-bold"
                            >
                                f
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-400 transition text-white"
                            >
                                📸
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2.5 text-neutral-400 text-sm">
                            <li>
                                <a href="#hero" className="hover:text-blue-400 transition inline-flex items-center gap-2">
                                    <span>→</span> Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-blue-400 transition inline-flex items-center gap-2">
                                    <span>→</span> About
                                </a>
                            </li>
                            <li>
                                <a href="#expertise" className="hover:text-blue-400 transition inline-flex items-center gap-2">
                                    <span>→</span> Expertise
                                </a>
                            </li>
                            <li>
                                <a href="#cases" className="hover:text-blue-400 transition inline-flex items-center gap-2">
                                    <span>→</span> Cases
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-400 transition inline-flex items-center gap-2">
                                    <span>→</span> Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:+919876543210" className="text-blue-400 hover:text-blue-300 transition font-medium">
                                    +91 9876543210
                                </a>
                            </div>
                            <div>
                                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:hello@drsimran.com" className="text-blue-400 hover:text-blue-300 transition font-medium break-all">
                                    hello@drsimran.com
                                </a>
                            </div>
                            <div>
                                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Location</p>
                                <p className="text-neutral-300">Gandhinagar, Gujarat</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-700 pt-8">
                    <p className="text-center text-neutral-500 text-xs uppercase tracking-wider">
                        © {currentYear} Dr. Simran Jeet Singh. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
