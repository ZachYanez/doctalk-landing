// Removed Geist imports as they should be in root layout

// Removed redundant html, head, body tags and associated styles
export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Simplified to just return children, possibly within a basic wrapper if needed
    // Background should be handled by root layout or page component
    <div>{children}</div>
  );
}
