import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Metropolitan Tower",
            category: "Steel Towers",
            description: "200-meter telecommunications tower with advanced structural engineering and galvanized finish.",
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            year: "2024",
            specs: ["200m Height", "Galvanized Steel", "Seismic Resistant"],
            link: "/projects#metropolitan-tower"
        },
        {
            id: 2,
            title: "Industrial HVAC System",
            category: "HVAC Ductwork",
            description: "Complete HVAC ductwork for 50,000 sq ft manufacturing facility with energy-efficient design.",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            year: "2024",
            specs: ["50,000 sq ft", "Energy Efficient", "VAV Systems"],
            link: "/projects#industrial-hvac"
        },
        {
            id: 3,
            title: "Commercial Building Frame",
            category: "Structural Steel",
            description: "15-story commercial building structural steel fabrication with precision engineering.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            year: "2023",
            specs: ["15 Stories", "1,200 MT Steel", "Precision Engineering"],
            link: "/projects#commercial-frame"
        },
        {
            id: 4,
            title: "Pipeline Installation",
            category: "Pipe Installation",
            description: "2.5km industrial pipeline system with high-pressure capabilities and corrosion resistance.",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            year: "2023",
            specs: ["2.5km Length", "High Pressure", "Corrosion Resistant"],
            link: "/projects#pipeline-installation"
        },
        {
            id: 5,
            title: "Metal Coil Processing",
            category: "Metal Processing",
            description: "Custom metal coil processing for automotive industry with precision slitting and finishing.",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            year: "2024",
            specs: ["500 MT/month", "Automotive Grade", "Precision Slitting"],
            link: "/projects#metal-coil-processing"
        },
        {
            id: 6,
            title: "Custom Fabrication",
            category: "Custom Work",
            description: "Specialized architectural elements with complex geometries and precision engineering.",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            year: "2024",
            specs: ["Architectural Elements", "Complex Geometry", "Stainless Steel"],
            link: "/projects#custom-fabrication"
        }
    ];

    return (
        <section id="projects" className="section-padding bg-slate-50">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 animate-fadeInUp">
                        Featured Projects
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto px-4 animate-fadeInUp animate-delay-200">
                        Showcasing our expertise in metal fabrication across diverse industries.
                        From structural steel to custom fabrication, explore our portfolio of successful projects.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover-lift transition-all duration-300 border border-slate-200 animate-fadeInUp`}
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                    <span className="bg-slate-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                {/* Year Badge */}
                                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                                    <span className="bg-white/90 text-slate-800 text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                                        {project.year}
                                    </span>
                                </div>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Specifications */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {project.specs.map((spec, specIndex) => (
                                            <span
                                                key={specIndex}
                                                className="bg-slate-100 text-slate-700 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center justify-center w-full px-4 py-2 sm:px-6 sm:py-3 bg-slate-600 hover:bg-slate-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-300"
                                >
                                    View Details
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-slate-200 mb-8 sm:mb-12 lg:mb-16">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                            Project Statistics
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                            Numbers that showcase our experience and expertise in metal fabrication
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        <div className="text-center p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">100+</div>
                            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Happy Clients</div>
                        </div>
                        <div className="text-center p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">500+</div>
                            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Projects Completed</div>
                        </div>
                        <div className="text-center p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">50+</div>
                            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Skilled Workers</div>
                        </div>
                        <div className="text-center p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">15+</div>
                            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Years Experience</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4 opacity-90">
                            Join our satisfied clients and experience the difference of working with true metal fabrication experts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-white text-slate-800 hover:bg-slate-100 font-semibold py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-8 text-sm sm:text-base rounded-lg transition-colors duration-300 text-center">
                                Get Started Today
                            </Link>
                            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-8 text-sm sm:text-base rounded-lg transition-colors duration-300 text-center">
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 