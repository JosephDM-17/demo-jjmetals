import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: "Structural Steel",
            description: "Custom structural steel fabrication for commercial and industrial buildings with precision engineering.",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            features: ["Custom Design", "Precision Cutting", "Quality Welding", "Installation Support"],
            capacity: "2000+ MT per year",
            link: "/services#structural-steel"
        },
        {
            title: "HVAC Ductwork",
            description: "Professional HVAC ductwork fabrication and installation for optimal air distribution systems.",
            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
            features: ["Custom Ductwork", "Air Distribution", "Energy Efficient", "Quick Installation"],
            capacity: "500+ projects annually",
            link: "/services#hvac-ductwork"
        },
        {
            title: "Metal Coils",
            description: "Precision processing of metal coils and sheets for various industrial applications.",
            icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
            features: ["Slitting Service", "Roll Forming", "Surface Finishing", "Quality Control"],
            capacity: "1500+ MT processing",
            link: "/services#metal-coils"
        },
        {
            title: "Custom Fabrication",
            description: "Specialized metal fabrication services for unique requirements and complex designs.",
            icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
            features: ["CAD Design", "CNC Machining", "Welding", "Finishing"],
            capacity: "Custom solutions",
            link: "/services#custom-fabrication"
        },
        {
            title: "Pipe Installation",
            description: "Professional pipe installation and welding services for industrial applications.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            features: ["Pipe Welding", "System Design", "Pressure Testing", "Installation"],
            capacity: "Large scale projects",
            link: "/services#pipe-installation"
        },
        {
            title: "Steel Towers",
            description: "Design and fabrication of steel towers for telecommunications and industrial use.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            features: ["Tower Design", "Galvanizing", "Assembly", "Installation"],
            capacity: "All tower types",
            link: "/services#steel-towers"
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100 bg-pattern-hexagon relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-metal-texture opacity-30"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float animate-delay-500"></div>

            <div className="container-max relative z-10">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Comprehensive metal fabrication services with cutting-edge technology and skilled craftsmanship
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift border border-slate-200 hover:border-slate-300 transition-all duration-300 animate-fadeInUp animate-delay-${(index + 1) * 100}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                    {service.capacity}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-shimmer"></div>
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={service.link}
                                className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium group-hover:translate-x-1 transition-all duration-300"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Process workflow */}
                <div className="mt-20 animate-fadeInUp animate-delay-700">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Process</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            From consultation to delivery, we ensure quality at every step
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "Understanding your requirements" },
                            { step: "02", title: "Design", desc: "CAD modeling and engineering" },
                            { step: "03", title: "Fabrication", desc: "Precision manufacturing" },
                            { step: "04", title: "Delivery", desc: "Installation and support" }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xl">{process.step}</span>
                                    </div>
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
                                    )}
                                </div>
                                <h4 className="text-lg font-bold text-slate-800 mb-2">{process.title}</h4>
                                <p className="text-slate-600">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 animate-fadeInUp animate-delay-800">
                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-colors">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Start Your Project?</h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            Get in touch with our experts for a free consultation and quote
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary hover-lift">
                                Get Free Quote
                            </Link>
                            <Link href="/projects" className="btn-secondary hover-lift">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 