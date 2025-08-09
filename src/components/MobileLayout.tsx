"use client";

import Image from "next/image";

export default function MobileLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, black, #11182A, #03045e, #0077B6)",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem 2rem 1.5rem",
          width: "100%",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <Image
            src="/images/3DDoctor.png"
            alt="DocTalk AI Assistant"
            width={120}
            height={120}
            style={{ display: "block", margin: "0 auto", objectFit: "contain" }}
            priority
          />
        </div>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "white",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}
        >
          <span style={{ color: "#FF4444" }}>Doc</span>
          <span style={{ color: "#0077B6" }}>Talk</span>
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "white",
            maxWidth: "90%",
            margin: "0 auto 0.75rem",
            fontWeight: "500",
            opacity: "0.95",
            lineHeight: "1.3",
          }}
        >
          Understand Your Medical Documents in Seconds
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "white",
            maxWidth: "85%",
            margin: "0 auto 2rem",
            opacity: "0.8",
            lineHeight: "1.5",
          }}
        >
          AI-powered insights that transform complex medical reports into clear
          information
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <Image
            src="/images/appStoreIcon.svg"
            alt="Download on App Store"
            width={160}
            height={48}
            style={{
              display: "block",
              margin: "0 auto",
              cursor: "pointer",
            }}
            priority
          />
        </div>

        {/* Trust Indicators */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            color: "white",
            fontSize: "0.875rem",
            opacity: "0.7",
          }}
        >
          <span>🔒 Bank-Level Encryption</span>
          <span>⚡ Instant Analysis</span>
          <span>🏥 Medical-Grade AI</span>
        </div>
      </section>

      {/* How It Works - Mobile */}
      <section
        style={{
          width: "100%",
          padding: "2rem 1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            marginBottom: "2rem",
            opacity: "0.95",
          }}
        >
          How It Works
        </h2>

        {/* Step 1 */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              width: "280px",
              height: "360px",
              position: "relative",
              margin: "0 auto 1.5rem",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src="/images/resultScan.png"
              alt="Upload medical documents"
              layout="fill"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "0.5rem",
                color: "#0077B6",
                fontWeight: "700",
              }}
            >
              01
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Upload Any Medical Document
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
                maxWidth: "90%",
                margin: "0 auto",
              }}
            >
              Snap a photo or upload PDFs of lab results, prescriptions, or
              medical reports. Our AI instantly processes any format.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div
            style={{
              width: "280px",
              height: "360px",
              position: "relative",
              margin: "0 auto 1.5rem",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src="/images/conversationImage.png"
              alt="AI conversation interface"
              layout="fill"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "0.5rem",
                color: "#0077B6",
                fontWeight: "700",
              }}
            >
              02
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Get Instant Clarity
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
                maxWidth: "90%",
                margin: "0 auto",
              }}
            >
              Ask questions in plain English and receive clear explanations. Our
              AI provides personalized insights with every question.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features - Mobile Grid */}
      <section
        style={{
          width: "100%",
          padding: "2rem 1.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            marginBottom: "0.75rem",
            opacity: "0.95",
          }}
        >
          Everything You Need
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "white",
            textAlign: "center",
            marginBottom: "2rem",
            opacity: "0.7",
            maxWidth: "85%",
            margin: "0 auto 2rem",
          }}
        >
          Powerful features for your peace of mind
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              🔍
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Instant Understanding
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
              }}
            >
              Transform medical jargon into clear language tailored to your
              understanding.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              💬
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Ask Anything
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
              }}
            >
              Dive deeper with unlimited questions. Get personalized insights
              about your health.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              🔒
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Complete Privacy
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
              }}
            >
              Your health data stays yours. Bank-level encryption and zero data
              sharing.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              🎯
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Research Mode
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
              }}
            >
              Access medical research and evidence-based insights with trusted
              citations.
            </p>
          </div>

          {/* Feature 5 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              📱
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Always Accessible
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
              }}
            >
              Save conversations and access your health insights anytime,
              anywhere.
            </p>
          </div>

          {/* Feature 6 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "1.75rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              🌐
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              Multi-Language
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.5",
              }}
            >
              Get health insights in your preferred language for better
              understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Mobile */}
      <section
        style={{
          width: "100%",
          padding: "2rem 1.5rem",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            padding: "2rem 1.5rem",
            borderRadius: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "white",
              fontStyle: "italic",
              marginBottom: "1.5rem",
              lineHeight: "1.5",
              opacity: "0.9",
            }}
          >
            "DocTalk transformed how I understand my health. What used to be
            confusing medical reports are now clear conversations."
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "white",
              opacity: "0.7",
            }}
          >
            — Sarah M., DocTalk User
          </p>
        </div>
      </section>

      {/* Footer CTA Section - Mobile */}
      <footer
        style={{
          padding: "2rem 1.5rem",
          backgroundColor: "rgba(0, 31, 63, 0.5)",
          backdropFilter: "blur(10px)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          margin: "2rem 1.5rem 3rem 1.5rem",
          width: "calc(100% - 3rem)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "600",
              marginBottom: "0.75rem",
              color: "white",
            }}
          >
            Try <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span> today.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1.5rem",
              color: "white",
              opacity: "0.8",
            }}
          >
            Understand your health one conversation at a time
          </p>
          <div
            style={{
              marginBottom: "1.5rem",
            }}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={160}
              height={48}
              style={{
                display: "block",
                margin: "0 auto",
                cursor: "pointer",
              }}
              priority
            />
          </div>
          <p style={{ fontSize: "0.8rem", color: "white", opacity: "0.6" }}>
            Questions? Email us at{" "}
            <a
              href="mailto:doctalk@zymgmtco.com"
              style={{ color: "#0077B6", textDecoration: "none" }}
            >
              doctalk@zymgmtco.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
