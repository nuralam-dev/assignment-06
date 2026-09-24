const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0c] text-white">
      <div className="flex flex-col items-center">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[var(--accent)]" />

        <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-white/50">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;