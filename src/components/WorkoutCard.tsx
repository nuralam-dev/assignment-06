import type { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  console.log("IMAGE:", workout.image);
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-gray-400"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold uppercase tracking-tight">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="text-sm text-gray-400">{workout.equipment}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-4">
          <div>
            <p className="text-xs uppercase text-gray-500">Duration</p>
            <p className="mt-1 text-sm font-bold">{workout.duration} min</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">Calories</p>
            <p className="mt-1 text-sm font-bold">{workout.caloriesBurned}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">Rating</p>
            <p className="mt-1 text-sm font-bold">★ {workout.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
