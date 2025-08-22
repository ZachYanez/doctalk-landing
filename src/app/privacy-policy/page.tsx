"use client";

export default function PrivacyPolicyPage() {
  return (
    <div
      className="container mx-auto text-white"
      style={{
        background:
          "linear-gradient(to bottom, black, #11182A, #03045e, #0077B6)",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "6rem 2rem 4rem 2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1 className="text-4xl font-bold mb-6" style={{ textAlign: "center" }}>
          DocTalk Privacy Policy
        </h1>
        <p className="mb-8" style={{ textAlign: "center", opacity: 0.9 }}>
          <strong>Effective date:</strong> August 14, 2025
        </p>
        <p className="mb-4">
          <strong>Operator / Data Controller:</strong>{" "}
          <strong>ZY MGMT Co</strong> ("DocTalk," "we," "us," "our")
          <br />
          <strong>Contact:</strong>{" "}
          <a className="underline" href="mailto:doctalk@zymgmtco.com">
            doctalk@zymgmtco.com
          </a>
        </p>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, disclose, and
          protect information when you use the DocTalk iOS mobile application
          and related services (the "Service"). By using the Service, you agree
          to this Policy.
        </p>
        <p className="mb-4">
          DocTalk is an AI-powered tool that helps you understand your health
          through questions and documents. It is <strong>not</strong> a
          substitute for professional medical advice or care.
        </p>

        <hr className="my-6 border-gray-700" />

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          1) Information we collect
        </h2>
        <p className="mb-4">
          We collect the minimum information necessary to operate the Service.
        </p>

        <p className="mb-2 font-semibold">Account Information</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Required:</strong> email address and password hash.
          </li>
          <li>
            <strong>Optional:</strong> display name (if you add it).
          </li>
          <li>
            <strong>Subscriptions:</strong> status and purchase/receipt metadata
            from the
            <strong> Apple App Store</strong> and our subscription partner (we
            do
            <strong> not</strong> receive your full card details).
          </li>
        </ul>

        <p className="mb-2 font-semibold">Content You Provide</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            Chats, messages, uploaded files (images, PDFs), and support
            requests.
          </li>
          <li>
            You choose what to upload. Health-related content is optional and
            processed only to deliver the Service you request.
          </li>
        </ul>

        <p className="mb-2 font-semibold">Device &amp; Usage Data</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            App version, device model/OS, language, time zone, diagnostics,
            crash logs, and interaction events to keep the app reliable.
          </li>
        </ul>

        <p className="mb-2 font-semibold">Permissions-Based Data</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            Camera, photo library, and file access only when you use features
            that require them.
          </li>
        </ul>

        <p className="mb-2 font-semibold">On-Device Storage</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            Mobile secure storage (e.g., Keychain) for sessions and preferences.
          </li>
          <li>
            We do not use third-party tracking cookies or cross-app tracking.
          </li>
        </ul>

        <p className="mb-2 font-semibold">Data we don’t require</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>We do not require your legal name or precise location.</li>
        </ul>

        <hr className="my-6 border-gray-700" />

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          2) How we use information
        </h2>
        <p className="mb-4">
          We use your information solely to provide and improve DocTalk.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Operate the Service:</strong> chat, document analysis,
            authentication, subscription management.
          </li>
          <li>
            <strong>Process your content at your request:</strong> display it
            back to you and generate AI outputs.
          </li>
          <li>
            <strong>Security &amp; integrity:</strong> prevent fraud/abuse,
            protect accounts, debug, and ensure reliability.
          </li>
          <li>
            <strong>Communications:</strong> service notices and support
            replies.
          </li>
          <li>
            <strong>Product improvement:</strong> de-identified or aggregated
            analytics to improve quality and performance.
          </li>
        </ul>
        <p className="mb-4">
          <strong>
            We do not use your documents or chats to train publicly available
            third-party foundation models.
          </strong>
          <br />
          <strong>
            AI processing is configured for transient use only (see Section
            3(A)).
          </strong>
        </p>

        <hr className="my-6 border-gray-700" />

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          3) Sharing &amp; disclosure
        </h2>
        <p className="mb-4">
          We do not sell your personal information and we do not share your
          personal or health data with advertisers.
        </p>

        <p className="mb-2 font-semibold">
          (A) AI processing (the only third party we disclose PII to): Secure AI
          Infrastructure
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            We send your submitted content (and, only as needed for
            routing/accounting, your email) to our secure AI infrastructure to
            generate the responses you request.
          </li>
          <li>
            <strong>Zero Data Sharing:</strong> We do not share your data with
            any third parties for training, advertising, or commercial purposes.
            Your information is processed solely to provide you with the service
            you requested.
          </li>
          <li>
            <strong>Zero Data Retention (ZDR):</strong> We configure our AI
            processing for zero data retention— we do not opt in to any data use
            for model training or product improvement, and we disable data
            caching and prompt logging where applicable. Your data is not
            retained after processing.
          </li>
          <li>
            <strong>Encryption at Rest:</strong> All your data is encrypted when
            stored, ensuring maximum security and privacy protection.
          </li>
          <li>
            <strong>Result:</strong> Your prompts/outputs are used only for
            transient processing to fulfill your request; they are not retained
            or used for any other purpose under our strict configuration.
          </li>
        </ul>

        <p className="mb-2 font-semibold">
          (B) App Store &amp; subscription partner (no PII disclosed by us
          beyond what’s required):
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            The Apple App Store and our subscription partner receive device
            identifiers and purchase receipts directly from your device to
            validate your subscription. We do not disclose your chat content to
            them, and we do not receive your full payment details.
          </li>
        </ul>

        <p className="mb-2 font-semibold">
          (C) Service providers under our instructions:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            Hosting/storage, telemetry/analytics, error reporting, and customer
            support tools may process pseudonymous or aggregated diagnostics to
            keep the Service reliable. They are contractually prohibited from
            using your data for their own purposes.
          </li>
        </ul>

        <p className="mb-2 font-semibold">(D) Legal/compliance:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            When required by law or necessary to protect rights, safety, and the
            integrity of the Service.
          </li>
        </ul>

        <p className="mb-2 font-semibold">(E) Business transfers:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            If we are involved in a merger, acquisition, or asset sale, we will
            ensure equivalent protections or notify you and honor your choices.
          </li>
        </ul>

        <hr className="my-6 border-gray-700" />

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          4) Subscriptions &amp; payments (iOS)
        </h2>
        <p className="mb-4">
          Purchases are handled via the Apple App Store and a subscription
          partner. They receive only the identifiers and receipts needed to
          provide your subscription. We do not receive full payment card
          details.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5) Security</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Encryption in transit and at rest</strong> for messages and
            documents.
          </li>
          <li>
            Access controls, least-privilege permissions, and audit logging.
          </li>
        </ul>
        <p className="mb-4">
          No system is 100% secure, but we continuously work to protect your
          information and limit access to what is strictly necessary.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          6) Data retention &amp; deletion
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            We retain information only as long as necessary to operate the
            Service, comply with law, resolve disputes, and enforce agreements.
          </li>
          <li>
            <strong>Self-serve account deletion:</strong> You can delete your
            account in the app at any time (e.g., Settings → Account → Delete
            Account). Deletion removes associated data from our active systems
            (including chats, uploads, and account identifiers), subject to
            limited retention needed for fraud prevention, security, or
            legal/billing recordkeeping.
          </li>
          <li>
            <strong>Item-level deletion:</strong> You can delete individual
            conversations and uploads anytime.
          </li>
          <li>
            <strong>Backups &amp; logs:</strong> Purged on a rolling schedule;
            deleted data disappears once the relevant backups expire.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          7) Your choices &amp; rights
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Access/Update/Delete:</strong> manage content in-app; delete
            your account in-app; or contact
            <a className="underline ml-1" href="mailto:doctalk@zymgmtco.com">
              doctalk@zymgmtco.com
            </a>{" "}
            for assistance.
          </li>
          <li>
            <strong>Permissions:</strong> revoke camera/photo/file access in
            device settings.
          </li>
          <li>
            <strong>Communications:</strong> opt out of non-essential emails via
            unsubscribe.
          </li>
        </ul>
        <p className="mb-4">
          <strong>
            Regional rights (where applicable, e.g., GDPR/UK GDPR, CCPA/CPRA):
          </strong>{" "}
          You may have rights to access, correct, delete, port, or restrict
          processing, and to object to certain processing. We will honor valid
          requests under applicable law. We do not sell or “share” personal
          information as defined by the CPRA and do not engage in cross-context
          behavioral advertising.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          8) International data transfers
        </h2>
        <p className="mb-4">
          We operate in the United States and may transfer information to the
          U.S. and other countries where our secure processing infrastructure
          operates. Where required, we rely on appropriate safeguards for
          cross-border transfers, including encryption at rest and in transit.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          9) Children’s privacy
        </h2>
        <p className="mb-4">
          The Service is not directed to children under 13 (or the age required
          by local law). We do not knowingly collect personal information from
          children. If we learn that a child has used the Service, we will
          delete the information promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          10) Medical &amp; legal disclaimers
        </h2>
        <p className="mb-4">
          DocTalk provides informational outputs only and is not a medical
          device. It does not diagnose, treat, or prescribe. Always seek the
          advice of a qualified health professional.
        </p>
        <p className="mb-4">
          If any content references health law, insurance coverage, appeals,
          complaints, or patient rights, it is general information, not legal
          advice, and does not create an attorney–client relationship.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          11) Automated decision-making
        </h2>
        <p className="mb-4">
          DocTalk does not make automated decisions that have legal or similarly
          significant effects on you without meaningful human involvement.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          12) Additional notices
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>HIPAA:</strong> DocTalk is not a healthcare provider or a
            HIPAA “covered entity.” HIPAA may not apply to your use of the
            Service, but we still protect your information as described in this
            Policy.
          </li>
          <li>
            <strong>Do Not Track:</strong> The Service does not respond to “Do
            Not Track” signals (primarily a web browser feature), and we do not
            conduct cross-app tracking.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">
          13) Changes to this Policy
        </h2>
        <p className="mb-4">
          We may update this Policy from time to time. If we make material
          changes, we will notify you in-app (or by email, where appropriate).
          Your continued use after changes take effect constitutes acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">14) Contact us</h2>
        <p className="mb-1 font-semibold">ZY MGMT Co</p>
        <p className="mb-4">
          <strong>Email:</strong>{" "}
          <a className="underline" href="mailto:doctalk@zymgmtco.com">
            doctalk@zymgmtco.com
          </a>
        </p>
      </section>
    </div>
  );
}
