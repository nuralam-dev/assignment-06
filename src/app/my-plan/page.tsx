"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

import { useFitLog } from "@/context/FitLogContext";

const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const workouts = activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-black px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[var(--accent)]">
            YOUR WORKOUTS
          </p>

          <h1 className="text-4xl font-black uppercase sm:text-5xl">MY PLAN</h1>

          <p className="mt-3 max-w-xl text-white/60">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase text-white/50">Exercises</p>

            <p className="mt-2 text-3xl font-black">{plan.length}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase text-white/50">Minutes</p>

            <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase text-white/50">Calories</p>

            <p className="mt-2 text-3xl font-black">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-3 border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
              activeTab === "plan"
                ? "bg-[var(--accent)] text-black"
                : "border border-white/20 text-white"
            }`}
          >
            Today's Plan ({plan.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
              activeTab === "saved"
                ? "bg-[var(--accent)] text-black"
                : "border border-white/20 text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        {/* Empty State */}
        {workouts.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/5 text-center">
            <h2 className="text-2xl font-black uppercase">NOTHING HERE YET</h2>

            <p className="mt-3 max-w-md text-white/50">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-6 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-black uppercase text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout List */
          <div className="space-y-4">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center"
              >
                {/* Image */}
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-32 w-full rounded-xl object-cover sm:w-48"
                />

                {/* Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-1 text-sm text-white/50">
                    {workout.equipment}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:flex-col">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => removeFromPlan(workout.id)}
                      className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase text-black"
                    >
                      <FaCheck />
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(workout.id)
                        : removeFromSaved(workout.id)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-red-400 hover:text-red-400"
                    aria-label="Remove workout"
                  >
                    <FaXmark />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
