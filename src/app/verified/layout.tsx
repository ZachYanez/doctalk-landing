export const metadata = {
  title: "Email Verified - DocTalk",
  description: "Email verification success page for DocTalk",
};

export default function VerifiedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
