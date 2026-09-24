import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-10 md:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/#library"
          className="mb-8 inline-block text-sm font-bold uppercase text-gray-400 hover:text-[var(--accent)]"
        >
          ← Back to library
        </Link>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-[550px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold uppercase text-gray-400"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-5 leading-7 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Equipment
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.equipment}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Difficulty
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Sets
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Reps
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Duration
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Calories
                </p>

                <p className="mt-2 text-sm font-bold">
                  {workout.caloriesBurned}
                </p>
              </div>

            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="text-[var(--accent)]">
                ★
              </span>

              <span className="font-bold">
                {workout.rating}
              </span>

              <span className="text-sm text-gray-500">
                Rating
              </span>
            </div>

            
            <WorkoutActions workout={workout} />
          </div>
        </div>

        <section className="mt-20 border-t border-[var(--border)] pt-12">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            How to perform
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">
            Instructions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {workout.instructions.map(
              (instruction, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <span className="text-sm font-black text-[var(--accent)]">
                    0{index + 1}
                  </span>

                  <p className="mt-3 leading-7 text-gray-400">
                    {instruction}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}