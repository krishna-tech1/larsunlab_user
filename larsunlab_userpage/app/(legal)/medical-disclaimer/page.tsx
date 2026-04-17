import React from "react";

export default function MedicalDisclaimer() {
  return (
    <article className="max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4 text-red-700 leading-tight">Medical Disclaimer</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="font-semibold text-gray-900">
          Last Updated: April 2025
        </p>
        <p>
          The information published on this website by Larsun Labs Pvt Ltd is intended solely for general educational and informational purposes. It is directed primarily at registered medical practitioners, licensed pharmacists, and qualified healthcare professionals. Nothing contained on this website constitutes, or is intended to constitute, medical advice, clinical diagnosis, or a recommendation for any specific treatment or course of action.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Not a Substitute for Professional Medical Advice</h3>
        <p>
          The product information, drug compositions, indications, dosage guidelines, and clinical summaries published on this website are provided as reference material only. They are not a replacement for the professional judgment of a qualified and registered medical practitioner who has examined a patient and is familiar with their individual medical history, current medications, and overall clinical condition.
        </p>
        <p>
          Patients and caregivers must not rely on any information found on this website to self-diagnose, self-prescribe, or make any changes to an ongoing treatment regimen. Any decision related to a patient's health &mdash; including the initiation, modification, or discontinuation of any drug therapy &mdash; must be made exclusively by a licensed medical professional.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Prescription Medicines</h3>
        <p>
          Many of the products described on this website are Schedule H, Schedule H1, or other regulated prescription drugs under the Drugs and Cosmetics Act, 1940, and Rules thereunder. These medicines are legally required to be dispensed only on the written prescription of a registered medical practitioner. Larsun Labs Pvt Ltd expressly discourages any attempt to obtain, supply, or use prescription medicines without a valid prescription.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Individual Medical Variation</h3>
        <p>
          Drug responses vary between individuals based on factors including age, body weight, organ function, co-existing conditions, concurrent medications, genetic factors, and allergies. The information provided on this website reflects standard prescribing guidance and may not be applicable to every patient. A treating physician is best placed to evaluate and apply clinical information to an individual patient's needs.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 font-bold">Emergency Situations</h3>
        <p>
          This website is not designed or intended for use in medical emergencies. If you or someone around you is experiencing a medical emergency, please contact your nearest hospital, emergency services, or call the national emergency helpline immediately. Do not rely on information from this website in time-critical situations.
        </p>
        <p>
          Larsun Labs Pvt Ltd is a pharmaceutical manufacturer and marketer. We are not a medical service provider and do not offer telemedicine, patient consultation, or clinical advisory services of any kind through this website.
        </p>

        <div className="mt-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg shadow-sm">
          <p className="text-sm text-red-800 font-medium italic">
            <strong>Important Note:</strong> This information is provided by Larsun Labs Pvt Ltd for professional reference and general awareness. Always refer to your local regulatory authority and your personal healthcare provider.
          </p>
        </div>
      </div>
    </article>
  );
}
