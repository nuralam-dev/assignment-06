import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:py-24">
        
        {/* Content */}
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Workout Library
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            A focused library of proven exercises with the details you need
            to train smarter, track your progress, and stay consistent.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-black uppercase tracking-wide text-black hover:scale-105"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/banner.png"
            alt="Person doing a workout"
            width={400}
            height={400}
            className="h-[300px] w-full object-cover lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;