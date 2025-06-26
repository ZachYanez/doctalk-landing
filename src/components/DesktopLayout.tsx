"use client";

import Image from "next/image";

export default function DesktopLayout() {
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
      <section style={{ textAlign: "center", padding: "4rem 0" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Image
            src="/images/doctor.png"
            alt="Friendly doctor cartoon"
            width={150}
            height={150}
            style={{ display: "block", margin: "0 auto" }}
            priority
          />
        </div>
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "serif",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          <span style={{ color: "#FF4444" }}>Doc</span>
          <span style={{ color: "#0077B6" }}>Talk</span>
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "white",
            maxWidth: "32rem",
            margin: "0 auto",
          }}
        >
          Your AI-powered medical assistant here to answer your questions about
          medical documents, reports, and treatment plans
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Image
            src="/images/appStoreIcon.svg"
            alt="Download on App Store"
            width={180}
            height={48}
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
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          padding: "4rem 0",
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
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Step 1: Take a Picture or Upload Photo
          </p>
          <div
            style={{ width: "18rem", height: "24rem", position: "relative" }}
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
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Step 2: Begin Your Conversation
          </p>
          <div
            style={{ width: "18rem", height: "24rem", position: "relative" }}
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
      <section style={{ padding: "4rem 0" }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            padding: "0 1rem",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to bottom, #0b1a4a, #1a3b6b)",
              color: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              🔍
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              UNDERSTAND ANY MEDICAL DOCUMENT
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Snap & Decode: Take a photo or upload PDFs of lab results,
              prescriptions, and medical reports for instant AI-powered
              explanations
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Plain English Translation: Transform complex medical jargon into
              clear, conversational language you can actually understand
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Smart Document Analysis: Advanced AI breaks down diagnoses,
              treatment plans, and test results into digestible insights
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Multi-Format Support: Works with photos, PDFs, printed
              documents, and direct camera captures - no formatting hassles
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #0b1a4a, #1a3b6b)",
              color: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              💡
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              INTERACTIVE HEALTH CONVERSATIONS
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Ask Anything Follow-Up: Dive deeper with unlimited questions
              about your medical documents and get personalized explanations
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • What-If Explorer: Explore treatment options, understand side
              effects, and discuss potential interactions in real-time
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Context-Aware Chat: AI remembers your entire conversation and
              document history for more relevant, connected responses
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Voice-Enabled Discussions: Listen to AI responses with premium
              text-to-speech for hands-free health conversations
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #0b1a4a, #1a3b6b)",
              color: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              📚
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              COMPREHENSIVE HEALTH KNOWLEDGE
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Beyond Your Documents: Ask general health questions and get
              evidence-based answers from a vast medical knowledge base
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Always Up-to-Date: Access the latest health information, medical
              research, and treatment guidelines in real-time
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Multilingual Support: Get health insights in your preferred
              language for better understanding and accessibility
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Citation-Backed Answers: Every response includes credible
              medical sources so you can verify and learn more
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #1a3b6b, #0b1a4a)",
              color: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              🎯
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              ADVANCED RESEARCH MODE
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Deep Medical Insights: Toggle on Premium mode for detailed
              scientific explanations with research citations and clinical
              context
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Latest Studies Access: Explore cutting-edge medical research and
              clinical trials relevant to your specific health conditions
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Professional-Grade Analysis: Get detailed, comprehensive
              analysis similar to what&apos;s used in medical settings for
              informed discussions
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Evidence-Based Recommendations: Understand the science behind
              treatments with links to peer-reviewed medical literature
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #1a3b6b, #0b1a4a)",
              color: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              📱
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              USER-FRIENDLY FEATURES
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Intuitive Design: Clean, accessible interface designed for all
              ages with large font options and dark mode support
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Conversation Archive: Save important health discussions and
              easily access your complete medical conversation history
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Smart File Management: Automatic document organization with
              secure cloud storage and easy retrieval
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Seamless Experience: Fast document processing, progress
              tracking, and smooth navigation across all app features
            </p>
          </div>
          <div
            style={{
              background: "linear-gradient(to bottom, #1a3b6b, #0b1a4a)",
              color: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              🔒
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              PRIVACY & SECURITY
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Bank-Level Encryption: Your health data is protected with
              enterprise-grade encryption both in transit and at rest
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Zero Data Sharing: Your medical information stays private - we
              never share data with third parties or advertisers
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Secure Cloud Storage: Built on trusted infrastructure with
              strict access controls and regular security audits
            </p>
            <p style={{ fontSize: "1rem" }}>
              • HIPAA-Conscious Design: Privacy-first architecture ensures your
              sensitive health information remains confidential and secure
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          padding: "2rem 30px",
          backgroundColor: "#001f3f",
          borderRadius: "1rem",
          border: "2px solid white",
          marginTop: "80px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              marginBottom: "1rem",
              color: "white",
            }}
          >
            Try <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span> today.
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "white" }}>
            Understand your health one conversation at a time
          </p>
          <div
            style={{
              cursor: "pointer",
              transition: "opacity 0.3s",
              opacity: "0.8",
              marginBottom: "1rem",
            }}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={180}
              height={48}
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
