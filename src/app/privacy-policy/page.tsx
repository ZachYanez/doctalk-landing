"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    // Force background color on all elements
    document.body.style.backgroundColor = "#11182A";
    document.documentElement.style.backgroundColor = "#11182A";
    document.body.style.color = "white";

    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#11182A",
        color: "white",
        minHeight: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 20px",
          backgroundColor: "#11182A",
        }}
      >
        <Link
          href="/"
          style={{
            color: "white",
            marginBottom: "30px",
            display: "inline-block",
            fontSize: "18px",
          }}
        >
          &larr; Back to Home
        </Link>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "40px 0",
            color: "white",
          }}
        >
          Privacy Policy
        </h1>

        <div style={{ backgroundColor: "#11182A", color: "white" }}>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              marginBottom: "24px",
              color: "white",
            }}
          >
            We collect and process medical documents and information that you
            voluntarily provide through our app. This includes:
          </p>

          <ul style={{ marginBottom: "32px", paddingLeft: "24px" }}>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              Medical documents and images you upload
            </li>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              Chat conversations with our AI assistant
            </li>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              Account information (name, email)
            </li>
          </ul>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              margin: "40px 0 20px",
              color: "white",
            }}
          >
            How We Use Your Information
          </h2>

          <ul style={{ marginBottom: "32px", paddingLeft: "24px" }}>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              To provide AI-powered analysis of your medical documents
            </li>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              To maintain and improve our services
            </li>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              To communicate with you about your account
            </li>
            <li
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "8px",
                color: "white",
              }}
            >
              To ensure the security of our services
            </li>
          </ul>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              margin: "40px 0 20px",
              color: "white",
            }}
          >
            Data Security
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              marginBottom: "24px",
              color: "white",
            }}
          >
            We implement industry-standard security measures to protect your
            sensitive medical information. All data is encrypted in transit and
            at rest.
          </p>

          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              margin: "40px 0 20px",
              color: "white",
            }}
          >
            Data Retention
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              marginBottom: "24px",
              color: "white",
            }}
          >
            We retain your information only for as long as necessary to provide
            our services and comply with legal obligations.
          </p>
        </div>

        <div
          style={{
            marginTop: "60px",
            paddingTop: "20px",
            borderTop: "1px solid #2563EB",
            backgroundColor: "#11182A",
          }}
        >
          <p style={{ fontSize: "18px", color: "white" }}>
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            backgroundColor: "#11182A",
          }}
        >
          <p style={{ fontSize: "18px", color: "white" }}>© ZY MGMT CO 2025</p>
        </div>
      </main>
    </div>
  );
}
