"use client";

import { useState } from "react";

import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

type SortOption = "duration" | "calories" | "rating";

const WorkoutLibrary = ({
  workouts,
}: {
  workouts: Workout[];
}) => {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.rating - b.rating;
  });

  return (
    <>
      {/* Sort */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          {sortedWorkouts.length} workouts
        </p>

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value as SortOption)
          }
          className="rounded-full border border-white/20 bg-black px-4 py-2 text-sm font-bold text-white outline-none focus:border-[var(--accent)]"
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

      {/* Workout Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </>
  );
};

export default WorkoutLibrary;