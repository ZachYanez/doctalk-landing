"use client";

import { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

// Could move this to an environment variable
const API_URL = "https://api.doctalkhealth.com";

interface VerificationResponse {
  success: boolean;
  message: string;
  userId?: string; // Optional: if you want to pass the user ID back to the app
}

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setUserId] = useState<string | null>(null);

  const verifyToken = useCallback(async () => {
    try {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("No verification token found in URL");
        return;
      }

      setStatus("loading");

      // Add timeout to handle network issues
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      try {
        const response = await fetch(
          `${API_URL}/api/auth/verify-email/${token}`,
          {
            method: "POST", // Ensure we're using POST
            headers: {
              "Content-Type": "application/json",
            },
            signal: controller.signal,
          }
        );

        clearTimeout(timeoutId);

        const data = (await response.json()) as VerificationResponse;

        if (!response.ok) {
          throw new Error(data.message || "Verification failed");
        }

        if (data.success) {
          setStatus("success");
          setMessage(data.message || "Email verified successfully!");
          if (data.userId) {
            setUserId(data.userId);
          }

          // Deep link back to app with userId if available
          // This allows the app to make a fresh API call to get the user's current status
          setTimeout(() => {
            const deepLinkUrl = data.userId
              ? `doctalk://verified?userId=${data.userId}`
              : "doctalk://verified";
            window.location.href = deepLinkUrl;
          }, 2000);
        } else {
          throw new Error(data.message || "Verification failed");
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          throw new Error("Verification request timed out. Please try again.");
        }
        throw error;
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to verify email. Please try again."
      );
    }
  }, [searchParams]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #11182A 40%, #03045e 70%, #0077B6 100%)",
      }}
    >
      <div className="text-center p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-6" style={{ color: "white" }}>
          <span style={{ color: "#FF4444" }}>Doc</span>
          <span style={{ color: "#0077B6" }}>Talk</span> Email Verification
        </h1>

        <div className="mt-8">
          {status === "loading" && (
            <div className="text-white">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-4"></div>
              <div className="text-xl">Verifying your email...</div>
            </div>
          )}

          {status === "success" && (
            <div className="text-green-400 text-xl">
              {message}
              <p className="mt-4 text-white text-base">
                Redirecting you back to the app...
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="text-red-400">
              <div className="text-xl mb-4">{message}</div>
              <button
                onClick={verifyToken}
                className="px-4 py-2 bg-[#0077B6] text-white rounded hover:bg-[#0066a1] transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
