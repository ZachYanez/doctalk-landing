"use client";

import { useEffect, useState } from "react";

export default function ResetPassword() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Get token from cookie
    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("resetToken="))
      ?.split("=")[1];

    if (cookieToken) {
      setToken(cookieToken);
      // Clear the cookie after getting the token
      document.cookie =
        "resetToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("Invalid or expired reset token");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
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

      if (!response.ok) {
        throw new Error("Failed to reset password");
      }

      setSuccess(true);
    } catch {
      setError("Failed to reset password. Please try again.");
    }
  };

  if (!token) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">
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

  if (success) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-6 text-2xl font-bold text-green-600">
            Password Reset Successful!
          </h1>
          <p className="text-gray-600">
            Your password has been successfully reset. You can now log in with
            your new password.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Reset Your Password
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
