'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BuildingShowcase() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const buildings = [
        {
            id: 1,
            name: "Burj Khalifa",
            location: "Dubai, UAE",
            description: "World's tallest building showcasing steel excellence",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            name: "Dubai Frame",
            location: "Dubai, UAE",
            description: "Iconic architectural marvel with precision steel work",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            name: "Emirates Towers",
            location: "Dubai, UAE",
            description: "Twin towers demonstrating advanced steel fabrication",
            image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            name: "Museum of the Future",
            location: "Dubai, UAE",
            description: "Futuristic structure with innovative steel solutions",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % buildings.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [buildings.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % buildings.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + buildings.length) % buildings.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>

            <div className="container-max relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 animate-fadeInUp">
                        Iconic Structures
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto px-4 animate-fadeInUp animate-delay-200">
                        Inspiring architectural marvels that showcase the possibilities of expert metal fabrication and engineering excellence.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Slider */}
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        {buildings.map((building, index) => (
                            <div
                                key={building.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <Image
                                    src={building.image}
                                    alt={building.name}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                                    <div className="max-w-2xl">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 animate-fadeInUp">
                                            {building.name}
                                        </h3>
                                        <p className="text-sm sm:text-base lg:text-lg text-slate-200 mb-2 sm:mb-3 animate-fadeInUp animate-delay-100">
                                            {building.location}
                                        </p>
                                        <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-lg animate-fadeInUp animate-delay-200">
                                            {building.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
                        {buildings.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Building Grid for Mobile Alternative */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:hidden">
                    {buildings.map((building, index) => (
                        <div
                            key={building.id}
                            className={`relative h-32 sm:h-40 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 ${index === currentSlide ? 'ring-2 ring-slate-600' : ''
                                }`}
                            onClick={() => goToSlide(index)}
                        >
                            <Image
                                src={building.image}
                                alt={building.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                                <h4 className="text-xs sm:text-sm font-bold truncate">{building.name}</h4>
                                <p className="text-xs text-slate-200 truncate">{building.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Building Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
                    <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">500+</div>
                        <div className="text-xs sm:text-sm lg:text-base text-slate-600">Stories Built</div>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">50K+</div>
                        <div className="text-xs sm:text-sm lg:text-base text-slate-600">MT Steel Used</div>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">200+</div>
                        <div className="text-xs sm:text-sm lg:text-base text-slate-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">99%</div>
                        <div className="text-xs sm:text-sm lg:text-base text-slate-600">Client Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    );
} 