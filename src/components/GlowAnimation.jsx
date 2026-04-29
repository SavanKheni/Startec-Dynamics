import { useEffect, useRef } from "react";

/**
 * GlowAnimation
 *
 * Props:
 *  direction  — "top-to-bottom" | "bottom-to-top" | "left-to-right" | "right-to-left"
 *               Default: "top-to-bottom"
 *  duration   — animation cycle in ms. Default: 3000
 *  size       — short-axis width of the glow track. Default: 90
 *  length     — long-axis length of the glow track. Default: 340
 *  color      — main glow color. Default: "#1D52FF"
 *  coreColor  — bright core color. Default: "#CED8FF"
 *  background — SVG background. Default: "transparent"
 */
const GlowAnimation = ({
  direction = "top-to-bottom",
  duration = 3000,
  size = 90,
  length = 240,
  color = "#1D52FF",
  coreColor = "#CED8FF",
  background = "transparent",
  className = "",
}) => {
  const glowRef = useRef(null);
  const rafRef = useRef(null);

  const isHorizontal =
    direction === "left-to-right" || direction === "right-to-left";
  const isReversed =
    direction === "bottom-to-top" || direction === "right-to-left";

  const svgW = isHorizontal ? length : size;
  const svgH = isHorizontal ? size : length;

  // Glow geometry — always computed in vertical orientation
  const cx = size / 2;
  const cy = length / 2;
  const coreRy = length * 0.15;
  const coreRx = size * 0.067;
  const glowRx = length / 2;
  const glowRy = size * 0.167;
  const travel = length - coreRy * 2;

  // unique IDs so multiple instances don't clash
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

      // horizontal needs inversion because rotate(-90) flips the axis
      const shouldInvert = isHorizontal ? !isReversed : isReversed;
      const eased = ease(shouldInvert ? 1 - progress : progress);

      const offset = -travel / 2 + eased * travel;

      glow.setAttribute(
        "transform",
        isHorizontal ? `translate(${offset}, 0)` : `translate(0, ${offset})`,
      );

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, duration, isHorizontal, isReversed, travel]);

  // For horizontal mode rotate the whole scene –90° around the SVG centre
  const sceneTransform = isHorizontal
    ? `rotate(-90, ${length / 2}, ${size / 2})`
    : undefined;

  return (
    <div className={className}>
      <svg
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", background }}
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
            x="-100%"
            y="-10%"
            width="300%"
            height="120%"
            filterUnits="objectBoundingBox"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        <g transform={sceneTransform}>
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

export default GlowAnimation;
