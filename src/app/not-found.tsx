import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#0a0a0c] px-6 text-white">
      <div className="max-w-xl text-center">

        <p className="text-7xl font-black text-[var(--accent)] sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 text-3xl font-black uppercase sm:text-5xl">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-white/50">
          The workout or page you are looking for does not exist.
          Let&apos;s get you back to the workout library.
        </p>

        <Link
          href="/#library"
          className="mt-8 inline-block rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-black uppercase text-black transition hover:opacity-80"
        >
          Browse Workouts
        </Link>

      </div>
    </main>
  );
};

export default NotFound;