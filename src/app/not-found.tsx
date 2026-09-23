import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        {/* 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            404
          </h1>

          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Page Not Found</h2>

          <p className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page may
            have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go Back
          </Link>
        </div>

        {/* Bottom suggestion */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Search size={16} />
          <span>Check the URL and try again.</span>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
