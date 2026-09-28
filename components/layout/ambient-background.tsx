export function AmbientBackground() {
  return (
    <>
      <div
        aria-hidden
        className="peach-ambient-glow fixed inset-0 -z-10 h-full w-full pointer-events-none"
      />
      <div
        aria-hidden
        className="fixed -top-40 -left-20 -z-10 h-96 w-96 rounded-full bg-peach-100 opacity-50 blur-3xl pointer-events-none"
      />
    </>
  );
}
