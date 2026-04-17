import React from "react";

export default function TermsAndConditions() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4 leading-tight">Terms & Conditions</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold text-gray-900">
          Last Updated: April 2025
        </p>
        <p>
          These Terms and Conditions govern your access to and use of the Larsun Labs Pvt Ltd website (the 'Website'). By accessing or using this Website, you agree to be bound by these Terms. If you do not agree to any part of these Terms, please discontinue use of the Website immediately.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Acceptance of Terms</h3>
        <p>
          Access to this Website is conditional on your acceptance of, and compliance with, these Terms and Conditions. Larsun Labs Pvt Ltd reserves the right to modify these Terms at any time without prior notice. Continued use of the Website after any such changes constitutes your acceptance of the revised Terms. It is your responsibility to review this page periodically.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Permitted Use</h3>
        <p>
          This Website is intended for use by registered medical practitioners, licensed pharmacists, healthcare professionals, students in the medical and life sciences, authorised distributors, and other B2B stakeholders interacting with Larsun Labs Pvt Ltd for legitimate professional purposes. General consumers may access the Website for general awareness, but are reminded that product and clinical information is intended for a professionally qualified audience.
        </p>
        <p>
          You are permitted to access and read content on this Website for lawful, non-commercial, personal, or professional reference purposes only. You may not reproduce, distribute, republish, download, display, post, or transmit any portion of this Website's content in any form without the prior written consent of Larsun Labs Pvt Ltd.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Prohibited Activities</h3>
        <p>
          The following activities are strictly prohibited when using this Website:
        </p>
        <ul className="space-y-3 ml-2">
          {[
            "Copying, reproducing, or republishing any product information, clinical data, brand names, images, or promotional content without written authorisation.",
            "Using the Website's content for commercial gain, advertising, or competitive intelligence.",
            "Misrepresenting the source of any information derived from this Website.",
            "Attempting to gain unauthorised access to any restricted section of the Website or to Larsun Labs Pvt Ltd's internal systems.",
            "Using automated tools, bots, or scrapers to extract data from this Website.",
            "Uploading or transmitting any malware, viruses, or malicious code through any contact form or interactive feature on this Website.",
            "Using this Website in any way that could bring Larsun Labs Pvt Ltd into disrepute or violate any applicable law."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-blue-600 font-bold">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Intellectual Property</h3>
        <p>
          All content on this Website &mdash; including but not limited to text, product names, brand names, logos, trademarks, product images, formulation data, clinical summaries, and graphic elements &mdash; is the exclusive intellectual property of Larsun Labs Pvt Ltd or its licensed content providers, and is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian intellectual property laws.
        </p>
        <p>
          The trade name 'Larsun Labs', all product brand names, and associated logos are trademarks of Larsun Labs Pvt Ltd. Unauthorised use, reproduction, or imitation of any trademark or brand name constitutes infringement and will be subject to legal action.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Third-Party Links</h3>
        <p>
          This Website may contain links to external websites, medical databases, or regulatory portals for reference purposes. Larsun Labs Pvt Ltd does not endorse, control, or take responsibility for the content, accuracy, or practices of any third-party website. Accessing third-party websites from links on this Website is at your own risk.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by applicable law, Larsun Labs Pvt Ltd, its directors, officers, employees, and authorised representatives shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
        </p>
        <ul className="space-y-3 ml-2">
          {[
            "Your access to or use of &mdash; or inability to access or use &mdash; this Website.",
            "Any reliance placed on information published on this Website by any person.",
            "Any clinical or medical decisions made on the basis of information from this Website.",
            "Errors, omissions, or inaccuracies in the content of this Website.",
            "Interruption, suspension, or discontinuation of the Website."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-red-500 font-bold">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          This limitation applies regardless of whether the claim arises in contract, tort, negligence, or any other legal theory, and even if Larsun Labs Pvt Ltd has been advised of the possibility of such damages.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Governing Law</h3>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in India.
        </p>

        <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            By continuing to use this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </article>
  );
}
