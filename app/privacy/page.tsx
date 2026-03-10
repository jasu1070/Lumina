export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Privacy Policy</h1>
        <p className="text-lg text-text-secondary text-center mb-16">
          How we collect, use, and protect your personal information.
        </p>

        <div className="flex flex-col gap-12 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This may include your name, email address, shipping address, payment information, and phone number.
            </p>
            <p>
              We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and browsing behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process and fulfill your orders, including sending order confirmations and shipping updates.</li>
              <li>To communicate with you about products, services, offers, and promotions.</li>
              <li>To improve our website, products, and customer service.</li>
              <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
            <p>
              We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. All sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications from us by following the instructions in those communications. If you have any questions or concerns about our privacy practices, please contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
