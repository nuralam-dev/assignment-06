import type { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch(API_URL, { cache: "no-store" }); 

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

export const getWorkoutById = async (
  id: string
): Promise<Workout | null> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { cache: "no-store" });

    if (!response.ok) {
      return null; 
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching workout by ID:", error);
    return null;
  }
};