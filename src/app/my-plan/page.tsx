"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { FaCheck, FaXmark } from "react-icons/fa6";

import { useFitLog } from "@/context/FitLogContext";
import { useToast } from "@/context/ToastContext";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const searchParams = useSearchParams();

  const { plan, saved, removeFromPlan, removeFromSaved } =
    useFitLog();

  const { showToast } = useToast();

  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const activeTab =
    searchParams.get("tab") === "saved" ? "saved" : "plan";

  const currentWorkouts =
    activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    }
  );

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">

        <div>
          <h1 className="text-4xl font-black uppercase sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 text-white/50">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-[#111217] sm:grid-cols-3">

          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
            <p className="text-sm text-white/50">
              Exercises
            </p>

            <p className="mt-2 text-4xl font-black text-[var(--accent)]">
              {plan.length}
            </p>
          </div>

          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
            <p className="text-sm text-white/50">
              Minutes
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="p-6">
            <p className="text-sm text-white/50">
              Calories
            </p>

            <p className="mt-2 text-4xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex w-fit rounded-xl border border-white/10 bg-[#15171e] p-1">

            <Link
              href="/my-plan"
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === "plan"
                  ? "bg-[#222630] text-white shadow-sm"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Today's Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#222630] text-white shadow-sm"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Saved
            </Link>
          </div>

          
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-sm text-white/50"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as SortOption
                )
              }
              className="cursor-pointer rounded-xl border border-white/10 bg-[#15171e] px-4 py-2.5 text-sm text-white outline-none transition focus:border-[var(--accent)]"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        <div className="mt-7 space-y-4">

          {sortedWorkouts.length === 0 ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#111217] px-6 text-center">

              <h2 className="text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 max-w-md text-sm text-white/50">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-black uppercase text-black transition hover:opacity-80"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#111217] p-4 transition hover:border-white/20 sm:flex-row sm:items-center"
              >

                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <h2 className="text-xl font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-sm text-white/50">
                    {workout.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/60">

                    <span>
                      ◷ {workout.duration} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      ★ {workout.rating}
                    </span>

                  </div>
                </div>

             
                <div className="flex items-center gap-3 sm:shrink-0">

                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold uppercase transition hover:border-white/50"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => {
                        removeFromPlan(workout.id);
                        showToast("Workout marked as done");
                      }}
                      className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-xs font-bold uppercase text-black transition hover:opacity-80"
                    >
                      <FaCheck />
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      if (activeTab === "plan") {
                        removeFromPlan(workout.id);
                        showToast("Removed from plan");
                      } else {
                        removeFromSaved(workout.id);
                        showToast("Removed from saved");
                      }
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white/40 transition hover:text-red-400"
                    aria-label="Remove workout"
                  >
                    <FaXmark />
                  </button>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;