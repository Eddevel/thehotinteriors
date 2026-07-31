'use client';
import { X } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  images: string[];
  year: string;
};


// Define type locally to avoid import issues


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div 
        className="max-w-5xl w-full bg-dark rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white hover:text-primary transition-colors"
        >
          <X size={32} />
        </button>

        <div className="relative h-[55vh] md:h-[65vh]">
          <Image 
            src={project.images[0]} 
            alt={project.title}
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight">{project.title}</h2>
          <p className="text-primary text-xl mt-2">{project.location} • {project.year}</p>
          
          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}