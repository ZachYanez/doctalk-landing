"use client";

export default function TermsOfServicePage() {
  return (
    <div
      className="container mx-auto text-white"
      style={{
        background:
          "linear-gradient(to bottom, black, #11182A, #03045e, #0077B6)",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "6rem 2rem 4rem 2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1 className="text-4xl font-bold mb-6" style={{ textAlign: "center" }}>
          DocTalk Terms of Service
        </h1>
        <p className="mb-8" style={{ textAlign: "center", opacity: 0.9 }}>
          <strong>Effective Date:</strong> July 6, 2025
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Acceptance of Terms
        </h2>
        <p className="mb-4">
          By using DocTalk (the “Service”), you agree to these Terms of Service
          and our Privacy Policy. If you do not agree, do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Medical Disclaimer</h2>
        <p className="mb-4">
          DocTalk is an AI-powered informational tool and is{" "}
          <strong>NOT</strong> a medical device or a substitute for professional
          medical care. It provides general educational information only and
          does not provide medical advice, diagnosis, or treatment, and cannot
          replace consultation with qualified healthcare providers. Do not use
          DocTalk for medical emergencies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Important Legal Disclaimer
        </h2>
        <p className="mb-4">
          DocTalk may display or summarize information about health law,
          insurance coverage, and patient rights. This information is provided
          for general educational purposes only and does not constitute legal
          advice. We do not provide legal representation, and your use of the
          Service does not create an attorney–client relationship. For advice
          about your legal rights or any legal decisions (including appeals,
          complaints, or potential claims), consult a qualified attorney or
          licensed advocate. Content may aggregate publicly available materials
          and could be inaccurate, incomplete, or outdated.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          AI Technology Limitations
        </h2>
        <p className="mb-4">
          AI responses may be inaccurate, incomplete, or outdated. Document
          analysis may misinterpret content. You acknowledge these limitations
          and use the Service at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Privacy and Data Handling
        </h2>
        <p className="mb-4">
          Your use of the Service is governed by the Privacy Policy. We
          implement encryption and security controls and do not sell personal
          data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Subscription and Billing
        </h2>
        <p className="mb-4">
          If you purchase a subscription, billing and cancellations are managed
          through your device’s app store in accordance with its policies.
          Prices may change with notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Intellectual Property
        </h2>
        <p className="mb-4">
          The Service and its content are owned by ZY MGMT Co and protected by
          applicable laws. You receive a limited, non-transferable license for
          personal use.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          THE SERVICE IS PROVIDED “AS IS.” TO THE MAXIMUM EXTENT PERMITTED BY
          LAW, WE DISCLAIM ALL WARRANTIES AND SHALL NOT BE LIABLE FOR INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL
          LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE 12 MONTHS
          PRECEDING THE CLAIM.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless ZY MGMT Co from claims
          arising out of your use of the Service or violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Changes to the Service and Terms
        </h2>
        <p className="mb-4">
          We may modify or discontinue the Service or update these Terms.
          Continued use constitutes acceptance of changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of the State of Texas (or your
          local jurisdiction where applicable). Disputes may be resolved by
          arbitration or in courts of competent jurisdiction as permitted by
          law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact</h2>
        <p className="mb-4">
          <strong>ZY MGMT Co</strong>
          <br />
          Email: <a href="mailto:doctalk@zymgmtco.com">doctalk@zymgmtco.com</a>
        </p>
      </section>
    </div>
  );
}
