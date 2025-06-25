import { CheckCircle } from "lucide-react";

export default function VerifiedPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-24 h-24 text-green-500" strokeWidth={2} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Email Verified Successfully!
        </h1>
        <p className="text-gray-600 text-lg">
          You can now close this window and return to the app.
        </p>
      </div>
    </div>
  );
}
