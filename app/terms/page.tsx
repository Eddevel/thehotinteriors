import AnimatedSection from '@/components/AnimatedSection';

export default function TermsPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection animationType="fadeUp">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: October 16, 2026</p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the HotInteriors website, you agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">2. Services</h2>
              <p>
                HotInteriors provides interior design consultation, residential and commercial design services, 
                and related creative services. All services are subject to separate written agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, images, graphics, logos, and design concepts — 
                is the property of HotInteriors and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or use any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">4. User Conduct</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Misrepresent your identity or affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">5. Limitation of Liability</h2>
              <p>
                HotInteriors shall not be liable for any indirect, incidental, special, or consequential damages 
                arising out of or related to your use of the website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content 
                or privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">7. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this page 
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">8. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at{' '}
                <a href="mailto:hello@thehotinteriors.com" className="text-primary hover:underline">
                  hello@thehotinteriors.com
                </a>.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}