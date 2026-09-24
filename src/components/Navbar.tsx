"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { plan, saved } = useFitLog();

  const isSavedPage =
    pathname === "/my-plan" &&
    searchParams.get("tab") === "saved";

  const isPlanPage =
    pathname === "/my-plan" &&
    !isSavedPage;

  return (
    <header className="border-b border-white/10 bg-[#0a0a0c]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-black tracking-wider text-white"
        >
          <div className="relative h-8 w-8">
            <Image
              src="/logo.png"
              alt="FITLOG Logo"
              fill
              className="object-contain"
            />
          </div>

          <span>
            FIT<span className="text-[#CCFF00]">LOG</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              pathname === "/"
                ? "text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isPlanPage
                ? "text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-3">
   
          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs font-black uppercase transition ${
              isPlanPage
                ? "bg-[#CCFF00] text-black"
                : "bg-[#CCFF00] text-black hover:opacity-80"
            }`}
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan?tab=saved"
            className={`rounded-full border px-4 py-2 text-xs font-black uppercase transition ${
              isSavedPage
                ? "border-[#CCFF00] text-[#CCFF00]"
                : "border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00]"
            }`}
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;