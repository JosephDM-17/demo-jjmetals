'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Close all submenus when main menu is toggled
        setIsMobileServicesOpen(false);
        setIsMobileCompanyOpen(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
        setIsMobileCompanyOpen(false);
    };

    const toggleMobileServices = () => {
        setIsMobileServicesOpen(!isMobileServicesOpen);
        setIsMobileCompanyOpen(false); // Close other submenu
    };

    const toggleMobileCompany = () => {
        setIsMobileCompanyOpen(!isMobileCompanyOpen);
        setIsMobileServicesOpen(false); // Close other submenu
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-200">
            <div className="container-max">
                <div className="flex justify-between items-center py-3 sm:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm sm:text-base">JJ</span>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">JJ Metal Works</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                        <Link href="/" className="nav-mobile-friendly text-slate-700 hover:text-slate-900 font-medium transition-colors">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <Link
                                href="/services"
                                className="nav-mobile-friendly text-slate-700 hover:text-slate-900 font-medium transition-colors flex items-center"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                Services
                                <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Services Dropdown Menu */}
                            {isServicesOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-3 z-50"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Services</div>
                                    <Link href="/services#structural-steel" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Structural Steel
                                    </Link>
                                    <Link href="/services#hvac-ductwork" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        HVAC Ductwork
                                    </Link>
                                    <Link href="/services#metal-coils" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Metal Coils & Sheets
                                    </Link>
                                    <Link href="/services#custom-fabrication" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Custom Fabrication
                                    </Link>
                                    <Link href="/services#pipe-installation" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Pipe Installation
                                    </Link>
                                    <Link href="/services#steel-towers" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Steel Towers
                                    </Link>
                                    <div className="border-t border-slate-200 my-2"></div>
                                    <Link href="/services" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">
                                        View All Services →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Company Dropdown */}
                        <div className="relative">
                            <Link
                                href="/about"
                                className="nav-mobile-friendly text-slate-700 hover:text-slate-900 font-medium transition-colors flex items-center"
                                onMouseEnter={() => setIsCompanyOpen(true)}
                                onMouseLeave={() => setIsCompanyOpen(false)}
                            >
                                Company
                                <svg className={`w-4 h-4 ml-1 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Company Dropdown Menu */}
                            {isCompanyOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-3 z-50"
                                    onMouseEnter={() => setIsCompanyOpen(true)}
                                    onMouseLeave={() => setIsCompanyOpen(false)}
                                >
                                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Company</div>
                                    <Link href="/about" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        About Us
                                    </Link>
                                    <Link href="/about#history" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Our History
                                    </Link>
                                    <Link href="/about#certifications" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Certifications
                                    </Link>
                                    <Link href="/about#quality" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                                        Quality Standards
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/projects" className="nav-mobile-friendly text-slate-700 hover:text-slate-900 font-medium transition-colors">
                            Projects
                        </Link>
                        <Link href="/contact" className="nav-mobile-friendly text-slate-700 hover:text-slate-900 font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Contact Info & CTA - Desktop */}
                    <div className="hidden xl:flex items-center space-x-4">
                        <div className="text-right">
                            <div className="text-sm font-semibold text-slate-800">+971 XX XXX XXXX</div>
                            <div className="text-xs text-slate-600">info@jjmetalworks.ae</div>
                        </div>
                        <Link href="/contact" className="btn-primary text-sm">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-slate-200 py-4">
                        <div className="space-y-2">
                            <Link
                                href="/"
                                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>

                            {/* Mobile Services */}
                            <div>
                                <button
                                    onClick={toggleMobileServices}
                                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                    Services
                                    <svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isMobileServicesOpen && (
                                    <div className="mt-2 ml-4 space-y-1">
                                        <Link href="/services#structural-steel" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Structural Steel
                                        </Link>
                                        <Link href="/services#hvac-ductwork" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            HVAC Ductwork
                                        </Link>
                                        <Link href="/services#metal-coils" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Metal Coils & Sheets
                                        </Link>
                                        <Link href="/services#custom-fabrication" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Custom Fabrication
                                        </Link>
                                        <Link href="/services#pipe-installation" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Pipe Installation
                                        </Link>
                                        <Link href="/services#steel-towers" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Steel Towers
                                        </Link>
                                        <Link href="/services" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium" onClick={closeMenu}>
                                            View All Services →
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Company */}
                            <div>
                                <button
                                    onClick={toggleMobileCompany}
                                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                    Company
                                    <svg className={`w-4 h-4 transition-transform ${isMobileCompanyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isMobileCompanyOpen && (
                                    <div className="mt-2 ml-4 space-y-1">
                                        <Link href="/about" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            About Us
                                        </Link>
                                        <Link href="/about#history" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Our History
                                        </Link>
                                        <Link href="/about#certifications" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Certifications
                                        </Link>
                                        <Link href="/about#quality" className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onClick={closeMenu}>
                                            Quality Standards
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/projects"
                                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Contact Info & CTA */}
                        <div className="mt-6 pt-4 border-t border-slate-200">
                            <div className="px-4 mb-4">
                                <div className="text-sm font-semibold text-slate-800">+971 XX XXX XXXX</div>
                                <div className="text-sm text-slate-600">info@jjmetalworks.ae</div>
                            </div>
                            <div className="px-4">
                                <Link href="/contact" className="btn-primary w-full text-center" onClick={closeMenu}>
                                    Get Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 