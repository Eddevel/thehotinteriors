import AboutHero from '@/components/AboutHero';
import AnimatedSection from '@/components/AnimatedSection';
import Team from '@/components/Team';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main>
      {/* Slideshow Hero */}
      <AboutHero />

      {/* Philosophy Section */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg mx-auto">
            <h2 className="text-5xl font-serif text-center mb-12">Our Philosophy</h2>
            
            <div className="space-y-10 text-lg leading-relaxed text-gray-300">
              <p>
                Founded in 2025, HotInteriors was born from a deep belief that a home should be more than just a beautiful space — 
                it should evoke emotion, warmth, and connection.
              </p>
              
              <p>
                We specialize in <span className="text-[#D9C097]">warm modern luxury</span> — a design language that blends clean contemporary lines 
                with rich textures, natural materials, and soulful details. Every project is approached with the same dedication: 
                to create environments that feel personal, timeless, and alive.
              </p>

              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h3 className="text-primary text-xl font-medium mb-3">Warmth First</h3>
                  <p className="text-sm">We believe luxury should feel inviting, not cold.</p>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-medium mb-3">Timeless Craft</h3>
                  <p className="text-sm">Designs that transcend trends and age gracefully.</p>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-medium mb-3">Human-Centered</h3>
                  <p className="text-sm">Every detail serves how people live, gather, and rest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <section className="py-24 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animationType="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-serif">Meet The Team</h2>
              <p className="mt-4 text-xl text-gray-400">
                Passionate designers who bring warmth and soul to every project
              </p>
            </div>
          </AnimatedSection>
          
          <Team />
        </div>
      </section>

      {/* Final CTA */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-20 bg-dark border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-5xl font-serif mb-6">Ready to create something extraordinary?</h2>
            <p className="text-gray-400 mb-10">Let&apos;s discuss your vision.</p>
            
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 px-12 py-7 rounded-full text-lg" >
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}