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
              • Upload lab results, diagnosis reports, treatment plans, and
              medical records
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Get clear, conversational explanations of complex medical
              terminology
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Receive instant insights broken down into easy-to-understand
              language
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Support for PDF documents, photos of printed documents, and
              direct camera captures
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
              • Ask follow-up questions about any part of your medical documents
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Get detailed explanations of medical terms, procedures, and
              diagnoses
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Explore &ldquo;what-if&rdquo; scenarios and treatment options
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Understand potential side effects and interactions
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
              • Ask general health questions beyond your documents
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Access a wide range of health topics and information
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Stay informed with the latest health news and updates
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
              • Toggle on Advanced Mode for deeper medical insights
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Access detailed scientific explanations and research citations
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Explore related medical studies and clinical trials
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Understand the latest medical research relevant to your
              condition
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
              • Intuitive interface designed for all age groups
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Secure document storage and easy access to past conversations
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Dark mode support for comfortable reading
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Quick document scanning and processing
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
              • Secure Transmission: Data encrypted in transit using HTTPS.
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Encrypted Storage: Your documents & conversations stored with
              strong encryption at rest.
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
              • Strict Access Controls: Internal access to your data is strictly
              limited.
            </p>
            <p style={{ fontSize: "1rem" }}>
              • Secure Infrastructure: Built on reputable cloud hosting and
              storage providers.
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
