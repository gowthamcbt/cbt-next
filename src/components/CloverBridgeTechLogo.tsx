import type { SVGProps } from 'react';

export default function CloverBridgeTechLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28" // Default width
      height="28" // Default height
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props} // Spread props to allow className for sizing
    >
      <title>CloverBridgeTech Logo</title>
      {/* Green Part - Top/Right */}
      <path 
        d="M15 2 L28 15 L15 15 L10.0137 15.0002L15 10.0139L15 2Z" 
        fill="#34D399" // A vibrant green
      />
      {/* Dynamic Part - Bottom/Left - Uses theme foreground color */}
      <path 
        d="M15 28L2 15L15 15L19.9863 15.0002L15 19.9861L15 28Z" 
        fill="hsl(var(--foreground))" // Use theme's foreground color
      />
    </svg>
  );
}
