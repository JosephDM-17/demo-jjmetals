import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 bg-pattern-grid relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-metal-texture opacity-20"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl animate-float animate-delay-500"></div>

                <div className="container-max text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">Our Projects</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
                        Showcasing excellence in metal fabrication across diverse industries.
                        From structural steel to custom fabrication, explore our portfolio of successful projects.
                    </p>
                </div>
            </section>

            {/* Detailed Project Sections */}

            {/* Metropolitan Tower Project */}
            <section id="metropolitan-tower" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Steel Towers</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Metropolitan Steel Tower</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                A 200-meter telecommunications tower featuring advanced structural engineering,
                                galvanized finish, and cutting-edge installation techniques for maximum durability and performance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Project Details</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Height:</strong> 200 meters</li>
                                        <li><strong>Material:</strong> High-grade steel</li>
                                        <li><strong>Finish:</strong> Hot-dip galvanized</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Key Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Wind-resistant design</li>
                                        <li>Seismic compliance</li>
                                        <li>Lightning protection</li>
                                        <li>Modular construction</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Metropolitan Steel Tower - 200m telecommunications tower"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Engineering Excellence</h3>
                                <p className="text-sm opacity-90">
                                    Advanced structural engineering for telecommunications infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial HVAC Project */}
            <section id="industrial-hvac" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Industrial HVAC System - 50,000 sq ft manufacturing facility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">HVAC Excellence</h3>
                                <p className="text-sm opacity-90">
                                    Custom ductwork solution for large-scale manufacturing.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">HVAC Systems</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Industrial HVAC System</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Complete HVAC ductwork solution for a 50,000 sq ft manufacturing facility,
                                featuring energy-efficient design and optimal air distribution systems.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Specifications</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Area:</strong> 50,000 sq ft</li>
                                        <li><strong>Type:</strong> Manufacturing facility</li>
                                        <li><strong>Ductwork:</strong> Galvanized steel</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Energy-efficient design</li>
                                        <li>Variable air volume</li>
                                        <li>Zoned climate control</li>
                                        <li>Air quality monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial Frame Project */}
            <section id="commercial-frame" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Structural Steel</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Commercial Steel Frame</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Structural steel fabrication for a 15-story commercial building in downtown,
                                featuring precision-engineered components and advanced construction techniques.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Building Details</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Floors:</strong> 15 stories</li>
                                        <li><strong>Location:</strong> Downtown</li>
                                        <li><strong>Steel:</strong> 1,200 MT</li>
                                        <li><strong>Completion:</strong> 2023</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Services</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Structural design</li>
                                        <li>Precision cutting</li>
                                        <li>Assembly & erection</li>
                                        <li>Quality assurance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Commercial Steel Frame - 15-story building construction"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Structural Innovation</h3>
                                <p className="text-sm opacity-90">
                                    High-rise construction with precision-engineered steel components.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pipeline Installation Project */}
            <section id="pipeline-installation" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Pipeline Installation - Industrial water treatment facility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Pipeline Expertise</h3>
                                <p className="text-sm opacity-90">
                                    Large-scale pipeline systems for industrial applications.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Pipe Installation</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Pipeline Installation</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Large-scale pipeline system for industrial water treatment facility,
                                featuring high-pressure capabilities and corrosion-resistant materials.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">System Details</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Length:</strong> 2.5 km</li>
                                        <li><strong>Diameter:</strong> 24-48 inches</li>
                                        <li><strong>Material:</strong> Carbon steel</li>
                                        <li><strong>Completion:</strong> 2023</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Capabilities</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>High-pressure systems</li>
                                        <li>Corrosion resistance</li>
                                        <li>Leak-proof joints</li>
                                        <li>Full testing & commissioning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metal Coil Processing Project */}
            <section id="metal-coil-processing" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Metal Processing</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Metal Coil Processing</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Custom metal coil processing and finishing for automotive industry client,
                                featuring precision slitting, forming, and surface treatment capabilities.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Processing Details</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Volume:</strong> 500 MT/month</li>
                                        <li><strong>Industry:</strong> Automotive</li>
                                        <li><strong>Material:</strong> High-strength steel</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Services</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Precision slitting</li>
                                        <li>Surface finishing</li>
                                        <li>Quality control</li>
                                        <li>JIT delivery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Metal Coil Processing - Automotive industry processing"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Precision Processing</h3>
                                <p className="text-sm opacity-90">
                                    Advanced metal coil processing for automotive applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Fabrication Project */}
            <section id="custom-fabrication" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Custom Fabrication - Unique architectural elements"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                                <p className="text-sm opacity-90">
                                    Specialized fabrication for unique architectural requirements.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Custom Work</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Custom Fabrication</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Specialized metal fabrication for unique architectural elements,
                                featuring complex geometries and precision engineering for aesthetic and functional requirements.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Project Details</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Type:</strong> Architectural elements</li>
                                        <li><strong>Complexity:</strong> High precision</li>
                                        <li><strong>Material:</strong> Stainless steel</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Techniques</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>CAD design</li>
                                        <li>CNC machining</li>
                                        <li>Complex welding</li>
                                        <li>Mirror finish</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bridge Construction Project */}
            <section id="bridge-construction" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Structural Steel</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Bridge Construction</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Structural steel fabrication for a 500-meter highway bridge spanning major river,
                                featuring advanced engineering and precision assembly for maximum safety and durability.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Bridge Specifications</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Length:</strong> 500 meters</li>
                                        <li><strong>Steel Weight:</strong> 2,500 MT</li>
                                        <li><strong>Load Capacity:</strong> Heavy traffic</li>
                                        <li><strong>Completion:</strong> 2023</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Engineering Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Seismic resistance design</li>
                                        <li>Weather protection coating</li>
                                        <li>Modular construction</li>
                                        <li>Load testing certified</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Bridge Construction - Highway bridge structural steel"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Infrastructure Excellence</h3>
                                <p className="text-sm opacity-90">
                                    Major highway bridge construction with advanced steel fabrication techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power Plant Infrastructure */}
            <section id="power-plant" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Power Plant Infrastructure - Industrial power generation facility"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Power Generation</h3>
                                <p className="text-sm opacity-90">
                                    Complete metal fabrication for modern power generation infrastructure.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Industrial</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Power Plant Infrastructure</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Complete metal fabrication for new 500MW power generation facility,
                                including pressure vessels, heavy equipment mounting, and safety systems.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Project Scale</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Capacity:</strong> 500MW generation</li>
                                        <li><strong>Steel Work:</strong> 3,000 MT</li>
                                        <li><strong>Pressure Vessels:</strong> 15 units</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Specialized Work</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Heavy equipment mounting</li>
                                        <li>High-pressure systems</li>
                                        <li>Safety containment</li>
                                        <li>Environmental compliance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airport Terminal */}
            <section id="airport-terminal" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Commercial</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Airport Terminal Expansion</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Structural steel and architectural metalwork for major airport terminal expansion,
                                featuring complex geometry and architectural excellence.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Terminal Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Area:</strong> 100,000 sq ft expansion</li>
                                        <li><strong>Gates:</strong> 12 additional gates</li>
                                        <li><strong>Steel:</strong> 1,800 MT</li>
                                        <li><strong>Completion:</strong> 2023</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Design Elements</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Architectural steel framework</li>
                                        <li>Curtain wall systems</li>
                                        <li>Complex curved geometry</li>
                                        <li>Seismic compliance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Airport Terminal Expansion - Modern terminal architecture"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Architectural Excellence</h3>
                                <p className="text-sm opacity-90">
                                    Modern airport terminal with sophisticated steel and glass architecture.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marine Port Facilities */}
            <section id="marine-port" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Marine Port Facilities - Container port infrastructure"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Marine Engineering</h3>
                                <p className="text-sm opacity-90">
                                    Heavy-duty port facilities designed for extreme marine conditions.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Marine</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Marine Port Facilities</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Heavy-duty steel fabrication for container port loading facilities,
                                featuring marine-grade materials and extreme load capacity.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Port Specifications</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Cranes:</strong> 4 container cranes</li>
                                        <li><strong>Load Capacity:</strong> 500 tons each</li>
                                        <li><strong>Steel Grade:</strong> Marine grade</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Marine Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Corrosion resistance</li>
                                        <li>Heavy lifting capability</li>
                                        <li>Salt water protection</li>
                                        <li>Storm resistance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stadium Structure */}
            <section id="stadium-structure" className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Sports & Entertainment</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Stadium Steel Structure</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Roof structure and seating framework for 60,000-seat stadium,
                                featuring innovative cantilever design and weather protection systems.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Stadium Details</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Capacity:</strong> 60,000 seats</li>
                                        <li><strong>Roof Span:</strong> 200m cantilever</li>
                                        <li><strong>Steel Weight:</strong> 4,000 MT</li>
                                        <li><strong>Completion:</strong> 2023</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Design Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Cantilever roof design</li>
                                        <li>Retractable sections</li>
                                        <li>Weather protection</li>
                                        <li>Acoustic optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Stadium Steel Structure - Modern stadium architecture"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Sports Architecture</h3>
                                <p className="text-sm opacity-90">
                                    Innovative stadium design with advanced steel structure and modern amenities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Renewable Energy Farm */}
            <section id="renewable-energy" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Renewable Energy Farm - Wind turbine infrastructure"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Clean Energy</h3>
                                <p className="text-sm opacity-90">
                                    Supporting renewable energy infrastructure with precision steel fabrication.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">Renewable Energy</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Renewable Energy Farm</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Wind turbine foundations and electrical infrastructure for wind farm,
                                featuring environmental compliance and sustainable construction practices.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Farm Specifications</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Turbines:</strong> 50 wind turbines</li>
                                        <li><strong>Capacity:</strong> 100MW total</li>
                                        <li><strong>Foundations:</strong> Deep anchor systems</li>
                                        <li><strong>Completion:</strong> 2024</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Green Features</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Environmental compliance</li>
                                        <li>Sustainable materials</li>
                                        <li>Wildlife protection</li>
                                        <li>Minimal land impact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
                        <p className="text-xl text-slate-600">
                            Trusted partner across multiple industries for metal fabrication excellence
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Construction</h3>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Manufacturing</h3>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Technology</h3>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Energy</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-max text-center">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Ready to Start Your Project?</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Join our satisfied clients and experience the difference of working with true metal fabrication experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Get Started Today
                        </Link>
                        <Link href="/services" className="btn-secondary">
                            View Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
} 