import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BuildingShowcase from '@/components/BuildingShowcase';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <BuildingShowcase />
      <Projects />
    </main>
  );
}
