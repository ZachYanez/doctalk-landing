"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

interface ResetPasswordDesktopLayoutProps {
  initialToken: string;
}

export default function ResetPasswordDesktopLayout({
  initialToken,
}: ResetPasswordDesktopLayoutProps) {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "3rem",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "1rem",
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
      }}
    >
      <Image
        src="/images/doctor.png"
        alt="Friendly doctor cartoon"
        width={100}
        height={100}
        style={{ marginBottom: "2rem" }}
        priority
      />
      <h1
        style={{
          fontSize: "2.5rem",
          fontFamily: "serif",
          color: "white",
          marginBottom: "1rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        <span style={{ color: "#FF4444" }}>Doc</span>
        <span style={{ color: "#0077B6" }}>Talk</span>
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          color: "white",
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "500",
          width: "100%",
        }}
      >
        Reset Password
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "white",
          marginBottom: "3rem",
          textAlign: "center",
          maxWidth: "450px",
          width: "100%",
        }}
      >
        Please check your email for a password reset link. Click the link to
        reset your password.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>
          <label
            style={{
              display: "block",
              color: "white",
              fontSize: "1.2rem",
              marginBottom: "0.75rem",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            style={{
              width: "100%",
              padding: "1rem 1.25rem",
              fontSize: "1.1rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.5rem",
              color: "white",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            required
            minLength={8}
          />
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.9rem",
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "left",
            }}
          >
            Password must contain:
            <ul
              style={{
                listStyle: "none",
                padding: "0.5rem 0 0 0",
                margin: 0,
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.25rem",
                }}
              >
                <span
                  style={{
                    color:
                      password.length >= 8
                        ? "#4CAF50"
                        : "rgba(255, 255, 255, 0.7)",
                    marginRight: "0.5rem",
                  }}
                >
                  {password.length >= 8 ? "✓" : "•"}
                </span>
                At least 8 characters
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.25rem",
                }}
              >
                <span
                  style={{
                    color: /[A-Z]/.test(password)
                      ? "#4CAF50"
                      : "rgba(255, 255, 255, 0.7)",
                    marginRight: "0.5rem",
                  }}
                >
                  {/[A-Z]/.test(password) ? "✓" : "•"}
                </span>
                One uppercase letter
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: /[!@#$%^&*(),.?":{}|<>]/.test(password)
                      ? "#4CAF50"
                      : "rgba(255, 255, 255, 0.7)",
                    marginRight: "0.5rem",
                  }}
                >
                  {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "✓" : "•"}
                </span>
                One special character
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{ width: "100%", marginTop: "1.5rem", textAlign: "center" }}
        >
          <label
            style={{
              display: "block",
              color: "white",
              fontSize: "1.2rem",
              marginBottom: "0.75rem",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
            style={{
              width: "100%",
              padding: "1rem 1.25rem",
              fontSize: "1.1rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.5rem",
              color: "white",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            required
            minLength={8}
          />
        </div>
        {error && (
          <p
            style={{
              color: "#FF4444",
              fontSize: "1rem",
              textAlign: "center",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "white",
            backgroundColor: "#0077B6",
            border: "none",
            borderRadius: "0.5rem",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginTop: "2rem",
            opacity: isLoading ? 0.7 : 1,
          }}
          onMouseOver={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = "#0066A2";
              e.currentTarget.style.transform = "translateY(-2px)";
            }
          }}
          onMouseOut={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor = "#0077B6";
              e.currentTarget.style.transform = "translateY(0)";
            }
          }}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
