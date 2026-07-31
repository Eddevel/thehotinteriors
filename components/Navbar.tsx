'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => { document.body.style.overflow = 'visible'; };
  }, [isOpen]);

 // GSAP Animation
  useEffect(() => {
    if (!sidebarRef.current) return;

    if (isOpen) {
      gsap.fromTo(sidebarRef.current, 
        { x: "100%" }, 
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in"
      });
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-dark/95 backdrop-blur-lg py-2 shadow-2xl' : 'bg-transparent py-2 '}`}>
        
        <div className="max-w-7xl mx-auto px-2 flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="TheHotInteriors" 
              width={110} 
              height={50} 
              className="object-contain w-auto h-auto" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[3px] text-[#d9c097] font-medium">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Journal</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Sidebar */}
          <div 
            ref={sidebarRef}
            className="fixed  bg-black/96 w-full h-full bg-dark z-[70] md:hidden "
            onClick={closeMenu}
          >
            <div className="p-5  flex flex-col ">
              <div className="flex flex-col gap-2 text-xl font-light">
                {[
                  { label: "About", href: "/about" },
                  { label: "Projects", href: "/projects" },
                  { label: "Services", href: "/services" },
                  { label: "Journal", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href} 
                    onClick={closeMenu}
                    className="hover:text-primary transition-colors pb-3 border-b border-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-16 border-t border-white/10 text-sm text-gray-400">
                <p>Lagos, Nigeria</p>
                <p>+234-916-337-2102</p>
                <p>hello@thehotinteriors.com</p>
                <div className="mt-10 text-xs text-gray-500">
                  © {new Date().getFullYear()} TheHotInteriors
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}