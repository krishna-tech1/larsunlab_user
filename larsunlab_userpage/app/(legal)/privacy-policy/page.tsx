import React from "react";

export default function PrivacyPolicy() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4 leading-tight">Privacy Policy</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold text-gray-900">
          Last Updated: April 2025
        </p>
        <p>
          Larsun Labs Pvt Ltd ('we', 'our', or 'the Company') is committed to protecting the privacy and confidentiality of all individuals who interact with our website. This Privacy Policy explains what information we collect, why we collect it, how it is used, and how we safeguard it. By using this Website, you consent to the practices described in this Policy.
        </p>
        <p>
          This Privacy Policy is prepared in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and any amendments or allied regulations in force in India.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Information We Collect</h3>

        <h4 className="text-lg font-semibold text-gray-800 mt-4">Information You Provide Voluntarily</h4>
        <p>
          When you contact us through our enquiry form, distributor registration form, or any other contact mechanism on this Website, you may provide us with personal information including your name, medical qualification or professional designation, email address, phone number, organisation name, and the nature of your query.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mt-4">Information Collected Automatically</h4>
        <p>
          When you visit our Website, certain technical information may be collected automatically by our web server and analytics tools, including your IP address, browser type and version, operating system, referral URL, pages visited, and the date and time of your visit. This information is collected in aggregate and is used solely for website performance analysis and improvement.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Purpose of Data Collection</h3>
        <p>
          Information collected on this Website is used exclusively for the following legitimate business purposes:
        </p>
        <ul className="space-y-3 ml-2">
          {[
            "Responding to queries submitted through contact or enquiry forms.",
            "Processing distributor, stockist, or business enquiries.",
            "Sending relevant product updates, medical information, or company communications to healthcare professionals and business partners who have opted in to receive them.",
            "Improving the functionality, content, and user experience of this Website.",
            "Complying with any legal or regulatory obligations applicable to Larsun Labs Pvt Ltd."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-green-600 font-bold">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Data Sharing and Disclosure</h3>
        <p>
          Larsun Labs Pvt Ltd does not sell, rent, trade, or otherwise transfer your personal information to any third party for commercial purposes. Your personal data may be shared in the following limited circumstances:
        </p>
        <ul className="space-y-3 ml-2">
          {[
            "With authorised service providers (such as web hosting and IT service partners) who assist in operating the Website, under strict confidentiality agreements.",
            "With regulatory authorities, law enforcement agencies, or courts of law if required to do so by law, court order, or government regulation.",
            "With professional advisors such as legal counsel or auditors, under obligations of confidentiality."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-blue-600 font-bold">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Any such sharing is limited to the minimum information necessary for the specific purpose and is governed by applicable data protection requirements.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Data Retention</h3>
        <p>
          We retain personal information only for as long as it is necessary for the purpose for which it was collected, or as required by applicable law. Contact and enquiry data is generally retained for a period of up to three (3) years unless a longer retention period is required for legal or business purposes, after which it is securely deleted or anonymised.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Data Security</h3>
        <p>
          Larsun Labs Pvt Ltd implements appropriate technical and organisational security measures to protect personal data against unauthorised access, disclosure, alteration, or destruction. These measures include secure server infrastructure, restricted access controls, and encryption of data in transit where applicable. However, no method of data transmission over the internet is entirely secure, and we cannot guarantee absolute security.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Cookies</h3>
        <p>
          This Website may use cookies &mdash; small text files stored on your device &mdash; to enhance your browsing experience, analyse website traffic, and understand user behaviour in aggregate. You may configure your browser settings to refuse cookies or to notify you when a cookie is being placed. Please note that disabling cookies may affect the functionality of certain parts of this Website.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Your Rights</h3>
        <p>
          Subject to applicable Indian law, you have the right to request access to the personal information we hold about you, to request correction of inaccurate data, and to withdraw consent for processing where consent forms the legal basis. To exercise any of these rights, please contact us at the address provided in the Contact section of this Website.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Changes to This Policy</h3>
        <p>
          Larsun Labs Pvt Ltd reserves the right to revise this Privacy Policy at any time. Any material changes will be reflected on this page with an updated revision date. Continued use of the Website after changes to this Policy constitutes acceptance of the updated terms.
        </p>
        <p>
          This Website is not directed at children below the age of 18 years. We do not knowingly collect personal information from minors. If you believe a minor has submitted personal information through this Website, please contact us immediately.
        </p>

        <div className="mt-12 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg shadow-sm">
          <p className="text-sm text-green-800">
            <strong>Security Commitment:</strong> We implement specialized security measures to safeguard clinical and business data. If you have questions about our data practices, please reach out to our privacy officer.
          </p>
        </div>
      </div>
    </article>
  );
}
