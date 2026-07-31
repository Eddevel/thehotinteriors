'use client';
import ProjectsGrid from '@/components/ProjectsGrid';

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-serif">Our Portfolio</h1>
            <p className="mt-4 text-2xl text-gray-400">Curated spaces that define modern luxury with soul</p>
          </div>
          
          <ProjectsGrid />
        </div>
      </section>
    </main>
  );
}