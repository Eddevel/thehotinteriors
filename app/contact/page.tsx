import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form Side */}
          <div>
            <h1 className="text-6xl font-serif mb-8">Let&apos;s Create Together</h1>
            <p className="text-xl text-gray-400 mb-12">
              Tell us about your vision. We reply within 48 hours.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-12">
            <div>
              <h3 className="uppercase tracking-widest text-sm mb-6 text-primary">Studio</h3>
              <div className="space-y-6 text-lg">
                <div className="flex gap-4">
                  <MapPin className="mt-1 text-primary" />
                  <div>
                    Lekki Phase 1,<br />
                    Lagos, Nigeria
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 text-primary" />
                  <div>+234-916-337-2102</div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 text-primary" />
                  <div>thehotinteriors@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Google Map - Lekki, Lagos */}
            <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.057!2d3.484!3d6.469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2b0b0b0b0b%3A0x0!2sLekki%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1720000000000"
                className="w-full h-full"
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}