import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin,
  MessageCircle
} from 'lucide-react';

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Profile Card */}
        <div className="bg-dark-2 border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
          
          {/* Logo / Avatar */}
          <div className="mx-auto mb-6 w-28 h-28 rounded-full overflow-hidden border-2 border-primary/40 bg-dark flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="HotInteriors"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl font-serif text-white mb-1">HotInteriors</h1>
          <p className="text-primary text-sm tracking-widest uppercase mb-6">
            Premium Interior Design
          </p>

          <p className="text-gray-400 text-sm mb-10 leading-relaxed">
            Designing homes that feel alive.<br />
            Lekki Phase 1, Lagos, Nigeria
          </p>

          {/* Connect Buttons */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2349163372102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#25D366] text-white font-medium hover:opacity-90 transition-all"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+2349163372102"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white/10 text-white font-medium hover:bg-white/15 transition-all border border-white/10"
            >
              <Phone size={20} />
              Call Us
            </a>

            {/* Email */}
            <a
              href="mailto:hello@thehotinteriors.com"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white/10 text-white font-medium hover:bg-white/15 transition-all border border-white/10"
            >
              <Mail size={20} />
              Send Email
            </a>

            {/* Website */}
            <Link
              href="/"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-primary text-black font-medium hover:bg-primary/90 transition-all"
            >
              <Globe size={20} />
              Visit Website
            </Link>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Lekki+Phase+1,+Lagos,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white/10 text-white font-medium hover:bg-white/15 transition-all border border-white/10"
            >
              <MapPin size={20} />
              View Location
            </a>
          </div>

          {/* Footer */}
          <p className="mt-10 text-xs text-gray-500 tracking-wide">
            © {new Date().getFullYear()} HotInteriors
          </p>
        </div>
      </div>
    </main>
  );
}