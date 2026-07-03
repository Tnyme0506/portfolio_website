export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-950">
      {/* Animated aurora blobs */}
      <div className="absolute -top-48 left-1/2 h-[600px] w-[900px] -translate-x-1/2 animate-aurora-one rounded-full bg-accent/20 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] animate-aurora-two rounded-full bg-iris/20 blur-[130px]" />
      <div className="absolute bottom-0 -left-32 h-[500px] w-[600px] animate-aurora-three rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)',
        }}
      />

      {/* Top vignette / fade to base for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-950/40 via-transparent to-base-950" />
    </div>
  );
}
