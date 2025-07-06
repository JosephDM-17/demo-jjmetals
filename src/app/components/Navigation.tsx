'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const serviceItems = [
        { name: 'Structural Steel', href: '/services#structural-steel' },
        { name: 'HVAC Ductwork', href: '/services#hvac-ductwork' },
        { name: 'Metal Coils & Sheets', href: '/services#metal-coils' },
        { name: 'Custom Fabrication', href: '/services#custom-fabrication' },
        { name: 'Pipe Installation', href: '/services#pipe-installation' },
        { name: 'Steel Towers', href: '/services#steel-towers' },
    ];

    const companyItems = [
        { name: 'About Us', href: '/about' },
        { name: 'Our History', href: '/about#history' },
        { name: 'Certifications', href: '/about#certifications' },
        { name: 'Quality Standards', href: '/about#quality' },
    ];

    const handleDropdownToggle = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleMouseEnter = (dropdown: string) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-200">
            <div className="container-max">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">JJ</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-slate-800">JJ Metal Works</span>
                            <span className="text-sm text-slate-600">Professional Metal Fabrication</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('services')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href="/services"
                                className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
                                onClick={() => handleDropdownToggle('services')}
                            >
                                <span>Services</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            {activeDropdown === 'services' && (
                                <div
                                    className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in duration-200"
                                    onMouseEnter={() => setActiveDropdown('services')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="px-4 py-2 border-b border-slate-100">
                                        <p className="text-sm font-semibold text-slate-800">Our Services</p>
                                        <p className="text-xs text-slate-600">Professional metal fabrication</p>
                                    </div>
                                    {serviceItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
                                            onClick={closeDropdown}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="border-t border-slate-100 mt-2 pt-2">
                                        <Link
                                            href="/services"
                                            className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors duration-200"
                                            onClick={closeDropdown}
                                        >
                                            View All Services →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Company Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('company')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href="/about"
                                className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
                                onClick={() => handleDropdownToggle('company')}
                            >
                                <span>Company</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            {activeDropdown === 'company' && (
                                <div
                                    className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in duration-200"
                                    onMouseEnter={() => setActiveDropdown('company')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="px-4 py-2 border-b border-slate-100">
                                        <p className="text-sm font-semibold text-slate-800">About JJ Metal Works</p>
                                        <p className="text-xs text-slate-600">15+ years of excellence</p>
                                    </div>
                                    {companyItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
                                            onClick={closeDropdown}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/projects"
                            className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Contact Info & CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="text-right">
                            <div className="text-sm text-slate-600">Call Us Today</div>
                            <div className="text-lg font-semibold text-slate-700">+1 (555) 123-4567</div>
                        </div>
                        <Link href="/contact" className="btn-primary">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-700 hover:text-slate-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t bg-white border-slate-200">
                        <Link
                            href="/"
                            className="block py-2 text-slate-700 hover:text-slate-900 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>

                        {/* Mobile Services Menu */}
                        <div className="py-2">
                            <Link
                                href="/services"
                                className="flex items-center justify-between w-full text-slate-700 hover:text-slate-900 font-medium"
                                onClick={() => {
                                    handleDropdownToggle('mobile-services');
                                }}
                            >
                                <span>Services</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            {activeDropdown === 'mobile-services' && (
                                <div className="mt-2 ml-4 space-y-2">
                                    {serviceItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block py-1 text-slate-600 hover:text-slate-800 text-sm"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/services"
                                        className="block py-1 text-slate-600 hover:text-slate-800 font-medium text-sm"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        View All Services →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Company Menu */}
                        <div className="py-2">
                            <Link
                                href="/about"
                                className="flex items-center justify-between w-full text-slate-700 hover:text-slate-900 font-medium"
                                onClick={() => {
                                    handleDropdownToggle('mobile-company');
                                }}
                            >
                                <span>Company</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            {activeDropdown === 'mobile-company' && (
                                <div className="mt-2 ml-4 space-y-2">
                                    {companyItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block py-1 text-slate-600 hover:text-slate-800 text-sm"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/projects"
                            className="block py-2 text-slate-700 hover:text-slate-900 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="block py-2 text-slate-700 hover:text-slate-900 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <div className="text-lg font-semibold text-slate-700">+1 (555) 123-4567</div>
                            <Link href="/contact" className="btn-primary mt-2 inline-block" onClick={() => setIsMenuOpen(false)}>
                                Get Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
} 