import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">
                    <Image src="/images/logo.png" alt="HotInterior Logo" width={190} height={50} className="object-contain w-auto h-auto" />
            
          </h3>
          <p className="text-[#d9c097]">— Luxury in every detail —</p>
        </div>

        <div className="grid grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-medium mb-3">Navigate</p>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-3">Company</p>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact">Contact</Link></li>
              <li>Journal</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-3">Legal</p>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} TheHotInteriors. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-6">Designed with warmth • site developed by <Link href="https://eddea.org" className="text-[#d9c097] hover:underline">EDDEA</Link></p>
        </div>
      </div>
    </footer>
  );
}