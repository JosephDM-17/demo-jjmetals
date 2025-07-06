import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            title: "Metropolitan Steel Tower",
            description: "200-meter telecommunications tower with advanced structural engineering and galvanized finish.",
            category: "Steel Towers",
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Structural Design", "Galvanizing", "Installation"],
            completion: "2024",
            link: "/projects#metropolitan-tower"
        },
        {
            title: "Industrial HVAC System",
            description: "Complete HVAC ductwork solution for a 50,000 sq ft manufacturing facility.",
            category: "HVAC Systems",
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Custom Ductwork", "Air Distribution", "Installation"],
            completion: "2024",
            link: "/projects#industrial-hvac"
        },
        {
            title: "Commercial Steel Frame",
            description: "Structural steel fabrication for a 15-story commercial building in downtown.",
            category: "Structural Steel",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Structural Steel", "Precision Cutting", "Assembly"],
            completion: "2023",
            link: "/projects#commercial-frame"
        },
        {
            title: "Pipeline Installation",
            description: "Large-scale pipeline system for industrial water treatment facility.",
            category: "Pipe Installation",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Pipe Welding", "System Design", "Testing"],
            completion: "2023",
            link: "/projects#pipeline-installation"
        },
        {
            title: "Metal Coil Processing",
            description: "Custom metal coil processing and finishing for automotive industry client.",
            category: "Metal Processing",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Coil Processing", "Surface Finishing", "Quality Control"],
            completion: "2024",
            link: "/projects#metal-coil-processing"
        },
        {
            title: "Custom Fabrication",
            description: "Specialized metal fabrication for unique architectural elements.",
            category: "Custom Work",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["CAD Design", "CNC Machining", "Finishing"],
            completion: "2024",
            link: "/projects#custom-fabrication"
        },
        {
            title: "Bridge Construction",
            description: "Structural steel fabrication for 500-meter highway bridge spanning major river.",
            category: "Structural Steel",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Bridge Engineering", "Heavy Steel", "Precision Assembly"],
            completion: "2023",
            link: "/projects#bridge-construction"
        },
        {
            title: "Power Plant Infrastructure",
            description: "Complete metal fabrication for new 500MW power generation facility.",
            category: "Industrial",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Heavy Equipment", "Pressure Vessels", "Safety Systems"],
            completion: "2024",
            link: "/projects#power-plant"
        },
        {
            title: "Airport Terminal Expansion",
            description: "Structural steel and architectural metalwork for major airport terminal expansion.",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Architectural Steel", "Curtain Wall", "Complex Geometry"],
            completion: "2023",
            link: "/projects#airport-terminal"
        },
        {
            title: "Marine Port Facilities",
            description: "Heavy-duty steel fabrication for container port loading facilities.",
            category: "Marine",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Marine Grade Steel", "Heavy Lifting", "Corrosion Protection"],
            completion: "2024",
            link: "/projects#marine-port"
        },
        {
            title: "Stadium Steel Structure",
            description: "Roof structure and seating framework for 60,000-seat stadium.",
            category: "Sports & Entertainment",
            image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Cantilever Design", "Seating Systems", "Weather Protection"],
            completion: "2023",
            link: "/projects#stadium-structure"
        },
        {
            title: "Renewable Energy Farm",
            description: "Wind turbine foundations and electrical infrastructure for wind farm.",
            category: "Renewable Energy",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            features: ["Foundation Anchors", "Electrical Systems", "Environmental Compliance"],
            completion: "2024",
            link: "/projects#renewable-energy"
        }
    ];

    return (
        <section className="section-padding bg-slate-50">
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Projects</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Explore our portfolio of successful projects across various industries.
                        From structural steel to custom fabrication, we deliver excellence in every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="relative">
                                <div className="w-full h-48 relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {project.completion}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                                    <span className="text-sm text-slate-600 font-medium">{project.category}</span>
                                </div>

                                <p className="text-slate-600 mb-4">{project.description}</p>

                                <div className="space-y-2 mb-4">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-slate-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 block text-center"
                                >
                                    View Project Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/projects" className="btn-primary">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
} 