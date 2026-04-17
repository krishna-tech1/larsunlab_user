import React from "react";

export default function LegalDisclaimer() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4 leading-tight">Legal Disclaimer</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold text-gray-900">
          Last Updated: April 2025
        </p>
        <p>
          This Legal Disclaimer applies to all content, materials, and information published on the official website of Larsun Labs Pvt Ltd. By accessing this Website, you acknowledge that you have read, understood, and agreed to the terms set out in this Disclaimer.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">No Guarantee of Accuracy or Completeness</h3>
        <p>
          While Larsun Labs Pvt Ltd makes every reasonable effort to ensure that the information on this Website is accurate, reliable, and current at the time of publication, we make no express or implied representation or warranty of any kind regarding the accuracy, completeness, reliability, or suitability of any information, content, or material published on this Website for any particular purpose.
        </p>
        <p>
          Medical and pharmacological information evolves rapidly. New clinical data, post-marketing safety reports, label updates, and regulatory decisions may alter the prescribing information for any product at any time. The information on this Website may not reflect the very latest developments in a product's clinical profile.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">No Liability for Misuse</h3>
        <p>
          Larsun Labs Pvt Ltd shall not be held liable &mdash; directly or indirectly &mdash; for any harm, injury, loss, or damage of any nature arising from:
        </p>
        <ul className="space-y-3 ml-2">
          {[
            "Reliance on any information, product description, or clinical data published on this Website by any individual, whether a healthcare professional or a general user.",
            "Any misinterpretation, misuse, or misapplication of information contained on this Website.",
            "Any decision to use, not use, continue, or discontinue any medicine based on information from this Website.",
            "Any product purchased or procured based solely on information found on this Website, without consulting a registered medical practitioner.",
            "Any inaccuracies, errors, or omissions in the information published, to the extent permitted by applicable law."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-amber-600 font-bold">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Content Subject to Change Without Notice</h3>
        <p>
          All content on this Website &mdash; including product descriptions, regulatory information, pricing references (if any), company information, and clinical summaries &mdash; is subject to change, withdrawal, or amendment at any time and without prior notice. Larsun Labs Pvt Ltd is under no obligation to update any information on this Website and shall not be responsible for any outdated content that may remain visible during any transition period.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">No Doctor-Patient Relationship</h3>
        <p>
          Access to this Website, submission of a query, or communication with Larsun Labs Pvt Ltd through any channel on this Website does not create a doctor-patient relationship, a pharmacist-patient relationship, or any professional advisory relationship of any kind. Larsun Labs Pvt Ltd is a pharmaceutical manufacturing and marketing company, not a healthcare provider.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Professional Audience Responsibility</h3>
        <p>
          Information on this Website that is directed at healthcare professionals &mdash; including prescribing guidance, dosage recommendations, and clinical indications &mdash; assumes that the reader has the requisite professional training and qualification to interpret and apply such information responsibly. Larsun Labs Pvt Ltd is not responsible for how any individual applies clinical information obtained from this Website.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Jurisdictional Limitations</h3>
        <p>
          This Website is operated from India and its content is prepared in compliance with Indian pharmaceutical laws and regulations. Information on products may not be applicable to markets outside India. Product approvals, indications, approved doses, and labelling may differ across countries. Users outside India access this Website at their own risk and are responsible for compliance with local laws and regulations.
        </p>
        <p className="mt-4 border-t pt-4">
          Nothing in this Disclaimer shall exclude or limit liability where such exclusion or limitation is prohibited by applicable law. In such cases, our liability is limited to the maximum extent permitted by law.
        </p>

        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg shadow-sm">
          <p className="text-sm text-amber-800 italic">
            "The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only."
          </p>
        </div>
      </div>
    </article>
  );
}
