import About from '../components/About';
import Statistics from '../components/Statistics';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800">
                <div className="container-max text-center">
                    <h1 className="text-5xl font-bold mb-6">About JJ Metal Works</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Building Excellence Through Innovation and Craftsmanship Since 2009
                    </p>
                </div>
            </section>

            {/* About Component */}
            <About />

            {/* Statistics */}
            <Statistics />

            {/* Company History Section */}
            <section id="history" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
                            <div className="space-y-4 text-slate-600">
                                <p>
                                    Founded in 2009, JJ Metal Works began as a small family-owned business with a simple vision:
                                    to provide exceptional metal fabrication services that exceed customer expectations. What started
                                    as a two-person operation has grown into a leading metal fabrication company serving clients across
                                    multiple industries.
                                </p>
                                <p>
                                    Our journey has been marked by continuous innovation, investment in cutting-edge technology,
                                    and an unwavering commitment to quality. Today, we operate state-of-the-art facilities equipped
                                    with the latest CNC machinery, welding equipment, and quality control systems.
                                </p>
                                <p>
                                    We take pride in our skilled workforce of over 50 professionals who bring decades of combined
                                    experience to every project. From structural steel fabrication to custom HVAC systems, we deliver
                                    solutions that stand the test of time.
                                </p>
                                <div className="bg-white p-6 rounded-lg border border-slate-200 mt-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Key Milestones</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start space-x-3">
                                            <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                                            <div>
                                                <div className="font-semibold text-slate-800">2009 - Foundation</div>
                                                <div className="text-slate-600">Company established with focus on quality fabrication</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                                            <div>
                                                <div className="font-semibold text-slate-800">2015 - Expansion</div>
                                                <div className="text-slate-600">Doubled facility size and added CNC capabilities</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                                            <div>
                                                <div className="font-semibold text-slate-800">2020 - Certifications</div>
                                                <div className="text-slate-600">Achieved ISO 9001:2015 and AWS D1.1 certifications</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                                            <div>
                                                <div className="font-semibold text-slate-800">2024 - Innovation</div>
                                                <div className="text-slate-600">Launched advanced automation and sustainability initiatives</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Industrial construction and development over the years"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">15+ Years of Growth</h3>
                                <p className="text-sm opacity-90">
                                    From humble beginnings to industry leadership through continuous innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="section-padding bg-white">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Certifications</h2>
                        <p className="text-xl text-slate-600">
                            We maintain the highest industry standards and certifications
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">ISO 9001:2015</h3>
                            <p className="text-slate-600 mb-4">Quality Management System Certification</p>
                            <div className="text-sm text-slate-500">
                                <p>Certified since 2020</p>
                                <p>Next audit: 2025</p>
                            </div>
                        </div>
                        <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">AWS D1.1</h3>
                            <p className="text-slate-600 mb-4">Structural Welding Code Certification</p>
                            <div className="text-sm text-slate-500">
                                <p>Certified since 2020</p>
                                <p>All welders certified</p>
                            </div>
                        </div>
                        <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">OSHA 30</h3>
                            <p className="text-slate-600 mb-4">Occupational Safety and Health Certification</p>
                            <div className="text-sm text-slate-500">
                                <p>All supervisors certified</p>
                                <p>Safety-first approach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Standards Section */}
            <section id="quality" className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Quality Standards</h2>
                        <p className="text-xl text-slate-600">
                            Our commitment to excellence drives every aspect of our operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">Material Standards</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>ASTM certified steel grades</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Mill test certificates for all materials</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Traceability for all components</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">Process Quality</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>In-process quality inspections</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Non-destructive testing (NDT)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Final quality assurance testing</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">Documentation</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Complete project documentation</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Test reports and certificates</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Warranty and maintenance guides</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Quality control and testing in metal fabrication"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                                <p className="text-sm opacity-90">
                                    Rigorous testing and inspection ensure every project meets the highest standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 