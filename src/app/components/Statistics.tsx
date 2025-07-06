import Image from 'next/image';
import Link from 'next/link';

export default function Statistics() {
    const stats = [
        {
            number: "2000+",
            label: "MT Steel Fabricated",
            description: "High-quality structural steel projects completed",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"
        },
        {
            number: "500+",
            label: "HVAC Projects",
            description: "Custom ductwork systems installed",
            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2"
        },
        {
            number: "1500+",
            label: "MT Metal Coils",
            description: "Processed with precision and quality",
            icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        },
        {
            number: "100+",
            label: "Satisfied Clients",
            description: "Building long-term partnerships",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        },
        {
            number: "50+",
            label: "Skilled Workers",
            description: "Expert craftsmen and engineers",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            number: "10+",
            label: "Industries Served",
            description: "Diverse sector experience",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            number: "15+",
            label: "Years Experience",
            description: "Proven track record of excellence",
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            number: "99.5%",
            label: "On-Time Delivery",
            description: "Reliable project completion",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-slate-100 to-slate-200 bg-pattern-lines relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                    alt="Industrial metal fabrication facility"
                    fill
                    className="object-cover opacity-5"
                    sizes="100vw"
                />
            </div>

            {/* Animated elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-slate-400/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-400/10 rounded-full blur-2xl animate-float animate-delay-400"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-400/10 rounded-full blur-2xl animate-float animate-delay-600"></div>

            <div className="container-max relative z-10">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        Our Achievements
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Numbers that speak for our commitment to quality and excellence in metal fabrication
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift border border-slate-200 hover:border-slate-300 transition-all duration-300 animate-fadeInUp animate-delay-${(index + 1) * 100}`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                                    </svg>
                                </div>

                                <div className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
                                    {stat.number}
                                </div>

                                <div className="text-lg font-semibold text-slate-700 mb-2">
                                    {stat.label}
                                </div>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement timeline */}
                <div className="mt-20 animate-fadeInUp animate-delay-700">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Milestones that mark our growth and commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { year: "2009", title: "Company Founded", desc: "Started with a vision of quality metal fabrication" },
                            { year: "2015", title: "Major Expansion", desc: "Doubled our production capacity and workforce" },
                            { year: "2024", title: "Innovation Leader", desc: "Industry leader in advanced fabrication techniques" }
                        ].map((milestone, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg">{milestone.year}</span>
                                    </div>
                                    {index < 2 && (
                                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h4>
                                <p className="text-slate-600">{milestone.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-16 animate-fadeInUp animate-delay-800">
                    <div className="bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl p-8 border border-slate-300 hover:border-slate-400 transition-colors">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Join Our Success Story</h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            Be part of our growing list of satisfied clients and successful projects
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary hover-lift">
                                Start Your Project
                            </Link>
                            <Link href="/about" className="btn-secondary hover-lift">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 