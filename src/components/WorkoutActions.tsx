"use client";

import { useFitLog } from "@/context/FitLogContext";
import { useToast } from "@/context/ToastContext";
import type { Workout } from "@/types/workout";

const WorkoutActions = ({ workout }: { workout: Workout }) => {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
    removeFromSaved,
  } = useFitLog();

  const { showToast } = useToast();

  const isInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const isSaved = saved.some(
    (item) => item.id === workout.id
  );

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Plan */}
      <button
        type="button"
        onClick={() => {
          addToPlan(workout);
          showToast("Added to today's plan");
        }}
        disabled={isInPlan || plan.length >= 5}
        className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-black uppercase text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isInPlan
          ? "Already in today's plan"
          : plan.length >= 5
            ? "Plan is full"
            : "Add to today's plan"}
      </button>

      {/* Saved */}
      <button
        type="button"
        onClick={() => {
          if (isSaved) {
            removeFromSaved(workout.id);
            showToast("Removed from saved");
          } else {
            saveWorkout(workout);
            showToast("Saved for later");
          }
        }}
        className="rounded-full border border-white/30 px-6 py-3 text-sm font-black uppercase text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {isSaved ? "Remove from saved" : "Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;