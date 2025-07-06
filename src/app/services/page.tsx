import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 bg-pattern-hexagon relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-metal-texture opacity-20"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float animate-delay-500"></div>

                <div className="container-max text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">Our Services</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
                        Comprehensive metal fabrication solutions for every industry need.
                        From structural steel to custom fabrication, we deliver excellence in every project.
                    </p>
                </div>
            </section>

            {/* Detailed Service Sections */}

            {/* Structural Steel */}
            <section id="structural-steel" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Structural Steel Fabrication</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Our structural steel division specializes in the design, fabrication, and installation of structural steel components for commercial, industrial, and institutional buildings.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Services Include:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Structural beams and columns</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Trusses and frames</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Staircases and railings</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Mezzanines and platforms</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Capacity:</h3>
                                    <p className="text-slate-600">2000+ MT per year with advanced welding capabilities</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Structural steel construction and fabrication"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Structural Excellence</h3>
                                <p className="text-sm opacity-90">
                                    From design to installation, we deliver structural steel solutions that stand the test of time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HVAC Ductwork */}
            <section id="hvac-ductwork" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="HVAC ductwork installation and fabrication"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">HVAC Solutions</h3>
                                <p className="text-sm opacity-90">
                                    Custom ductwork design and fabrication for optimal air distribution systems.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">HVAC Ductwork Systems</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                We design and fabricate custom HVAC ductwork systems for commercial and industrial applications, ensuring optimal air flow and energy efficiency.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Ductwork Types:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Rectangular and round ductwork</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Spiral ductwork systems</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Fittings and transitions</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Dampers and louvers</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Annual Capacity:</h3>
                                    <p className="text-slate-600">500+ HVAC projects completed annually</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metal Coils */}
            <section id="metal-coils" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Metal Coils & Sheets</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Precision processing and fabrication of metal coils and sheets for various industrial applications with advanced forming and cutting capabilities.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Processing Services:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Slitting and cutting to size</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Roll forming and shaping</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Surface finishing and coating</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Quality inspection and testing</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Processing Capacity:</h3>
                                    <p className="text-slate-600">1500+ MT per year with precision equipment</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Metal coil processing and fabrication equipment"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Precision Processing</h3>
                                <p className="text-sm opacity-90">
                                    Advanced metal coil processing with quality control at every step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Fabrication */}
            <section id="custom-fabrication" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Custom metal fabrication and CNC machining"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                                <p className="text-sm opacity-90">
                                    Specialized fabrication for unique requirements and complex designs.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Custom Fabrication</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                From concept to completion, we provide custom metal fabrication services tailored to your specific requirements, no matter how complex or unique.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Capabilities:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>CAD design and engineering</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>CNC machining and cutting</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Welding and assembly</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Finishing and coating</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Specialties:</h3>
                                    <p className="text-slate-600">Prototype development, one-off items, and small batch production</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pipe Installation */}
            <section id="pipe-installation" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Pipe Installation Services</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Professional pipe installation services for industrial applications including water treatment, chemical processing, and manufacturing facilities.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Installation Services:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Carbon steel piping systems</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Stainless steel installations</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Pressure testing and commissioning</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Pipe supports and hangers</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Annual Capacity:</h3>
                                    <p className="text-slate-600">1000+ dia-inch per year installation capacity</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Industrial pipe installation and welding"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                                <p className="text-sm opacity-90">
                                    Expert pipe installation with full testing and commissioning services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steel Towers */}
            <section id="steel-towers" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Steel tower construction and fabrication"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Tower Engineering</h3>
                                <p className="text-sm opacity-90">
                                    From design to installation, we build towers that reach new heights.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Steel Towers</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Specialized in the design and construction of steel towers for telecommunications, power transmission, and industrial applications.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Tower Types:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Telecommunications towers</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Power transmission towers</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Water towers and tanks</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Industrial support structures</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Engineering Services:</h3>
                                    <p className="text-slate-600">Complete structural analysis, foundation design, and installation services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Workflow */}
            <section className="section-padding bg-slate-50 bg-pattern-lines relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-slate-400/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-400/10 rounded-full blur-2xl animate-float animate-delay-400"></div>

                <div className="container-max relative z-10">
                    <div className="text-center mb-16 animate-fadeInUp">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Process</h2>
                        <p className="text-xl text-slate-600">
                            From concept to completion, we follow a proven process to deliver exceptional results
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center group animate-fadeInUp animate-delay-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Consultation</h3>
                            <p className="text-slate-600">Understanding your requirements and project scope</p>
                        </div>
                        <div className="text-center group animate-fadeInUp animate-delay-200">
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Design</h3>
                            <p className="text-slate-600">CAD design and engineering for optimal solutions</p>
                        </div>
                        <div className="text-center group animate-fadeInUp animate-delay-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Fabrication</h3>
                            <p className="text-slate-600">Precision manufacturing with quality control</p>
                        </div>
                        <div className="text-center group animate-fadeInUp animate-delay-400">
                            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">4</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Installation</h3>
                            <p className="text-slate-600">Professional installation and commissioning</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white bg-pattern-dots relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-metal-texture opacity-10"></div>

                <div className="container-max text-center relative z-10">
                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-12 border border-slate-200 hover:border-slate-300 transition-colors animate-fadeInUp">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Ready to Start Your Project?</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Get in touch with our team to discuss your metal fabrication needs and receive a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary hover-lift">
                                Request Quote
                            </Link>
                            <Link href="/projects" className="btn-secondary hover-lift">
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 