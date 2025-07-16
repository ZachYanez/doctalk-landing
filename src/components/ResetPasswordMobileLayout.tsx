"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

interface ResetPasswordMobileLayoutProps {
  initialToken: string;
}

export default function ResetPasswordMobileLayout({
  initialToken,
}: ResetPasswordMobileLayoutProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token] = useState(initialToken);

  useEffect(() => {
    if (!token) {
      setError("Invalid reset link. Please request a new password reset.");
    }
  }, [token]);

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const errors = [];
    if (!hasMinLength) errors.push("at least 8 characters");
    if (!hasUpperCase) errors.push("one uppercase letter");
    if (!hasSpecialChar) errors.push("one special character");

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid reset link. Please request a new password reset.");
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password requirements
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(`Password must contain ${passwordErrors.join(", ")}`);
      return;
    }

    try {
      setIsLoading(true);
      console.log("Sending request with token:", token);

      const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        "https://doctalk-backend-366f81fc2e1d.herokuapp.com";
      if (!apiBaseUrl) {
        throw new Error("API base URL not configured");
      }

      const response = await fetch(`${apiBaseUrl}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const textResponse = await response.text();
        console.log("Non-JSON response:", textResponse);
        throw new Error("Invalid response from server");
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      // Redirect on success
      window.location.href = "/password-reset-success";
    } catch (err) {
      console.error("Reset password error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to reset password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="flex flex-col items-center">
          <Image
            src="/images/doctor.png"
            alt="DocTalk Logo"
            width={140}
            height={140}
            className="mb-6"
            priority
          />
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full h-14 text-base border-2 border-gray-300 rounded-xl px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password again"
                className="w-full h-14 text-base border-2 border-gray-300 rounded-xl px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full h-14 bg-blue-600 text-white text-lg rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
