import Hero from '../components/hero';
import ServicesGrid from '../components/ServicesGrid';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import AnimatedSection from '../components/AnimatedSection';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-24 px-6 bg-dark">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight">
                Our Expertise
              </h2>
              <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                Thoughtfully crafted interiors that balance luxury, warmth, and modern living.
              </p>
            </div>
            <ServicesGrid />
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection animationType="fadeUp">
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Selected works that define our signature style
              </p>
            </div>
            
            <ProjectsGrid />
            
            <div className="text-center mt-16">
              <Button 
                 
                size="lg" 
                className="bg-primary text-black hover:bg-primary/90 text-lg px-12"
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-24 bg-dark-2">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                  Homes that don&apos;t just look good.<br />
                  They <span className="text-primary">feel alive</span>.
                </h2>
              </div>
              <div className="space-y-8 text-lg text-gray-300">
                <p>
                  We believe interior design is more than aesthetics  it&apos;s about creating 
                  emotional connections between people and their spaces.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <div className="text-3xl font-serif text-primary">98%</div>
                    <p className="mt-2">Client retention rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-primary">47</div>
                    <p className="mt-2">Projects completed globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-12 px-6">
          <div className="">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif">What Our Clients Say</h2>
            </div>
            <Testimonials />
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-24 bg-dark-2 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Let&apos;s design your next chapter
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Whether you&apos;re building a new home or transforming an existing space, 
              we&apos;d love to hear your vision.
            </p>
            
            <Button 
               
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 text-lg px-16 py-7 rounded-full"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>

            <p className="text-sm text-gray-500 mt-10">
              Studio visits available by appointment in Lagos
            </p>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}