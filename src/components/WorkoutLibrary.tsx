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

    return b.rating - a.rating;
  });

  return (
    <div className="mt-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-400">
          Showing {sortedWorkouts.length} workouts
        </p>

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="text-sm font-bold uppercase text-gray-400"
          >
            Sort by
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as SortOption
              )
            }
            className="cursor-pointer rounded-lg border border-white/20 bg-[#111] px-4 py-2 text-sm font-bold text-white outline-none focus:border-[var(--accent)]"
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;