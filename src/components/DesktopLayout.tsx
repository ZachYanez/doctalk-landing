"use client";

import Image from "next/image";

export default function DesktopLayout() {
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
          padding: "6rem 2rem 4rem 2rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <Image
            src="/images/3DDoctor.png"
            alt="DocTalk AI Assistant"
            width={180}
            height={180}
            style={{ display: "block", margin: "0 auto", objectFit: "contain" }}
            priority
          />
        </div>

        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            color: "white",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
          }}
        >
          <span style={{ color: "#FF4444" }}>Doc</span>
          <span style={{ color: "#0077B6" }}>Talk</span>
        </h1>

        <p
          style={{
            fontSize: "1.75rem",
            color: "white",
            maxWidth: "42rem",
            margin: "0 auto 1rem",
            fontWeight: "500",
            opacity: "0.95",
            lineHeight: "1.4",
          }}
        >
          Understand Your Medical Documents in Seconds
        </p>

        <p
          style={{
            fontSize: "1.25rem",
            color: "white",
            maxWidth: "36rem",
            margin: "0 auto 3rem",
            opacity: "0.8",
            lineHeight: "1.6",
          }}
        >
          AI-powered insights that transform complex medical reports into clear,
          actionable information you can trust
        </p>

        <div style={{ marginBottom: "4rem" }}>
          <Image
            src="/images/appStoreIcon.svg"
            alt="Download on App Store"
            width={200}
            height={60}
            style={{
              display: "block",
              margin: "0 auto",
              cursor: "pointer",
              transition: "transform 0.2s, opacity 0.2s",
              opacity: "0.9",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.opacity = "0.9";
            }}
            priority
          />
        </div>

        {/* Trust Indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            color: "white",
            fontSize: "0.95rem",
            opacity: "0.7",
            marginTop: "2rem",
          }}
        >
          <span>🔒 Bank-Level Encryption</span>
          <span>⚡ Instant Analysis</span>
          <span>🏥 Medical-Grade AI</span>
        </div>
      </section>

      {/* How It Works - Simplified */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "4rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            marginBottom: "4rem",
            opacity: "0.95",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "320px",
                height: "420px",
                position: "relative",
                margin: "0 auto",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
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
          </div>

          <div>
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                color: "#0077B6",
                fontWeight: "700",
              }}
            >
              01
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Upload Any Medical Document
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Simply snap a photo or upload PDFs of lab results, prescriptions,
              or medical reports. Our AI instantly recognizes and processes any
              medical document format.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div style={{ order: 2, textAlign: "center" }}>
            <div
              style={{
                width: "320px",
                height: "420px",
                position: "relative",
                margin: "0 auto",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
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
          </div>

          <div style={{ order: 1 }}>
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                color: "#0077B6",
                fontWeight: "700",
              }}
            >
              02
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Get Instant Clarity
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Ask questions in plain English and receive clear, personalized
              explanations. Our AI remembers your context for deeper, more
              relevant insights with every question.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features - Minimalistic Grid */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "4rem 2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            marginBottom: "1rem",
            opacity: "0.95",
          }}
        >
          Everything You Need
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            color: "white",
            textAlign: "center",
            marginBottom: "4rem",
            opacity: "0.7",
            maxWidth: "600px",
            margin: "0 auto 4rem",
          }}
        >
          Powerful features designed for your peace of mind
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              🔍
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Instant Understanding
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Transform medical jargon into clear language. Get explanations
              tailored to your level of understanding.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              💬
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Ask Anything
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Dive deeper with unlimited follow-up questions. Get personalized
              insights about your specific health situation.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              🔒
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Complete Privacy
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Your health data stays yours. Bank-level encryption and zero data
              sharing with third parties.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              🎯
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Research Mode
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Access cutting-edge medical research and evidence-based insights
              with citations from trusted sources.
            </p>
          </div>

          {/* Feature 5 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              📱
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Always Accessible
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Save conversations, organize documents, and access your health
              insights anytime, anywhere.
            </p>
          </div>

          {/* Feature 6 */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              🌐
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Multi-Language
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                opacity: "0.8",
                lineHeight: "1.6",
              }}
            >
              Get health insights in your preferred language for better
              understanding and accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            padding: "3rem",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              color: "white",
              fontStyle: "italic",
              marginBottom: "2rem",
              lineHeight: "1.6",
              opacity: "0.9",
            }}
          >
            "DocTalk transformed how I understand my health. What used to be
            confusing medical reports are now clear conversations about my
            wellbeing."
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "white",
              opacity: "0.7",
            }}
          >
            — Sarah M., DocTalk User
          </p>
        </div>
      </section>

      {/* Footer CTA Section - Maintained */}
      <footer
        style={{
          padding: "3rem",
          backgroundColor: "rgba(0, 31, 63, 0.5)",
          backdropFilter: "blur(10px)",
          borderRadius: "1.5rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          marginTop: "4rem",
          marginBottom: "4rem",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "white",
            }}
          >
            Try <span style={{ color: "#FF4444" }}>Doc</span>
            <span style={{ color: "#0077B6" }}>Talk</span> today.
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "2rem",
              color: "white",
              opacity: "0.8",
            }}
          >
            Understand your health one conversation at a time
          </p>
          <div
            style={{
              marginBottom: "2rem",
            }}
          >
            <Image
              src="/images/appStoreIcon.svg"
              alt="Download on App Store"
              width={200}
              height={60}
              style={{
                display: "block",
                margin: "0 auto",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              priority
            />
          </div>
          <p style={{ fontSize: "0.875rem", color: "white", opacity: "0.6" }}>
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
