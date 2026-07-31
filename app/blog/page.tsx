import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    slug: "the-art-of-warm-minimalism",
    title: "The Art of Warm Minimalism",
    excerpt: "How to create serene, inviting spaces without sacrificing personality.",
    date: "June 8, 2026",
    image: "/images/p1.jpg",
    readTime: "8 min"
  },
  {
    slug: "luxury-textures-2026",
    title: "Luxury Textures Trending in 2026",
    excerpt: "From bouclé to travertine — the materials defining next year’s best interiors.",
    date: "May 22, 2026",
    image: "/images/p2.jpg",
    readTime: "12 min"
  },
  {
    slug: "designing-with-light",
    title: "Designing With Light: Creating Mood and Atmosphere",
    excerpt: "Layered lighting strategies used in our most successful projects.",
    date: "April 15, 2026",
    image: "/images/p4.jpg",
    readTime: "10 min"
  }
];

export default function BlogPage() {
  return (
    <main className="">
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-serif">Journal</h1>
            <p className="mt-4 text-xl text-gray-400">Thoughts, insights, and stories from our studio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link href={`/blog`} key={post.slug} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-700"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-4 text-gray-400 line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}