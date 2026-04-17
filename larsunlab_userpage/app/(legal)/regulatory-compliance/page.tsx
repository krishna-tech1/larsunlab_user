import React from "react";

export default function RegulatoryCompliance() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4 leading-tight">Regulatory Compliance Note</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold text-gray-900">
          Last Updated: April 2025
        </p>
        <p>
          Larsun Labs Pvt Ltd is a pharmaceutical company incorporated in India and operates in strict compliance with the regulatory framework governing the manufacture, marketing, and promotion of pharmaceutical products in India. This page outlines our regulatory commitments and the framework within which this Website operates.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Compliance with Indian Pharmaceutical Laws</h3>
        <p>
          Larsun Labs Pvt Ltd conducts all its activities in compliance with the following principal regulatory instruments and their amendments:
        </p>
        <ul className="space-y-3 ml-2">
          {[
            "The Drugs and Cosmetics Act, 1940, and the Drugs and Cosmetics Rules, 1945 — governing the manufacture, distribution, sale, and labelling of pharmaceutical products.",
            "The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 — prohibiting misleading, false, or exaggerated claims in drug advertising.",
            "The Pharmacy Act, 1948 — governing the practice and regulation of pharmacy in India.",
            "Schedule H, Schedule H1, and Schedule X provisions — governing the dispensation and prescription requirements for regulated drugs.",
            "The UCPMP (Uniform Code for Pharmaceutical Marketing Practices), 2024 — setting voluntary ethical standards for pharmaceutical promotion and marketing in India.",
            "The Information Technology Act, 2000, and applicable IT Rules — governing digital communications and data protection.",
            "Any guidelines issued by the Central Drugs Standard Control Organisation (CDSCO) relevant to website-based product communication."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-purple-600 font-bold">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Promotion to Healthcare Professionals Only</h3>
        <p>
          The clinical content, product information, and promotional material on this Website is directed exclusively at registered medical practitioners, licensed pharmacists, qualified healthcare professionals, and authorised distributors and stockists. It is not intended as direct-to-consumer advertising of prescription drugs.
        </p>
        <p>
          As required under the UCPMP 2024 and the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954, Larsun Labs Pvt Ltd does not make unsubstantiated therapeutic claims, does not promote prescription drugs directly to the general public, and does not make comparative or superlative claims that are not supported by published clinical evidence.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">No Exaggerated or Misleading Claims</h3>
        <p>
          All clinical statements, efficacy claims, and therapeutic indications referenced on this Website are based on the approved prescribing information for each product, supported by peer-reviewed clinical evidence, and are consistent with the labelling approved by the relevant competent authority. Larsun Labs Pvt Ltd does not make claims beyond those supported by the approved product dossier.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Schedule H and Schedule H1 Drugs</h3>
        <p>
          Many products described on this Website are classified as Schedule H or Schedule H1 drugs under the Drugs and Cosmetics Rules, 1945. Such drugs are legally required to be sold only on the prescription of a registered medical practitioner and must carry the legend: 'Rx &mdash; To be sold by retail on the prescription of a Registered Medical Practitioner only.' This Website does not facilitate direct retail sale of any pharmaceutical product.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Pharmacovigilance</h3>
        <p>
          Larsun Labs Pvt Ltd is committed to the ongoing monitoring of the safety of its products. Any adverse drug reactions or product quality complaints may be reported to our Medical Affairs team or to the national pharmacovigilance programme administered through the Indian Pharmacopoeia Commission (IPC) and CDSCO. Contact details for reporting are available on the Contact Us page of this Website.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Manufacturing Compliance</h3>
        <p>
          All products of Larsun Labs Pvt Ltd are manufactured in facilities that comply with Schedule M of the Drugs and Cosmetics Rules, 1945 (Good Manufacturing Practices for Pharmaceutical Products as published by CDSCO), ensuring consistent quality, safety, and efficacy standards across the product range.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Updates and Regulatory Changes</h3>
        <p>
          The pharmaceutical regulatory environment in India is subject to change. Larsun Labs Pvt Ltd will make reasonable efforts to reflect significant regulatory changes in the content of this Website in a timely manner. However, users &mdash; particularly healthcare professionals &mdash; are advised to verify current prescribing information through official sources including the CDSCO website (www.cdsco.gov.in) and the product's official package insert.
        </p>
        <p>
          Larsun Labs Pvt Ltd welcomes feedback from healthcare professionals and regulatory stakeholders regarding any content on this Website that may appear inconsistent with current approved prescribing information or applicable regulations. Please contact us through the official communication channels provided on the Website.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="font-semibold uppercase tracking-widest mb-2">Larsun Labs Pvt Ltd | India | All Rights Reserved</p>
          <p>For queries regarding these policies, please contact us through the official website contact form.</p>
        </div>

        <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg shadow-sm">
          <p className="text-sm text-purple-800 font-medium">
            <strong>Regulatory Standard:</strong> Our operations are built on the foundation of the CDSCO guidelines and UCPMP ethical standards to ensure precision and trust in healthcare.
          </p>
        </div>
      </div>
    </article>
  );
}
