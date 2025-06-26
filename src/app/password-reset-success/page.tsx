"use client";

import Image from "next/image";
import Link from "next/link";

export default function PasswordResetSuccess() {
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
        padding: "1rem",
      }}
    >
      <div className="bg-white bg-opacity-10 rounded-xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/doctor.png"
            alt="DocTalk Logo"
            width={120}
            height={120}
            className="mb-6"
            priority
          />
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-[#FF4444]">Doc</span>
            <span className="text-[#0077B6]">Talk</span>
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Password Reset Successful!
          </h2>
          <p className="text-white text-lg mb-8">
            Your password has been successfully updated. You can now log in with
            your new password.
          </p>
          <Link
            href="/"
            className="bg-[#0077B6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0066A2] transition-all duration-200 transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
