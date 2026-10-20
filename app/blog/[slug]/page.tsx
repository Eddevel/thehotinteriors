import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const posts = [
  {
    slug: 'the-art-of-warm-minimalism',
    title: 'The Art of Warm Minimalism',
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
    date: 'September 28, 2026',
    readTime: '8 min read',
    image: '/images/blog2.png',
    category: 'Materials',
    content: `
      <p>Texture is the quiet language of luxury in 2026. Clients no longer want just beautiful spaces — they want spaces they can feel.</p>
      <p>Bouclé, linen, travertine, fluted wood, and softly aged metals continue to dominate high-end interiors.</p>
    `
  },
  {
    slug: 'designing-with-light',
    title: 'Designing With Light: Creating Mood & Atmosphere',
    date: 'September 10, 2026',
    readTime: '7 min read',
    image: '/images/blog3.png',
    category: 'Lighting',
    content: `
      <p>Lighting is one of the most powerful tools in interior design. It can completely transform how a room feels.</p>
      <p>We always design lighting in layers: ambient, task, and accent.</p>
    `
  },
  {
    slug: 'warm-modern-living-rooms',
    title: 'Warm Modern Living Rooms That Feel Alive',
    date: 'August 22, 2026',
    readTime: '5 min read',
    image: '/images/blog4.png',
    category: 'Living Spaces',
    content: `
      <p>A great living room should feel like the emotional heart of the home — refined, comfortable, and ready for real life.</p>
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
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="text-primary">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-serif"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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