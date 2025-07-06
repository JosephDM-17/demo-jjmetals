import Contact from '../components/Contact';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                            <p className="text-xl text-slate-600 max-w-3xl mb-8">
                                Get in touch with our team for expert metal fabrication solutions.
                                We&apos;re here to help bring your project to life.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Office Hours</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
                                        <li><strong>Saturday:</strong> 9:00 AM - 4:00 PM</li>
                                        <li><strong>Sunday:</strong> Emergency Service Only</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-800 mb-3">Quick Response</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li><strong>Phone:</strong> Within 1 hour</li>
                                        <li><strong>Email:</strong> Within 4 hours</li>
                                        <li><strong>Emergency:</strong> 24/7 Available</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Contact JJ Metal Works - Professional team ready to help"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Ready to Help</h3>
                                <p className="text-sm opacity-90">
                                    Our experienced team is ready to discuss your metal fabrication needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Component */}
            <Contact />

            {/* Location & Map Section */}
            <section className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Visit Our Facility</h2>
                            <p className="text-xl text-slate-600 mb-6">
                                Come see our state-of-the-art fabrication facility and meet our skilled team.
                                We welcome visitors and encourage site tours to showcase our capabilities.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800">Address</h3>
                                        <p className="text-slate-600">
                                            1234 Industrial Boulevard<br />
                                            Manufacturing District<br />
                                            City, State 12345
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800">Schedule a Tour</h3>
                                        <p className="text-slate-600">
                                            Call ahead to schedule a facility tour.<br />
                                            Tours available Monday-Friday 9 AM - 4 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="JJ Metal Works facility exterior and location"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h3 className="text-xl font-bold mb-2">Modern Facility</h3>
                                <p className="text-sm opacity-90">
                                    Our state-of-the-art fabrication facility with advanced equipment and skilled workforce.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Services */}
            <section className="section-padding bg-slate-600 text-white">
                <div className="container-max text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6">Emergency Services Available</h2>
                        <p className="text-xl text-slate-200 mb-8">
                            We understand that some projects can&apos;t wait. Our emergency response team is available 24/7
                            for critical repairs and urgent fabrication needs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-2">24/7 Response</h3>
                                <p className="text-slate-300">Emergency repair services available around the clock</p>
                            </div>
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                                <p className="text-slate-300">Mobile welding units ready for on-site repairs</p>
                            </div>
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-2">Priority Service</h3>
                                <p className="text-slate-300">Fast-track processing for urgent projects</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a href="tel:+15551234567" className="text-2xl font-bold text-white hover:text-slate-200 transition-colors">
                                Emergency Hotline: +1 (555) 123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 