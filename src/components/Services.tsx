import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: "Structural Steel",
            description: "Complete structural steel fabrication including beams, columns, trusses, and custom structural components for commercial and industrial buildings.",
            features: ["Structural beams & columns", "Trusses & frames", "Custom fabrication", "Installation services"],
            capacity: "2000+ MT per year",
            link: "/services#structural-steel"
        },
        {
            title: "HVAC Ductwork",
            description: "Professional HVAC ductwork design, fabrication, and installation for optimal air distribution and energy efficiency.",
            features: ["Custom ductwork systems", "Galvanized steel construction", "Energy-efficient design", "Professional installation"],
            capacity: "500+ projects annually",
            link: "/services#hvac-ductwork"
        },
        {
            title: "Metal Coils & Sheets",
            description: "Precision metal coil processing, slitting, forming, and finishing services for various industrial applications.",
            features: ["Precision slitting", "Roll forming", "Surface finishing", "Quality control"],
            capacity: "1500+ MT per year",
            link: "/services#metal-coils"
        },
        {
            title: "Custom Fabrication",
            description: "Specialized custom metal fabrication services for unique requirements, from concept to completion.",
            features: ["CAD design", "CNC machining", "Welding & assembly", "Finishing & coating"],
            capacity: "Prototype to production",
            link: "/services#custom-fabrication"
        },
        {
            title: "Pipe Installation",
            description: "Professional pipe installation services for industrial applications including water treatment and chemical processing.",
            features: ["Carbon steel piping", "Stainless steel systems", "Pressure testing", "Commissioning"],
            capacity: "1000+ dia-inch/year",
            link: "/services#pipe-installation"
        },
        {
            title: "Steel Towers",
            description: "Specialized steel tower construction for telecommunications, power transmission, and industrial applications.",
            features: ["Telecommunications towers", "Power transmission", "Water towers", "Industrial structures"],
            capacity: "Complete engineering services",
            link: "/services#steel-towers"
        }
    ];

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 animate-fadeInUp">
                        Our Services
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto px-4 animate-fadeInUp animate-delay-200">
                        Comprehensive metal fabrication solutions for every industry need.
                        From structural steel to custom fabrication, we deliver excellence in every project.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 hover-lift transition-all duration-300 animate-fadeInUp`}
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            {/* Service Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                                {service.title}
                            </h3>

                            {/* Service Description */}
                            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Capacity */}
                            <div className="mb-4 sm:mb-6">
                                <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-200">
                                    <div className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">Capacity:</div>
                                    <div className="text-sm sm:text-base text-slate-600">{service.capacity}</div>
                                </div>
                            </div>

                            {/* Learn More Button */}
                            <Link
                                href={service.link}
                                className="inline-flex items-center justify-center w-full px-4 py-2 sm:px-6 sm:py-3 bg-slate-600 hover:bg-slate-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-300"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                    <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-slate-200">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                            Our expert team can design and fabricate custom metal solutions tailored to your specific requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary text-center">
                                Request Quote
                            </Link>
                            <Link href="/projects" className="btn-secondary text-center">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 