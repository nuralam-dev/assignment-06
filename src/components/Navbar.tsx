"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="border-b border-white/10 bg-[#0a0a0c]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo */}
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

        {/* Navigation */}
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
              pathname === "/my-plan"
                ? "text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Action Counters */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="rounded-lg bg-[#CCFF00] px-4 py-2 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-95"
          >
            Plan <span className="ml-1 rounded bg-black/20 px-1.5 py-0.5 text-[10px]">{plan.length}</span>
          </Link>

          <Link
            href="/saved"
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
          >
            Saved <span className="ml-1 rounded bg-white/20 px-1.5 py-0.5 text-[10px]">{saved.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;