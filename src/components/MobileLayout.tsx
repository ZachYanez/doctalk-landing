"use client";

import Image from "next/image";

export default function MobileLayout() {
  return (
    <div
      className="min-h-screen flex flex-col w-full"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #11182A 40%, #03045e 70%, #0077B6 100%)",
      }}
    >
      {/* Hero Section */}
      <section
        className="w-full pt-8 pb-16 md:pb-32 px-4"
        style={{ marginTop: "60px" }}
      >
        <div className="relative flex flex-col items-center">
          <div
            className="w-[150px] h-[150px] md:w-[211px] md:h-[211px] mt-8"
            style={{ marginBottom: "20px" }}
          >
            <Image
              src="/images/doctor.png"
              alt="Friendly doctor cartoon"
              width={211}
              height={211}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-6xl sm:text-8xl lg:text-[120px] font-serif text-center mt-[-10px] md:mt-[-20px]">
            <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span>
          </h1>
          <p
            className="text-xl sm:text-2xl lg:text-[38px] text-center max-w-[800px] mt-[-20px] md:mt-[-40px] lg:mt-[-60px] px-2"
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
              className="w-[240px] h-auto sm:w-[300px] lg:w-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Image Flow Section */}
      <div className="w-full px-4" style={{ marginBottom: "60px" }}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex flex-col items-center w-full lg:w-auto">
            <p
              className="text-xl sm:text-2xl lg:text-[30px] font-medium mb-6 text-center"
              style={{ color: "white" }}
            >
              Step 1: Take a Picture or Upload Photo
            </p>
            <div className="w-full max-w-[264px] aspect-[377/504] relative transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]">
              <Image
                src="/images/resultScan.png"
                alt="Medical result scan"
                fill
                className="rounded-[24px]"
                style={{
                  objectFit: "cover",
                  border: "1px solid #e5e5e5",
                }}
                sizes="(max-width: 1024px) 100vw, 264px"
                priority
              />
            </div>
          </div>
          <div className="text-[80px] lg:text-[120px] hidden lg:block">👉</div>
          <div className="text-[80px] lg:hidden block my-4">👇</div>
          <div className="flex flex-col items-center w-full lg:w-auto">
            <p
              className="text-xl sm:text-2xl lg:text-[30px] font-medium mb-6 text-center"
              style={{ color: "white" }}
            >
              Step 2: Begin Your Conversation
            </p>
            <div className="w-full max-w-[264px] aspect-[377/504] relative transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)]">
              <Image
                src="/images/conversationImage.png"
                alt="AI conversation"
                fill
                className="rounded-[24px]"
                style={{
                  objectFit: "cover",
                  border: "1px solid #e5e5e5",
                }}
                sizes="(max-width: 1024px) 100vw, 264px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full py-16 md:py-32">
        <div className="max-w-[1464px] mx-auto">
          <div>
            <div className="grid grid-cols-1">
              {[
                {
                  icon: "🔍",
                  title: "UNDERSTAND ANY MEDICAL DOCUMENT",
                  points: [
                    "Upload lab results, diagnosis reports, treatment plans, and medical records",
                    "Get clear, conversational explanations of complex medical terminology",
                    "Receive instant insights broken down into easy-to-understand language",
                    "Support for PDF documents, photos of printed documents, and direct camera captures",
                  ],
                },
                {
                  icon: "💡",
                  title: "INTERACTIVE HEALTH CONVERSATIONS",
                  points: [
                    "Ask follow-up questions about any part of your medical documents",
                    "Get detailed explanations of medical terms, procedures, and diagnoses",
                    'Explore "what-if" scenarios and treatment options',
                    "Understand potential side effects and interactions",
                  ],
                },
                {
                  icon: "📚",
                  title: "COMPREHENSIVE HEALTH KNOWLEDGE",
                  points: [
                    "Ask general health questions beyond your documents",
                    "Learn about conditions, treatments, and preventive care",
                    "Get evidence-based information from reliable medical sources",
                    "Access a vast database of medical knowledge",
                  ],
                },
                {
                  icon: "🎯",
                  title: "ADVANCED RESEARCH MODE",
                  points: [
                    "Toggle on Advanced Mode for deeper medical insights",
                    "Access detailed scientific explanations and research citations",
                    "Explore related medical studies and clinical trials",
                    "Understand the latest medical research relevant to your condition",
                  ],
                },
                {
                  icon: "📱",
                  title: "USER-FRIENDLY FEATURES",
                  points: [
                    "Intuitive interface designed for all age groups",
                    "Secure document storage and easy access to past conversations",
                    "Dark mode support for comfortable reading",
                    "Quick document scanning and processing",
                  ],
                },
                {
                  icon: "🔒",
                  title: "PRIVACY & SECURITY",
                  points: [
                    "Secure Transmission: Data encrypted in transit using HTTPS.",
                    "Encrypted Storage: Your documents & conversations stored with strong encryption at rest.",
                    "Strict Access Controls: Internal access to your data is strictly limited.",
                    "Secure Infrastructure: Built on reputable cloud hosting and storage providers.",
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="transform transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,182,0.3)] p-6"
                  style={{
                    backgroundColor: "#000000",
                    border: "1px solid #2563EB",
                    color: "white",
                    marginBottom: "4rem",
                    marginLeft: "24px",
                    marginRight: "24px",
                    borderRadius: "32px",
                  }}
                >
                  <div className="pt-8 mb-4 text-center">
                    <div className="text-4xl inline-block">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-6 text-center">
                    {feature.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-4 pl-2 px-4">
                    {feature.points.map((point, pIndex) => (
                      <li key={pIndex} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-16 w-full px-4"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div
          className="max-w-[600px] mx-auto text-center py-8 md:py-12 px-4 sm:px-8 border-2 border-[#2563EB]"
          style={{
            backgroundColor: "#03045e",
            borderRadius: "24px",
            paddingBottom: "32px",
            color: "white",
          }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold mb-2"
            style={{ color: "white" }}
          >
            Try <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span> today.
          </h2>
          <p
            className="text-lg sm:text-xl lg:text-[28px] mb-6"
            style={{ color: "white" }}
          >
            Understand your health one conversation at a time
          </p>
          <div
            className="hover:opacity-90 transition-opacity cursor-pointer inline-block"
            onClick={() => {}}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={360}
              height={96}
              priority
              className="w-[240px] h-auto sm:w-[300px] lg:w-[360px]"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full py-10 text-center px-4"
        style={{ color: "white", marginBottom: 50 }}
      >
        <p className="text-base md:text-[18px] mb-4">© ZY MGMT CO 2025</p>
        <a
          href="/privacy-policy"
          className="text-sm md:text-[16px] underline hover:text-[#0077B6] transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
