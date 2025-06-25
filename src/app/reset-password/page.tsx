"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const [token, setToken] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get token from sessionStorage (set by our script in layout.tsx)
    const storedToken = sessionStorage.getItem("resetToken");
    if (storedToken) {
      setToken(storedToken);
      // Clear token from sessionStorage to prevent reuse
      sessionStorage.removeItem("resetToken");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://doctalk-backend-366f81fc2e1d.herokuapp.com/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        // Clear form
        setPassword("");
        setConfirmPassword("");
        // Clear token from storage
        sessionStorage.removeItem("resetToken");
      } else {
        // Handle specific error messages from API
        switch (response.status) {
          case 400:
            setError(data.message); // "Token and new password are required" or "Invalid or expired reset token"
            break;
          case 404:
            setError("User not found");
            break;
          case 500:
            setError("Error resetting password");
            break;
          default:
            setError(data.message || "Failed to reset password");
        }
      }
    } catch {
      setError("Network error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Invalid Reset Link
          </h1>
          <p className="text-gray-600">
            This password reset link is invalid or has expired. Please request a
            new password reset link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Reset Your Password
          </h1>
          <p className="mt-2 text-gray-600">
            Please enter your new password below
          </p>
        </div>

        {success ? (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-green-800 text-center">
              Password successfully reset! You can now log in with your new
              password.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  placeholder="Enter your new password"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={8}
                  placeholder="Confirm your new password"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 p-4 rounded-md">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Resetting Password..." : "Reset Password"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
