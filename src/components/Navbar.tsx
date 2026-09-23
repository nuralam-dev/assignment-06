"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          FIT<span className="text-[var(--accent)]">LOG</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-wide ${
              pathname === "/"
                ? "text-[var(--accent)]"
                : "text-white hover:text-[var(--accent)]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold uppercase tracking-wide ${
              pathname === "/my-plan"
                ? "text-[var(--accent)]"
                : "text-white hover:text-[var(--accent)]"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase text-black"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-bold uppercase text-white"
          >
           Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;