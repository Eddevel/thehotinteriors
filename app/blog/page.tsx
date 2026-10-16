import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const posts = [
  {
    slug: 'the-art-of-warm-minimalism',
    title: 'The Art of Warm Minimalism',
    excerpt: 'How to create serene, inviting spaces without sacrificing personality and warmth.',
    date: 'October 12, 2026',
    readTime: '6 min read',
    image: '/images/blog1.jpg',
    category: 'Design Philosophy',
  },
  {
    slug: 'luxury-textures-2026',
    title: 'Luxury Textures Defining 2026',
    excerpt: 'From bouclé to travertine — the materials shaping the most beautiful interiors this year.',
    date: 'September 28, 2026',
    readTime: '8 min read',
    image: '/images/blog2.jpg',
    category: 'Materials',
  },
  {
    slug: 'designing-with-light',
    title: 'Designing With Light: Creating Mood & Atmosphere',
    excerpt: 'Layered lighting strategies we use in our most successful residential projects.',
    date: 'September 10, 2026',
    readTime: '7 min read',
    image: '/images/blog3.jpg',
    category: 'Lighting',
  },
  {
    slug: 'warm-modern-living-rooms',
    title: 'Warm Modern Living Rooms That Feel Alive',
    excerpt: 'Key principles for creating living spaces that are both sophisticated and deeply inviting.',
    date: 'August 22, 2026',
    readTime: '5 min read',
    image: '/images/blog4.jpg',
    category: 'Living Spaces',
  },
];

export default function JournalPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-serif tracking-tight mb-6">Journal</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts, insights, and stories from the studio — exploring design, materials, and the art of living well.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <AnimatedSection key={post.slug} animationType="fadeUp">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="text-primary">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-serif group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}