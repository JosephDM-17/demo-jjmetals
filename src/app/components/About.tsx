import Image from 'next/image';

export default function About() {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose JJ Metal Works?</h2>
                            <p className="text-xl text-slate-600">
                                With over 15 years of experience in metal fabrication and engineering,
                                we combine traditional craftsmanship with modern technology to deliver
                                exceptional results for every project.
                            </p>
                        </div>

                        {/* Vision, Mission, Values */}
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Vision
                                </h3>
                                <p className="text-slate-700">
                                    To be the leading metal fabrication company, providing innovative solutions
                                    and setting industry standards for quality, safety, and customer satisfaction.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Mission
                                </h3>
                                <p className="text-slate-700">
                                    To innovate and build on our history of product excellence, providing sustainable,
                                    reliable, and quality products and services that exceed customer expectations.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    Values
                                </h3>
                                <p className="text-slate-700">
                                    Quality, integrity, safety, and customer satisfaction are the pillars of our business.
                                    We believe in building long-term relationships through trust and excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="space-y-6">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Modern metal fabrication facility with advanced machinery"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">State-of-the-Art Facility</h3>
                                <p className="text-sm opacity-90">
                                    Our modern fabrication facility equipped with the latest CNC machinery and quality control systems.
                                </p>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 rounded-xl border border-slate-200">
                                <div className="w-16 h-16 mx-auto mb-4 bg-slate-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold mb-2">Professionality</h4>
                                <p className="text-sm text-slate-600">Manufacturing at its best with Art of Machinery</p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 rounded-xl border border-slate-200">
                                <div className="w-16 h-16 mx-auto mb-4 bg-slate-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold mb-2">Creativity</h4>
                                <p className="text-sm text-slate-600">The Strength of Steel & the beauty of design</p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 rounded-xl border border-slate-200">
                                <div className="w-16 h-16 mx-auto mb-4 bg-slate-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold mb-2">Management</h4>
                                <p className="text-sm text-slate-600">Highly experienced workforce committed to quality</p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 rounded-xl border border-slate-200">
                                <div className="w-16 h-16 mx-auto mb-4 bg-slate-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold mb-2">Reliability</h4>
                                <p className="text-sm text-slate-600">Trusted partner for all your metal fabrication needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 