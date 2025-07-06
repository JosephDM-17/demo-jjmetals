import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 bg-pattern-grid overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Metal fabrication workshop"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          priority
        />
      </div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dots animate-float z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fadeInUp">
                <span className="block">JJ Metal Works</span>
                <span className="block text-3xl md:text-4xl text-slate-600 mt-2 animate-fadeInUp animate-delay-200">
                  Professional Metal Fabrication
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fadeInUp animate-delay-300">
                15+ years of excellence in structural steel, HVAC systems, and custom fabrication.
                Your trusted partner for quality metal works in the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animate-delay-400">
                <Link href="/contact" className="btn-primary hover-lift">
                  Get Free Quote
                </Link>
                <Link href="/projects" className="btn-secondary hover-lift">
                  View Projects
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 animate-fadeInRight animate-delay-500">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift border border-slate-200">
                <div className="text-3xl font-bold text-slate-800 mb-2 animate-shimmer">2000+</div>
                <div className="text-slate-600 text-sm">MT Steel Fabricated</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift border border-slate-200">
                <div className="text-3xl font-bold text-slate-800 mb-2 animate-shimmer">500+</div>
                <div className="text-slate-600 text-sm">HVAC Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift border border-slate-200">
                <div className="text-3xl font-bold text-slate-800 mb-2 animate-shimmer">1500+</div>
                <div className="text-slate-600 text-sm">MT Metal Coils</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift border border-slate-200">
                <div className="text-3xl font-bold text-slate-800 mb-2 animate-shimmer">15+</div>
                <div className="text-slate-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-slate-300/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-slate-300/20 rounded-full animate-float animate-delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-slate-300/20 rounded-full animate-float animate-delay-600"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20">
        <div className="flex flex-col items-center text-slate-600">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 