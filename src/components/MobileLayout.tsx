"use client";

import Image from "next/image";

export default function MobileLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, black, #11182A, #03045e, #0077B6)",
      }}
    >
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Image
            src="/images/doctor.png"
            alt="Friendly doctor cartoon"
            width={80}
            height={80}
            style={{ display: "block", margin: "0 auto" }}
            priority
          />
        </div>
        <h1
          style={{
            fontSize: "2rem",
            fontFamily: "serif",
            color: "white",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ color: "#FF4444" }}>Doc</span>
          <span style={{ color: "#0077B6" }}>Talk</span>
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "white",
            maxWidth: "20rem",
            margin: "0 auto",
          }}
        >
          Your AI-powered medical assistant here to answer your questions about
          medical documents, reports, and treatment plans
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Image
            src="/images/appStoreIcon.svg"
            alt="Download on App Store"
            width={90}
            height={24}
            style={{
              display: "block",
              margin: "0 auto",
              cursor: "pointer",
              transition: "opacity 0.3s",
              opacity: "0.8",
            }}
            priority
          />
        </div>
      </section>

      {/* Image Flow Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Step 1: Take a Picture or Upload Photo
          </p>
          <div
            style={{ width: "15rem", height: "20rem", position: "relative" }}
          >
            <Image
              src="/images/resultScan.png"
              alt="Medical result scan"
              layout="fill"
              style={{
                borderRadius: "0.5rem",
                objectFit: "cover",
                border: "1px solid #e5e5e5",
              }}
              priority
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              color: "white",
              marginBottom: "0.5rem",
            }}
          >
            Step 2: Begin Your Conversation
          </p>
          <div
            style={{ width: "15rem", height: "20rem", position: "relative" }}
          >
            <Image
              src="/images/conversationImage.png"
              alt="AI conversation"
              layout="fill"
              style={{
                borderRadius: "0.5rem",
                objectFit: "cover",
                border: "1px solid #e5e5e5",
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            maxWidth: "20rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
            padding: "0 1rem",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to bottom, #0b1a4a, #1a3b6b)",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              🔍
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              UNDERSTAND ANY MEDICAL DOCUMENT
            </h3>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Snap & Decode: Take a photo or upload PDFs of lab results,
              prescriptions, and medical reports for instant AI-powered
              explanations
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Plain English Translation: Transform complex medical jargon into
              clear, conversational language you can actually understand
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Smart Document Analysis: Advanced AI breaks down diagnoses,
              treatment plans, and test results into digestible insights
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              • Multi-Format Support: Works with photos, PDFs, printed
              documents, and direct camera captures - no formatting hassles
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #0b1a4a, #1a3b6b)",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              💡
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              INTERACTIVE HEALTH CONVERSATIONS
            </h3>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Ask Anything Follow-Up: Dive deeper with unlimited questions
              about your medical documents and get personalized explanations
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • What-If Explorer: Explore treatment options, understand side
              effects, and discuss potential interactions in real-time
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Context-Aware Chat: AI remembers your entire conversation and
              document history for more relevant, connected responses
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              • Voice-Enabled Discussions: Listen to AI responses with premium
              text-to-speech for hands-free health conversations
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #0b1a4a, #1a3b6b)",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              📚
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              COMPREHENSIVE HEALTH KNOWLEDGE
            </h3>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Beyond Your Documents: Ask general health questions and get
              evidence-based answers from a vast medical knowledge base
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Always Up-to-Date: Access the latest health information, medical
              research, and treatment guidelines in real-time
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Multilingual Support: Get health insights in your preferred
              language for better understanding and accessibility
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              • Citation-Backed Answers: Every response includes credible
              medical sources so you can verify and learn more
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #1a3b6b, #0b1a4a)",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              🎯
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              ADVANCED RESEARCH MODE
            </h3>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Deep Medical Insights: Toggle on Premium mode for detailed
              scientific explanations with research citations and clinical
              context
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Latest Studies Access: Explore cutting-edge medical research and
              clinical trials relevant to your specific health conditions
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Professional-Grade Analysis: Get detailed, comprehensive
              analysis similar to what&apos;s used in medical settings for
              informed discussions
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              • Evidence-Based Recommendations: Understand the science behind
              treatments with links to peer-reviewed medical literature
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #1a3b6b, #0b1a4a)",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              📱
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              USER-FRIENDLY FEATURES
            </h3>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Intuitive Design: Clean, accessible interface designed for all
              ages with large font options and dark mode support
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Conversation Archive: Save important health discussions and
              easily access your complete medical conversation history
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Smart File Management: Automatic document organization with
              secure cloud storage and easy retrieval
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              • Seamless Experience: Fast document processing, progress
              tracking, and smooth navigation across all app features
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #1a3b6b, #0b1a4a)",
              color: "white",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              🔒
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              PRIVACY & SECURITY
            </h3>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Bank-Level Encryption: Your health data is protected with
              enterprise-grade encryption both in transit and at rest
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Zero Data Sharing: Your medical information stays private - we
              never share data with third parties or advertisers
            </p>
            <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
              • Secure Cloud Storage: Built on trusted infrastructure with
              strict access controls and regular security audits
            </p>
            <p style={{ fontSize: "0.875rem" }}>
              • HIPAA-Conscious Design: Privacy-first architecture ensures your
              sensitive health information remains confidential and secure
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          padding: "1rem 30px",
          backgroundColor: "#001f3f",
          borderRadius: "1rem",
          border: "2px solid white",
          marginTop: "80px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              marginBottom: "0.5rem",
              color: "white",
            }}
          >
            Try <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span> today.
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              marginBottom: "0.5rem",
              color: "white",
            }}
          >
            Understand your health one conversation at a time
          </p>
          <div
            style={{
              cursor: "pointer",
              transition: "opacity 0.3s",
              opacity: "0.8",
              marginBottom: "0.5rem",
            }}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={90}
              height={24}
              style={{ display: "block", margin: "0 auto" }}
              priority
            />
          </div>
          <p style={{ fontSize: "0.75rem", color: "white" }}>
            If you have any questions, please email:{" "}
            <a
              href="mailto:doctalk@zymgmtco.com"
              style={{ color: "#0077B6", textDecoration: "underline" }}
            >
              doctalk@zymgmtco.com
            </a>
          </p>
        </div>
      </footer>

      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}
