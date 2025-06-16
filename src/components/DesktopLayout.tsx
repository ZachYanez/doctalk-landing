"use client";

import Image from "next/image";

export default function DesktopLayout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #11182A 40%, #03045e 70%, #0077B6 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="w-full pt-8 pb-32" style={{ marginTop: "100px" }}>
        <div className="relative flex flex-col items-center">
          <div
            className="w-[211px] h-[211px] mt-8"
            style={{ marginBottom: "20px" }}
          >
            <Image
              src="/images/doctor.png"
              alt="Friendly doctor cartoon"
              width={211}
              height={211}
              priority
            />
          </div>
          <h1 className="text-[120px] font-serif text-center mt-[-20px]">
            <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span>
          </h1>
          <p
            className="text-[38px] text-center max-w-[800px] mt-[-60px]"
            style={{ color: "#ffffff" }}
          >
            Your AI-powered medical assistant here to answer your questions
            about medical documents, reports, and treatment plans
          </p>
          <div
            className="mt-8 hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => {}}
            style={{ marginBottom: "40px" }}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={360}
              height={96}
              priority
            />
          </div>
        </div>
      </section>

      {/* Image Flow Section */}
      <div className="w-full" style={{ marginBottom: "60px" }}>
        <div
          className="flex items-center justify-center"
          style={{ gap: "120px" }}
        >
          <div className="flex flex-col items-center">
            <p
              className="text-[30px] font-medium mb-6"
              style={{ color: "white" }}
            >
              Step 1: Take a Picture or Upload Photo
            </p>
            <div className="w-[377px] h-[504px] relative transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]">
              <Image
                src="/images/resultScan.png"
                alt="Medical result scan"
                fill
                className="rounded-[24px]"
                style={{
                  objectFit: "cover",
                  border: "1px solid #e5e5e5",
                }}
                priority
              />
            </div>
          </div>
          <div className="text-[120px]">👉</div>
          <div className="flex flex-col items-center">
            <p
              className="text-[30px] font-medium mb-6"
              style={{ color: "white" }}
            >
              Step 2: Begin Your Conversation
            </p>
            <div className="w-[377px] h-[504px] relative transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]">
              <Image
                src="/images/conversationImage.png"
                alt="AI conversation"
                fill
                className="rounded-[24px]"
                style={{
                  objectFit: "cover",
                  border: "1px solid #e5e5e5",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gray-50">
        <div className="max-w-[1464px] mx-auto px-8 py-32 mb-16">
          <div className="relative">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "52px",
              }}
            >
              {/* Feature 1 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #2563EB",
                  borderRadius: "12px",
                  padding: "48px",
                  color: "white",
                }}
              >
                <div className="text-[64px] text-center mb-4">🔍</div>
                <h3 className="text-[34px] font-bold mb-8 text-center">
                  UNDERSTAND ANY MEDICAL DOCUMENT
                </h3>
                <p className="text-[24px] mb-12">
                  • Upload lab results, diagnosis reports, treatment plans, and
                  medical records
                </p>
                <p className="text-[24px] mb-12">
                  • Get clear, conversational explanations of complex medical
                  terminology
                </p>
                <p className="text-[24px] mb-12">
                  • Receive instant insights broken down into easy-to-understand
                  language
                </p>
                <p className="text-[24px]">
                  • Support for PDF documents, photos of printed documents, and
                  direct camera captures
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #2563EB",
                  borderRadius: "12px",
                  padding: "48px",
                  color: "white",
                }}
              >
                <div className="text-[64px] text-center mb-4">💡</div>
                <h3 className="text-[34px] font-bold mb-8 text-center">
                  INTERACTIVE HEALTH CONVERSATIONS
                </h3>
                <p className="text-[24px] mb-12">
                  • Ask follow-up questions about any part of your medical
                  documents
                </p>
                <p className="text-[24px] mb-12">
                  • Get detailed explanations of medical terms, procedures, and
                  diagnoses
                </p>
                <p className="text-[24px] mb-12">
                  • Explore &ldquo;what-if&rdquo; scenarios and treatment
                  options
                </p>
                <p className="text-[24px]">
                  • Understand potential side effects and interactions
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #2563EB",
                  borderRadius: "12px",
                  padding: "48px",
                  color: "white",
                }}
              >
                <div className="text-[64px] text-center mb-4">📚</div>
                <h3 className="text-[34px] font-bold mb-8 text-center">
                  COMPREHENSIVE HEALTH KNOWLEDGE
                </h3>
                <p className="text-[24px] mb-12">
                  • Ask general health questions beyond your documents
                </p>
                <p className="text-[24px] mb-12">
                  • Learn about conditions, treatments, and preventive care
                </p>
                <p className="text-[24px] mb-12">
                  • Get evidence-based information from reliable medical sources
                </p>
                <p className="text-[24px]">
                  • Access a vast database of medical knowledge
                </p>
              </div>

              {/* Feature 4 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #2563EB",
                  borderRadius: "12px",
                  padding: "48px",
                  color: "white",
                }}
              >
                <div className="text-[64px] text-center mb-4">🎯</div>
                <h3 className="text-[34px] font-bold mb-8 text-center">
                  ADVANCED RESEARCH MODE
                </h3>
                <p className="text-[24px] mb-12">
                  • Toggle on Advanced Mode for deeper medical insights
                </p>
                <p className="text-[24px] mb-12">
                  • Access detailed scientific explanations and research
                  citations
                </p>
                <p className="text-[24px] mb-12">
                  • Explore related medical studies and clinical trials
                </p>
                <p className="text-[24px]">
                  • Understand the latest medical research relevant to your
                  condition
                </p>
              </div>

              {/* Feature 5 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #2563EB",
                  borderRadius: "12px",
                  padding: "48px",
                  color: "white",
                }}
              >
                <div className="text-[64px] text-center mb-4">📱</div>
                <h3 className="text-[34px] font-bold mb-8 text-center">
                  USER-FRIENDLY FEATURES
                </h3>
                <p className="text-[24px] mb-12">
                  • Intuitive interface designed for all age groups
                </p>
                <p className="text-[24px] mb-12">
                  • Secure document storage and easy access to past
                  conversations
                </p>
                <p className="text-[24px] mb-12">
                  • Dark mode support for comfortable reading
                </p>
                <p className="text-[24px]">
                  • Quick document scanning and processing
                </p>
              </div>

              {/* Feature 6 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #2563EB",
                  borderRadius: "12px",
                  padding: "48px",
                  color: "white",
                }}
              >
                <div className="text-[64px] text-center mb-4">🔒</div>
                <h3 className="text-[34px] font-bold mb-8 text-center">
                  PRIVACY & SECURITY
                </h3>
                <p className="text-[24px] mb-12">
                  • Secure Transmission: Data encrypted in transit using HTTPS.
                </p>
                <p className="text-[24px] mb-12">
                  • Encrypted Storage: Your documents & conversations stored
                  with strong encryption at rest.
                </p>
                <p className="text-[24px] mb-12">
                  • Strict Access Controls: Internal access to your data is
                  strictly limited.
                </p>
                <p className="text-[24px]">
                  • Secure Infrastructure: Built on reputable cloud hosting and
                  storage providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-16 w-full"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div
          className="max-w-[600px] mx-auto text-center py-12 px-8 border-2 border-[#2563EB]"
          style={{
            backgroundColor: "#03045e",
            borderRadius: "24px",
            paddingBottom: "32px",
            color: "white",
          }}
        >
          <h2 className="text-[46px] font-bold mb-2" style={{ color: "white" }}>
            Try <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span> today.
          </h2>
          <p className="text-[28px] mb-6" style={{ color: "white" }}>
            Understand your health one conversation at a time
          </p>
          <div
            className="hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => {}}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={360}
              height={96}
              priority
            />
          </div>
          <p className="text-[20px] mt-6" style={{ color: "white" }}>
            If you have any questions, please email:{" "}
            <a
              href="mailto:zy@zymgmtco.com"
              className="underline hover:text-[#0077B6] transition-colors"
            >
              zy@zymgmtco.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full py-10 text-center"
        style={{ color: "white", marginBottom: 100 }}
      >
        <p className="text-[18px] mb-4">© ZY MGMT CO 2025</p>
        <a
          href="/privacy-policy"
          className="text-[16px] underline hover:text-[#0077B6] transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
