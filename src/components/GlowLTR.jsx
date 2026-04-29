import { useEffect, useRef } from "react";

const GlowLTR = ({
  duration = 3000,
  size = 90,
  length = 340,
  color = "#1D52FF",
  coreColor = "#CED8FF",
  background = "transparent",
  className = "",
}) => {
  const glowRef = useRef(null);
  const rafRef = useRef(null);

  const cx = size / 2;
  const cy = length / 2;
  const coreRy = length * 0.15;
  const coreRx = size * 0.067;
  const glowRx = length / 2;
  const glowRy = size * 0.167;
  const travel = length - coreRy * 2;

  const uid = useRef(`g${Math.random().toString(36).slice(2, 7)}`).current;

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    let startTime = null;

    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % (duration * 2);
      const progress =
        elapsed < duration ? elapsed / duration : 2 - elapsed / duration;

      const eased = ease(progress);
      const offset = -travel / 2 + eased * travel;

      glow.setAttribute("transform", `translate(0, ${-offset})`);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration, travel]);

  return (
    <div className={className} style={{ overflow: "visible", lineHeight: 0 }}>
      <svg
        width={length}
        height={size}
        viewBox={`0 0 ${length} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", display: "block", background }}
      >
        <defs>
          <radialGradient
            id={`halo-${uid}`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${cx} ${cy}) rotate(90) scale(${glowRy} ${glowRx})`}
          >
            <stop stopColor={color} />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id={`core-${uid}`}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${cx} ${cy}) rotate(90) scale(${coreRy} ${coreRx})`}
          >
            <stop stopColor={coreColor} />
            <stop offset="1" stopColor={coreColor} stopOpacity="0" />
          </radialGradient>

          <filter
            id={`blur-${uid}`}
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        <g transform={`rotate(-90, ${length / 2}, ${size / 2})`}>
          <g ref={glowRef}>
            <g filter={`url(#blur-${uid})`}>
              <ellipse
                cx={cx}
                cy={cy}
                rx={glowRx}
                ry={glowRy}
                transform={`rotate(90 ${cx} ${cy})`}
                fill={`url(#halo-${uid})`}
              />
            </g>
            <ellipse
              cx={cx}
              cy={cy}
              rx={coreRx}
              ry={coreRy}
              fill={`url(#core-${uid})`}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default GlowLTR;
