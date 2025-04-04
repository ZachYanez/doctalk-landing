"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{ marginTop: "80px" }}
      className="min-h-screen bg-white flex flex-col"
    >
      {/* Hero Section */}
      <section className="w-full bg-gray-50 pt-16 pb-32">
        <div className="relative flex flex-col items-center">
          <div className="w-48 h-48 mt-8">
            <Image
              src="/images/doctor.png"
              alt="Friendly doctor cartoon"
              width={192}
              height={192}
              priority
            />
          </div>
          <h1 className="text-[120px] font-serif text-center mt-[-20px]">
            <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span>
          </h1>
          <p className="text-[28px] text-center max-w-[800px] text-gray-700 mt-[-60px]">
            Your AI-powered medical assistant here to answer your questions
            about lab results, diagnosis reports, treatment plans, and medical
            records
          </p>
        </div>
      </section>

      {/* Image Flow Section */}
      <div className="w-full" style={{ marginBottom: "60px" }}>
        <div
          className="flex items-center justify-center"
          style={{ gap: "120px" }}
        >
          <div className="w-[343px] h-[458px] relative">
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
          <div className="text-[120px]">👉</div>
          <div className="w-[343px] h-[458px] relative">
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

      {/* Features Section */}
      <div className="w-full bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8 py-32 mb-16">
          <div className="relative">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
              }}
            >
              {/* Feature 1 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div className="text-4xl text-center mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-8 text-center">
                  UNDERSTAND ANY MEDICAL DOCUMENT
                </h3>
                <p className="mb-12">
                  • Upload lab results, diagnosis reports, treatment plans, and
                  medical records
                </p>
                <p className="mb-12">
                  • Get clear, conversational explanations of complex medical
                  terminology
                </p>
                <p className="mb-12">
                  • Receive instant insights broken down into easy-to-understand
                  language
                </p>
                <p>
                  • Support for PDF documents, photos of printed documents, and
                  direct camera captures
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div className="text-4xl text-center mb-4">💡</div>
                <h3 className="text-xl font-bold mb-8 text-center">
                  INTERACTIVE HEALTH CONVERSATIONS
                </h3>
                <p className="mb-12">
                  • Ask follow-up questions about any part of your medical
                  documents
                </p>
                <p className="mb-12">
                  • Get detailed explanations of medical terms, procedures, and
                  diagnoses
                </p>
                <p className="mb-12">
                  • Explore &ldquo;what-if&rdquo; scenarios and treatment
                  options
                </p>
                <p>• Understand potential side effects and interactions</p>
              </div>

              {/* Feature 3 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div className="text-4xl text-center mb-4">📚</div>
                <h3 className="text-xl font-bold mb-8 text-center">
                  COMPREHENSIVE HEALTH KNOWLEDGE
                </h3>
                <p className="mb-12">
                  • Ask general health questions beyond your documents
                </p>
                <p className="mb-12">
                  • Learn about conditions, treatments, and preventive care
                </p>
                <p className="mb-12">
                  • Get evidence-based information from reliable medical sources
                </p>
                <p>• Access a vast database of medical knowledge</p>
              </div>

              {/* Feature 4 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div className="text-4xl text-center mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-8 text-center">
                  ADVANCED RESEARCH MODE
                </h3>
                <p className="mb-12">
                  • Toggle on Advanced Mode for deeper medical insights
                </p>
                <p className="mb-12">
                  • Access detailed scientific explanations and research
                  citations
                </p>
                <p className="mb-12">
                  • Explore related medical studies and clinical trials
                </p>
                <p>
                  • Understand the latest medical research relevant to your
                  condition
                </p>
              </div>

              {/* Feature 5 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div className="text-4xl text-center mb-4">📱</div>
                <h3 className="text-xl font-bold mb-8 text-center">
                  USER-FRIENDLY FEATURES
                </h3>
                <p className="mb-12">
                  • Intuitive interface designed for all age groups
                </p>
                <p className="mb-12">
                  • Secure document storage and easy access to past
                  conversations
                </p>
                <p className="mb-12">
                  • Dark mode support for comfortable reading
                </p>
                <p>• Quick document scanning and processing</p>
              </div>

              {/* Feature 6 */}
              <div
                className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid black",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div className="text-4xl text-center mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-8 text-center">
                  PRIVACY & SECURITY
                </h3>
                <p className="mb-12">• Industry-standard security protocols</p>
                <p className="mb-12">
                  • No personal health information stored on our servers
                </p>
                <p className="mb-12">• Secure document processing</p>
                <p>• End-to-end encrypted data transmission</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-16 w-full"
        style={{ marginTop: "100px", marginBottom: "200px" }}
      >
        <div
          className="max-w-[600px] mx-auto text-center py-12 px-8 border-2 border-white"
          style={{
            background: "linear-gradient(135deg, #0077B6, #005b8c)",
            borderRadius: "24px",
            paddingBottom: "32px",
            color: "white",
          }}
        >
          <h2 className="text-4xl font-bold mb-2" style={{ color: "white" }}>
            Try DocTalk today.
          </h2>
          <p className="text-lg mb-6" style={{ color: "white" }}>
            Understand your health one conversation at a time.
          </p>
          <button
            className="bg-transparent py-2 px-8 rounded-full font-medium hover:bg-white hover:text-[#0077B6] border border-white mb-8"
            style={{ color: "white" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
