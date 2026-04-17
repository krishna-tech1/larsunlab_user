import React from "react";

export default function ProductDisclaimer() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4 leading-tight">Product Information Disclaimer</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold text-gray-900">
          Last Updated: April 2025
        </p>
        <p>
          Larsun Labs Pvt Ltd endeavours to ensure that all product information published on this website is accurate, current, and consistent with the approved labelling and prescribing information for each product. However, due to the evolving nature of medical knowledge, regulatory updates, and product reformulations, the information available on this website may not always reflect the most current prescribing information, package inserts, or regulatory approvals.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Reference Purpose Only</h3>
        <p>
          All product descriptions, compositions, indications, dosage recommendations, mode of action summaries, precaution lists, and storage instructions provided on this website are intended for reference purposes only. They are a general summary derived from standard medical and pharmacological literature and the product's approved prescribing information. They are not a complete substitute for the official product monograph, package insert, or Summary of Product Characteristics (SmPC) accompanying each product.
        </p>
        <p>
          Healthcare professionals are strongly advised to refer to the official product package insert or contact Larsun Labs Pvt Ltd directly for the most accurate and complete prescribing information before making any clinical decisions.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">No Warranty of Completeness</h3>
        <p>
          While we make reasonable efforts to maintain accuracy, Larsun Labs Pvt Ltd does not warrant that the product information on this website is complete, free from errors, or fully up to date at the time of access. Drug dosages, contraindications, warnings, and approved indications are subject to change by regulatory authorities, and the website may not always reflect those changes in real time.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Self-Medication</h3>
        <p>
          Larsun Labs Pvt Ltd explicitly discourages self-medication. The product information available on this website must not be used by patients or non-healthcare individuals to self-diagnose, self-prescribe, or independently manage any medical condition. Larsun Labs Pvt Ltd bears no responsibility for any adverse outcome, harm, or consequence arising from the use of information on this website by an unqualified individual for purposes of self-medication.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Off-Label Use</h3>
        <p>
          Some product pages may reference uses that are under clinical investigation or reflect evolving medical practice. Such references do not constitute a promotion of off-label use. Larsun Labs Pvt Ltd promotes its products strictly within the boundaries of their approved indications as authorised by the relevant regulatory authorities in India.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Product Availability</h3>
        <p>
          The presence of a product on this website does not guarantee its availability in any specific region, market, or healthcare institution. Product availability is subject to regulatory approvals, market conditions, and supply chain factors. For current product availability and distribution enquiries, please contact our sales or distribution team directly.
        </p>

        <p className="mt-8 pt-6 border-t border-gray-100 font-medium italic text-gray-800">
          The approved prescribing information, package inserts, and product monographs take precedence over any information published on this website. In the event of any discrepancy, the approved documentation accompanying the physical product should be considered authoritative.
        </p>

        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
          <p className="text-sm text-blue-800">
            <strong>Professional Reference:</strong> This document is intended to clarify the scope and limitations of product-related information for our partners and healthcare providers.
          </p>
        </div>
      </div>
    </article>
  );
}
