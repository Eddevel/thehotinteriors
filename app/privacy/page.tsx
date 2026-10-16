import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection animationType="fadeUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: October 16, 2026</p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">1. Introduction</h2>
              <p>
                HotInteriors (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number when you submit a contact form</li>
                <li>Project details and budget information you voluntarily provide</li>
                <li>Technical data such as IP address, browser type, and pages visited</li>
                <li>Any other information you choose to share with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide design consultation services</li>
                <li>Improve our website and user experience</li>
                <li>Send relevant updates (only if you have opted in)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">4. Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share data only with trusted service providers 
                who assist us in operating our website and delivering services, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data 
                against unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal data. 
                To exercise these rights, please contact us at{' '}
                <Link href="mailto:thehotinteriors@gmail.com" className="text-primary hover:underline">
                  thehotinteriors@gmail.com
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at{' '}
                <a href="mailto:hello@thehotinteriors.com" className="text-primary hover:underline">
                  thehotinteriors@gmail.com
                </a>{' '}
                or through our contact form.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}