"use client";

// import Link from "next/link"; // Removed unused import
import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    // This effect can be removed if not needed, but kept for potential future use
    document.body.style.backgroundColor = "#11182A"; // Ensure body background matches
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);

  return (
    <div
      className="container mx-auto py-12 text-white"
      style={{
        backgroundColor: "#11182A",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <h1 className="text-3xl font-bold mb-6">DocTalk Privacy Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> July 6, 2025
      </p>

      <p className="mb-4">
        Welcome to DocTalk! We care deeply about your privacy and are committed
        to keeping your personal health information safe. This policy explains
        what we collect, how we use it, and your choices.
      </p>

      <p className="mb-4">We want to be clear:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          We <strong>never sell</strong> your personal data.
        </li>
        <li>
          We <strong>don't look at</strong> your messages or uploaded documents.
        </li>
        <li>
          We only store <strong>what's necessary</strong> to provide the
          service.
        </li>
        <li>
          The only personal detail we know about you is your{" "}
          <strong>email address</strong>.
        </li>
      </ul>

      <p className="mb-4">
        DocTalk is an AI-powered tool designed to help you better understand
        your health through your questions and documents. It is{" "}
        <strong>not a substitute</strong> for medical advice from a licensed
        professional. Always consult your doctor for medical care.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">What We Collect</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Email Address</strong>: Used to create your account and manage
          subscriptions.
        </li>
        <li>
          <strong>Messages and Uploads</strong>: You control what you share.
          These are encrypted and private.
        </li>
        <li>
          <strong>Subscription Info</strong>: We track which plan you're on and
          any purchases made.
        </li>
        <li>
          <strong>App Usage</strong>: We may collect data like how often you use
          certain features to improve the app.
        </li>
        <li>
          <strong>Device Info</strong>: Basic technical details (like app
          version or crash logs) help us keep things running properly.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Deliver and improve the DocTalk experience</li>
        <li>Help with subscription access and billing</li>
        <li>Respond to support requests or feedback</li>
        <li>Keep the app safe and reliable</li>
      </ul>

      <p className="mb-4">
        We <strong>do not</strong>:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Share your personal or health data with advertisers</li>
        <li>Use your content for marketing</li>
        <li>
          View or access your documents or chats unless you ask us to as part of
          a support request
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        When We Share Information
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Trusted Partners</strong>: We work with secure, vetted
          technology providers who help us run the app. They're not allowed to
          use your data for anything else.
        </li>
        <li>
          <strong>Legal Reasons</strong>: If required by law, we may need to
          share data.
        </li>
        <li>
          <strong>Business Changes</strong>: If we're ever part of a merger or
          acquisition, we'll make sure your privacy continues to be protected.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        How We Protect Your Data
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Messages and documents are <strong>encrypted</strong> before being
          stored.
        </li>
        <li>We don't store your name in plain text.</li>
        <li>Photo uploads are stripped of location info.</li>
        <li>
          We <strong>don't monitor</strong> or access your conversations.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        How Long We Keep Your Info
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>You can delete your conversations or documents anytime.</li>
        <li>
          If you delete your account, we delete your data too (except what we
          may need for legal or billing reasons).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Your Choices</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Access</strong>: View your chat history or documents
        </li>
        <li>
          <strong>Delete</strong>: Remove individual items or your whole account
        </li>
        <li>
          <strong>Upload</strong>: You choose what files or info to share
        </li>
        <li>
          <strong>Manage Subscription</strong>: Through the App Store or Google
          Play
        </li>
      </ul>

      <p className="mb-4">
        Have questions? Email us anytime at{" "}
        <strong>
          <a href="mailto:doctalk@zymgmtco.com">doctalk@zymgmtco.com</a>
        </strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">For Parents</h2>
      <p className="mb-4">
        DocTalk is not designed for children under 13. If we learn we've
        collected data from a child without consent, we'll delete it right away.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">International Use</h2>
      <p className="mb-4">
        We're based in the U.S. If you're using the app from outside the U.S.,
        your data may be stored here. We take appropriate steps to protect it no
        matter where you are.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Updates</h2>
      <p className="mb-4">
        We may update this policy if needed. We'll always let you know in the
        app. Continued use means you agree to any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
      <p className="mb-4">
        <strong>ZY MGMT Co</strong>
        <br />
        📧{" "}
        <strong>
          <a href="mailto:doctalk@zymgmtco.com">doctalk@zymgmtco.com</a>
        </strong>
      </p>
    </div>
  );
}
