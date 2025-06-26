"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VerifiedPage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl p-8 text-center">
        <div className="inline-block">
          <Image
            src="/images/doctor.png"
            alt="DocTalk Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 mx-auto">
          <span className="text-[#FF4444]">Doc</span>
          <span className="text-[#0077B6]">Talk</span>
        </h1>
        <div className="flex justify-center my-6">
          <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Email Verified Successfully!
        </h2>
        <p className="text-white text-lg mb-8">
          Your email has been verified. You can now close this window and return
          to the app.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-[#0077B6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0066A2] transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
