import ServicesGrid from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-7xl font-serif tracking-tight">Our Services</h1>
          <p className="mt-6 text-xl text-gray-400">
            From concept to completion, we offer comprehensive interior design solutions.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <ServicesGrid />
      </section>

      <section className="bg-dark-2 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif">Ready to Transform Your Space?</h2>
          <p className="mt-6 text-lg text-gray-400">Let&apos;s create something extraordinary together.</p>
          <a href="/contact" className="mt-10 inline-block bg-primary text-black px-12 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition">
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  );
}