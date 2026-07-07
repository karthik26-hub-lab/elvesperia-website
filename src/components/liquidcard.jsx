export const LiquidCard = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] p-8 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] group">
      
      {/* macOS Top Edge Highlight (The Reflection) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.4] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] pointer-events-none"></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};