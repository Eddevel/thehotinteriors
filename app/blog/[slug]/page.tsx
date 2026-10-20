import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

// Temporary data (same as your blog listing)
const posts = [
  {
    slug: 'the-art-of-warm-minimalism',
    title: 'The Art of Warm Minimalism',
    excerpt: 'How to create serene, inviting spaces without sacrificing personality and warmth.',
    date: 'October 12, 2026',
    readTime: '6 min read',
    image: '/images/blog1.png',
    category: 'Design Philosophy',
    content: `
      <p>Warm minimalism is not about empty rooms or cold white walls. It’s about creating calm, intentional spaces that still feel human and inviting.</p>
      <p>At HotInteriors, we believe true luxury lives in the balance between restraint and warmth. Soft textures, natural materials, thoughtful lighting, and carefully chosen objects create rooms that feel peaceful without feeling sterile.</p>
      <p>In this approach, every piece earns its place. Furniture is selected for both form and comfort. Colour palettes stay quiet but never cold — think warm whites, soft clay tones, natural wood, and subtle earthy accents.</p>
      <h3>Key Principles We Follow</h3>
      <ul>
        <li>Prioritise natural materials and tactile surfaces</li>
        <li>Use layered lighting instead of harsh overhead lights</li>
        <li>Leave breathing room while still creating cosiness</li>
        <li>Choose fewer, better pieces</li>
      </ul>
      <p>The result is a home that feels serene, sophisticated, and deeply livable.</p>
    `
  },
  {
    slug: 'luxury-textures-2026',
    title: 'Luxury Textures Defining 2026',
    excerpt: 'From bouclé to travertine — the materials shaping the most beautiful interiors this year.',
    date: 'September 28, 2026',
    readTime: '8 min read',
    image: '/images/blog2.png',
    category: 'Materials',
    content: `
      <p>Texture is the quiet language of luxury in 2026. Clients no longer want just beautiful spaces — they want spaces they can feel.</p>
      <p>Bouclé, linen, travertine, fluted wood, and softly aged metals continue to dominate high-end interiors. These materials add depth and soul without relying on loud patterns or colours.</p>
      <p>We are seeing a strong preference for surfaces that invite touch and age gracefully over time.</p>
    `
  },
  {
    slug: 'designing-with-light',
    title: 'Designing With Light: Creating Mood & Atmosphere',
    excerpt: 'Layered lighting strategies we use in our most successful residential projects.',
    date: 'September 10, 2026',
    readTime: '7 min read',
    image: '/images/blog3.png',
    category: 'Lighting',
    content: `
      <p>Lighting is one of the most powerful tools in interior design. It can completely transform how a room feels.</p>
      <p>We always design lighting in layers: ambient, task, and accent. This approach creates flexibility and atmosphere throughout the day and evening.</p>
    `
  },
  {
    slug: 'warm-modern-living-rooms',
    title: 'Warm Modern Living Rooms That Feel Alive',
    excerpt: 'Key principles for creating living spaces that are both sophisticated and deeply inviting.',
    date: 'August 22, 2026',
    readTime: '5 min read',
    image: '/images/blog4.png',
    category: 'Living Spaces',
    content: `
      <p>A great living room should feel like the emotional heart of the home — refined, comfortable, and ready for real life.</p>
      <p>We focus on soft seating, warm materials, good flow, and lighting that makes people want to stay.</p>
    `
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-28 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        <AnimatedSection animationType="fadeUp">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="text-primary">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back Link */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm uppercase tracking-widest"
            >
              ← Back to Journal
            </Link>
          </div>
        </AnimatedSection>
      </article>
    </main>
  );
}