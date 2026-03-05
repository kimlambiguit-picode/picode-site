export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Radial grid that fades toward center */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(217 33% 15% / 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(217 33% 15% / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, black 100%)',
        }}
      />

      {/* Primary glow - top */}
      <div className="absolute -top-[30%] left-[20%] h-[60%] w-[40%] rotate-12">
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,hsl(221_83%_53%/0.12),transparent_60%)] blur-3xl" />
      </div>

      {/* Secondary glow - bottom right */}
      <div className="absolute -bottom-[20%] right-[10%] h-[50%] w-[35%] -rotate-12">
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,hsl(221_83%_53%/0.08),transparent_60%)] blur-3xl" />
      </div>

      {/* Accent glow - left side */}
      <div className="absolute top-[40%] -left-[10%] h-[40%] w-[25%]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,hsl(250_70%_50%/0.06),transparent_60%)] blur-3xl" />
      </div>

      {/* Cloud & AI abstract graphics */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Neural network pattern */}
          <pattern id="neural" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            {/* Nodes */}
            <circle cx="50" cy="50" r="4" fill="hsl(221 83% 53% / 0.15)" />
            <circle cx="150" cy="30" r="3" fill="hsl(221 83% 53% / 0.1)" />
            <circle cx="250" cy="80" r="5" fill="hsl(221 83% 53% / 0.12)" />
            <circle cx="100" cy="150" r="4" fill="hsl(221 83% 53% / 0.1)" />
            <circle cx="200" cy="170" r="3" fill="hsl(221 83% 53% / 0.15)" />
            <circle cx="280" cy="200" r="4" fill="hsl(221 83% 53% / 0.08)" />
            <circle cx="30" cy="220" r="3" fill="hsl(221 83% 53% / 0.1)" />
            <circle cx="180" cy="270" r="5" fill="hsl(221 83% 53% / 0.12)" />
            
            {/* Connections */}
            <line x1="50" y1="50" x2="150" y2="30" stroke="hsl(221 83% 53% / 0.06)" strokeWidth="1" />
            <line x1="150" y1="30" x2="250" y2="80" stroke="hsl(221 83% 53% / 0.05)" strokeWidth="1" />
            <line x1="50" y1="50" x2="100" y2="150" stroke="hsl(221 83% 53% / 0.06)" strokeWidth="1" />
            <line x1="100" y1="150" x2="200" y2="170" stroke="hsl(221 83% 53% / 0.05)" strokeWidth="1" />
            <line x1="250" y1="80" x2="200" y2="170" stroke="hsl(221 83% 53% / 0.04)" strokeWidth="1" />
            <line x1="200" y1="170" x2="280" y2="200" stroke="hsl(221 83% 53% / 0.05)" strokeWidth="1" />
            <line x1="100" y1="150" x2="30" y2="220" stroke="hsl(221 83% 53% / 0.04)" strokeWidth="1" />
            <line x1="200" y1="170" x2="180" y2="270" stroke="hsl(221 83% 53% / 0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural)" />
      </svg>

      {/* Abstract cloud shape - top right */}
      <svg className="absolute -top-20 -right-20 h-[500px] w-[600px] opacity-[0.04]" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M160 100 C160 70 140 50 110 50 C100 30 75 20 50 30 C25 40 15 70 25 95 C10 100 5 120 20 135 L170 135 C190 135 195 110 180 100 C175 95 165 95 160 100Z" 
          stroke="hsl(221 83% 60%)" 
          strokeWidth="1.5"
          fill="none"
        />
        {/* Cloud internal details */}
        <circle cx="70" cy="80" r="25" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
        <circle cx="110" cy="90" r="20" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="none" strokeDasharray="2 4" />
        <circle cx="140" cy="85" r="15" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="none" strokeDasharray="2 3" />
      </svg>

      {/* Abstract AI brain circuit - bottom left */}
      <svg className="absolute -bottom-16 -left-16 h-[450px] w-[450px] opacity-[0.035]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brain outline */}
        <ellipse cx="100" cy="100" rx="70" ry="75" stroke="hsl(221 83% 60%)" strokeWidth="1" fill="none" />
        <path d="M100 25 Q60 50 70 100 Q65 150 100 175" stroke="hsl(221 83% 60%)" strokeWidth="0.75" fill="none" />
        
        {/* Neural pathways */}
        <circle cx="60" cy="70" r="8" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="hsl(221 83% 60% / 0.1)" />
        <circle cx="85" cy="55" r="6" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="hsl(221 83% 60% / 0.1)" />
        <circle cx="120" cy="60" r="7" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="hsl(221 83% 60% / 0.1)" />
        <circle cx="140" cy="85" r="8" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="hsl(221 83% 60% / 0.1)" />
        <circle cx="130" cy="120" r="6" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="hsl(221 83% 60% / 0.1)" />
        <circle cx="75" cy="130" r="7" stroke="hsl(221 83% 60%)" strokeWidth="0.5" fill="hsl(221 83% 60% / 0.1)" />
        <circle cx="100" cy="100" r="10" stroke="hsl(221 83% 60%)" strokeWidth="0.75" fill="hsl(221 83% 60% / 0.15)" />
        
        {/* Connections */}
        <line x1="60" y1="70" x2="85" y2="55" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="85" y1="55" x2="120" y2="60" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="120" y1="60" x2="140" y2="85" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="140" y1="85" x2="130" y2="120" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="130" y1="120" x2="100" y2="100" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="100" y1="100" x2="75" y2="130" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="75" y1="130" x2="60" y2="70" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="85" y1="55" x2="100" y2="100" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
        <line x1="120" y1="60" x2="100" y2="100" stroke="hsl(221 83% 60%)" strokeWidth="0.5" />
      </svg>

      {/* Data stream particles - right side */}
      <svg className="absolute top-1/4 -right-10 h-[600px] w-[200px] opacity-[0.04]" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flowing data lines */}
        <path d="M80 0 Q50 50 70 100 Q90 150 60 200 Q30 250 50 300" stroke="hsl(221 83% 60%)" strokeWidth="1" fill="none" />
        <path d="M60 0 Q30 40 50 80 Q70 120 40 160 Q10 200 30 240 Q50 280 40 300" stroke="hsl(221 83% 60%)" strokeWidth="0.75" fill="none" strokeDasharray="4 6" />
        
        {/* Data nodes */}
        <circle cx="70" cy="50" r="4" fill="hsl(221 83% 60%)" />
        <circle cx="65" cy="100" r="3" fill="hsl(221 83% 60%)" />
        <circle cx="75" cy="150" r="4" fill="hsl(221 83% 60%)" />
        <circle cx="55" cy="200" r="3" fill="hsl(221 83% 60%)" />
        <circle cx="45" cy="250" r="4" fill="hsl(221 83% 60%)" />
        
        {/* Binary hint */}
        <text x="20" y="70" fill="hsl(221 83% 60%)" fontSize="6" fontFamily="monospace">01</text>
        <text x="40" y="130" fill="hsl(221 83% 60%)" fontSize="6" fontFamily="monospace">10</text>
        <text x="25" y="190" fill="hsl(221 83% 60%)" fontSize="6" fontFamily="monospace">11</text>
      </svg>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(222_47%_5%/0.5)_100%)]" />
    </div>
  );
}
