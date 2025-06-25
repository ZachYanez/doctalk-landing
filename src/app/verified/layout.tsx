export const metadata = {
  title: "Email Verified - DocTalk",
  description: "Email verification success page for DocTalk",
};

export default function VerifiedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white">{children}</div>;
}
