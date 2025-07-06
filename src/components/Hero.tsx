'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images showcasing different business areas
    const heroImages = [
        {
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Metal fabrication and welding workshop",
            title: "Advanced Fabrication Workshop"
        },
        {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Structural steel building construction",
            title: "Structural Steel Excellence"
        },
        {
            src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "HVAC ductwork installation",
            title: "HVAC Systems & Ductwork"
        },
        {
            src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Industrial steel structures and towers",
            title: "Steel Towers & Infrastructure"
        },
        {
            src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Metal processing and machinery",
            title: "Precision Metal Processing"
        },
        {
            src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            alt: "Custom metal fabrication work",
            title: "Custom Metal Solutions"
        }
    ];

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="relative h-screen bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 overflow-hidden">
            {/* Background Image Slideshow */}
            <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-30' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>

            {/* Background patterns and floating elements */}
            <div className="absolute inset-0 bg-pattern-grid"></div>
            <div className="absolute top-10 left-10 floating-element-mobile bg-slate-300/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-20 right-16 floating-element-mobile bg-slate-300/10 rounded-full blur-2xl animate-float animate-delay-400"></div>
            <div className="absolute bottom-32 left-20 floating-element-mobile bg-slate-300/10 rounded-full blur-2xl animate-float animate-delay-200"></div>
            <div className="absolute bottom-40 right-10 floating-element-mobile bg-slate-300/10 rounded-full blur-2xl animate-float animate-delay-600"></div>

            {/* Main Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 py-4">
                <div className="container-max w-full max-w-6xl">
                    {/* Content Area */}
                    <div className="text-center mb-4 sm:mb-6">
                        {/* Main heading */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 animate-fadeInUp">
                            <span className="block">JJ Metal Works</span>
                            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mt-1">
                                Excellence in Metal Fabrication
                            </span>
                        </h1>

                        {/* Dynamic subtitle based on current image */}
                        <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-3 sm:mb-4 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
                            <span className="block mb-1 font-semibold text-slate-700">
                                {heroImages[currentImageIndex].title}
                            </span>
                            <span className="text-xs sm:text-sm md:text-base">
                                Leading metal fabrication company in the UAE with 15+ years of experience in
                                structural steel, HVAC systems, and custom fabrication solutions.
                            </span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 sm:mb-6 animate-fadeInUp animate-delay-400">
                            <Link href="/contact" className="btn-primary text-center text-sm sm:text-base">
                                Get Free Quote
                            </Link>
                            <Link href="/projects" className="btn-secondary text-center text-sm sm:text-base">
                                View Our Work
                            </Link>
                        </div>
                    </div>

                    {/* Statistics Cards */}
                    <div className="mb-3 sm:mb-4">
                        <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto">
                            {/* Card 1 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-slate-200 hover-lift animate-fadeInUp animate-delay-500">
                                <div className="text-sm sm:text-lg md:text-xl font-bold text-slate-800">2000+</div>
                                <div className="text-xs text-slate-600">MT Steel/Year</div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-slate-200 hover-lift animate-fadeInUp animate-delay-600">
                                <div className="text-sm sm:text-lg md:text-xl font-bold text-slate-800">500+</div>
                                <div className="text-xs text-slate-600">HVAC Projects</div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-slate-200 hover-lift animate-fadeInUp animate-delay-700">
                                <div className="text-sm sm:text-lg md:text-xl font-bold text-slate-800">1500+</div>
                                <div className="text-xs text-slate-600">MT Coils/Year</div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center border border-slate-200 hover-lift animate-fadeInUp animate-delay-800">
                                <div className="text-sm sm:text-lg md:text-xl font-bold text-slate-800">15+</div>
                                <div className="text-xs text-slate-600">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Image indicators */}
                    <div className="flex justify-center space-x-2 animate-fadeInUp animate-delay-900">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                    ? 'bg-slate-600 scale-125'
                                    : 'bg-slate-400 hover:bg-slate-500'
                                    }`}
                                aria-label={`View ${heroImages[index].title}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 