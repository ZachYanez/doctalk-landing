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
        <strong>Effective Date:</strong> June 26, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
      <p className="mb-4">
        Welcome to DocTalk (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        We are committed to protecting your privacy and handling your personal
        information with transparency and care. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you use
        our mobile application, DocTalk (the &quot;App&quot;).
      </p>
      <p className="mb-4">
        By using the App, you agree to the collection and use of information in
        accordance with this policy. If you do not agree with the terms of this
        policy, please do not access or use the App.
      </p>
      <p className="mb-4 font-semibold italic">
        Please Note: DocTalk provides AI-powered information and analysis based
        on the documents and questions you provide. It is not a substitute for
        professional medical advice, diagnosis, or treatment. Always seek the
        advice of your physician or other qualified health provider with any
        questions you may have regarding a medical condition. Use of the App
        does not establish a doctor-patient relationship. You are solely
        responsible for the information you choose to share with the App.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. Information We Collect
      </h2>
      <p className="mb-4">
        We collect information that you provide directly to us, information
        generated during your use of the App, and technical information about
        your device.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Account Information:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>User Identifier: A unique ID associated with your account</li>
        <li>
          Authentication Credentials: Information used for secure login to your
          account
        </li>
        <li>
          Subscription Status: Information about your current subscription plan
          and purchase history for validation purposes
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Health Information and Documents You Provide:
      </h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Chat Messages: Text queries, questions, and conversation content you
          type into the chat interface
        </li>
        <li>
          Uploaded Documents: Medical documents, images, lab results, or other
          files you choose to upload for analysis or discussion. This may
          contain sensitive Personal Health Information (PHI). We rely on you to
          only upload information you are comfortable sharing and have the right
          to share
        </li>
        <li>
          Document Content Analysis: Information extracted or inferred from your
          uploaded documents during the AI analysis process
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Conversation Data:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Chat History: Records of your conversations with the AI, including
          your messages and the AI&apos;s responses
        </li>
        <li>Citations: References provided by the AI in its responses</li>
        <li>
          Archived Conversations: Saved conversations including messages and
          associated document references
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Subscription and Purchase Information:
      </h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Product Identifiers: The specific subscription products you attempt to
          purchase or have purchased
        </li>
        <li>
          Transaction Receipts: Purchase validation information provided by your
          device&apos;s application store. We do not collect or store your
          credit card information or other sensitive payment details. Payment
          processing is handled entirely by the application store provider
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Query Counts: Tracking the number of messages sent to manage
          subscription limits
        </li>
        <li>
          Feature Usage: Information on how you interact with App features
        </li>
        <li>
          Interaction Data: Logs related to successful or failed operations
          within the App
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Technical Information:
      </h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Device Information: Basic device and operating system information
        </li>
        <li>App Version: The version of the DocTalk App you are using</li>
        <li>
          Network Information: Basic connection information for security and
          operational purposes
        </li>
        <li>
          Crash Reports & Diagnostics: Information related to app performance
          issues to help us identify and fix bugs
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. How We Use Your Information
      </h2>
      <p className="mb-4">We use your information solely to:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Provide and maintain the App&apos;s functionality</li>
        <li>Process your subscription and validate purchases</li>
        <li>Improve our AI responses and App performance</li>
        <li>Provide customer support</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

      <p className="mb-4 font-semibold">We do NOT:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Sell your personal information to third parties</li>
        <li>Share your health information with advertisers</li>
        <li>Use your data for marketing purposes without your consent</li>
        <li>
          Access your information for any purpose other than providing the
          service
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        4. Data Sharing and Disclosure
      </h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information
        to third parties except in the following limited circumstances:
      </p>

      <p className="mb-2 font-semibold">Service Providers:</p>
      <p className="mb-4">
        We may share information with trusted third-party service providers who
        assist us in operating the App, conducting our business, or serving you.
        These parties are contractually obligated to keep your information
        confidential and secure.
      </p>

      <p className="mb-2 font-semibold">AI Processing:</p>
      <p className="mb-4">
        Your queries and documents may be processed by AI services to provide
        you with responses and analysis. We implement strict security measures
        to protect your information during this processing.
      </p>

      <p className="mb-2 font-semibold">Legal Requirements:</p>
      <p className="mb-4">
        We may disclose your information if required by law, court order, or
        government regulation, or if we believe disclosure is necessary to
        protect our rights, your safety, or the safety of others.
      </p>

      <p className="mb-2 font-semibold">Business Transfers:</p>
      <p className="mb-4">
        In the event of a merger, acquisition, or sale of assets, your
        information may be transferred as part of that transaction, subject to
        the same privacy protections.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Data Storage and Security
      </h2>
      <p className="mb-4">
        At DocTalk, we implement comprehensive security measures designed to
        protect your sensitive information:
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Data Protection:</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Advanced Encryption: Your sensitive data, including messages and
          documents, is encrypted both during transmission and when stored
        </li>
        <li>
          Secure Infrastructure: We utilize enterprise-grade cloud providers
          with extensive security certifications
        </li>
        <li>
          Access Controls: System access is strictly limited based on job
          function and necessity
        </li>
        <li>
          Regular Security Updates: Our systems are kept up-to-date with the
          latest security measures
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Monitoring and Response:
      </h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Continuous Monitoring: Our systems are monitored for suspicious
          activity or potential security threats
        </li>
        <li>
          Incident Response: We maintain procedures for responding to potential
          security incidents
        </li>
        <li>
          Regular Security Assessments: We conduct periodic security reviews of
          our systems
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Data Compartmentalization:
      </h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Isolated Storage: Your data is stored with compartmentalized security
          controls
        </li>
        <li>
          Automated Backup Systems: Critical data is regularly backed up with
          encryption
        </li>
        <li>
          Retention Controls: Automated systems enforce data retention policies
        </li>
      </ul>

      <p className="mb-4 font-semibold italic">
        Important Note About AI Processing: Our AI services are designed with
        privacy in mind. While some AI models may process your medical
        information to provide analysis, we implement strict security measures
        and data handling protocols to protect any information processed by
        these models.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Data Retention</h2>
      <p className="mb-4">
        We retain your personal information only for as long as necessary to
        fulfill the purposes outlined in this Privacy Policy:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Account Information: Retained while your account is active</li>
        <li>
          Conversation Data & Documents: Retained until you delete them or
          request account deletion
        </li>
        <li>
          Subscription Data: Retained as necessary to manage your subscription
          and for validation purposes
        </li>
        <li>
          Security Logs: Retained for security and operational purposes
          according to our data management practices
        </li>
      </ul>
      <p className="mb-4">
        Upon account deletion request, we will delete your personal information,
        subject to any legal requirements to retain certain data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        7. Your Rights and Choices
      </h2>
      <p className="mb-4">
        You have significant control over your information:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          Access: You can access the personal information we hold about you
        </li>
        <li>
          Deletion: You can delete individual conversations or request complete
          account deletion
        </li>
        <li>
          Document Control: You control which documents you upload and can
          remove them at any time
        </li>
        <li>
          Permission Management: You can manage App permissions through your
          device settings
        </li>
        <li>
          Subscription Management: You can manage subscriptions through your
          application store account
        </li>
      </ul>
      <p className="mb-4">
        To exercise these rights or for questions about your data, contact us at
        doctalk@zymgmtco.com.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        8. Children&apos;s Privacy
      </h2>
      <p className="mb-4">
        The App is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children under this age.
        If we become aware that we have collected information from a child
        without parental consent, we will take steps to remove that information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        9. International Data Transfers
      </h2>
      <p className="mb-4">
        Your information may be transferred to and maintained on servers located
        outside of your jurisdiction where data protection laws may differ. Our
        primary servers are located in the United States. By using the App, you
        consent to this transfer.
      </p>
      <p className="mb-4">
        We implement appropriate safeguards for international data transfers:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Encryption during transfer</li>
        <li>Contractual protections with service providers</li>
        <li>Compliance with applicable data protection standards</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        10. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you
        of changes by posting the updated policy within the App and updating the
        &quot;Effective Date.&quot; Your continued use of the App after changes
        are posted constitutes your acceptance of the updated policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">11. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at:
      </p>
      <p className="mb-2 font-semibold">ZY MGMT Co</p>
      <p className="mb-4">
        <a
          href="mailto:doctalk@zymgmtco.com"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          doctalk@zymgmtco.com
        </a>
      </p>
    </div>
  );
}
