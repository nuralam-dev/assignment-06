import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-20 md:px-6"
      >
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          Workout Library
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase">
          The Library
        </h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        <WorkoutLibrary workouts={workouts} />
      </section>
    </main>
  );
}