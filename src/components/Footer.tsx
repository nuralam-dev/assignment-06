import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0c]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <Link
          href="/"
          className="text-xl font-black tracking-wider text-white"
        >
          FIT<span className="text-[var(--accent)]">LOG</span>
        </Link>

        <p className="text-sm text-white/40">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;