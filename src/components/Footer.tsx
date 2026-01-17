import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";
import logo from "@/assets/rehearing-logo.png";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Hearing Aids", href: "#hearing-aids" },
    { name: "Products", href: "#products" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

const services = [
    "Hearing Evaluation",
    "Hearing Aid Fitting",
    "Tinnitus Management",
    "Pediatric Audiology",
    "Custom Earplugs",
    "Repair & Maintenance",
];

const products = [
    "Digital Hearing Aids",
    "Invisible (CIC/IIC)",
    "Rechargeable Aids",
    "Bluetooth Hearing Aids",
    "BTE Hearing Aids",
    "RIC Hearing Aids",
];

export const Footer = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-primary text-primary-foreground">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <img
                            src={logo}
                            alt="REHEARing"
                            className="h-12 w-auto mb-6 brightness-0 invert"
                        />
                        <p className="text-white/70 leading-relaxed mb-6">
                            REHEARing is Delhi's trusted hearing care clinic
                            offering premium hearing aids, expert audiology
                            services, and compassionate patient care.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Linkedin, Youtube].map(
                                (Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() =>
                                            scrollToSection(link.href)
                                        }
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-white/70">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products & Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">
                            Products
                        </h4>
                        <ul className="space-y-3 mb-8">
                            {products.map((product) => (
                                <li key={product}>
                                    <span className="text-white/70">
                                        {product}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap justify-center gap-8 text-sm">
                        <a
                            href="tel:+91-9899252548"
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            +91 9899252548
                        </a>
                        <a
                            href="mailto:info@rehearing.in"
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            contact@rehearingclinic.com
                        </a>
                        <span className="flex items-center gap-2 text-white/70">
                            <MapPin className="w-4 h-4" />
                            Master Block, A-157, 3rd floor opp. Madhuban Park,
                            Shakarpur, Delhi-110092
                        </span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black/20 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        <p>
                            © {new Date().getFullYear()} REHEARing – Hearing &
                            Balance Clinic. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
