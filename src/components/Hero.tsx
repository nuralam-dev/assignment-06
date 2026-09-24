import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#121318] p-8 md:p-12 lg:p-16 border border-[#21232b]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#A3E635]">
              Workout Library
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link
              href="#library"
              className="mt-8 inline-flex items-center rounded-lg bg-[#CCFF00] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#b8e600] active:scale-95"
            >
              Browse Workouts
            </Link>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square">
              <Image
                src="/banner.png"
                alt="Workout illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;