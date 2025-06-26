"use client";

import ResetPasswordDesktopLayout from "@/components/ResetPasswordDesktopLayout";
import ResetPasswordMobileLayout from "@/components/ResetPasswordMobileLayout";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useParams } from "next/navigation";

export default function ResetPassword() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const params = useParams();
  const token = params.token as string;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {isDesktop ? (
        <ResetPasswordDesktopLayout initialToken={token} />
      ) : (
        <ResetPasswordMobileLayout initialToken={token} />
      )}
    </div>
  );
}
