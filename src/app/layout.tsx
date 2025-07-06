import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JJ Metal Works - Professional Metal Fabrication",
  description: "Leading metal fabrication company specializing in structural steel, HVAC ductwork, custom fabrication, and industrial solutions. Quality craftsmanship with 15+ years of experience.",
  keywords: "metal fabrication, structural steel, HVAC ductwork, custom fabrication, welding, metal works, industrial solutions",
  openGraph: {
    title: "JJ Metal Works - Professional Metal Fabrication",
    description: "Leading metal fabrication company specializing in structural steel, HVAC ductwork, custom fabrication, and industrial solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll animation observer
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                  }
                });
              }, observerOptions);

              // Observe all animated elements when DOM is loaded
              document.addEventListener('DOMContentLoaded', () => {
                const animatedElements = document.querySelectorAll('.scroll-animate');
                animatedElements.forEach(el => observer.observe(el));
              });
            `
          }}
        />
      </body>
    </html>
  );
}
