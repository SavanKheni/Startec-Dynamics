import { useEffect, useRef, useState } from "react";

interface UsePageScalerOptions {
  minWidth?: number;
  maxWidth?: number;
  designWidth?: number;
}

export const usePageScaler = (options: UsePageScalerOptions = {}) => {
  const { minWidth = 1024, maxWidth = 1920, designWidth = 1920 } = options;
  const scalerRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    const scalePageContent = () => {
      const scaler = scalerRef.current;
      if (!scaler) return;

      const screenWidth = window.innerWidth;

      if (screenWidth >= minWidth) {
        // Calculate scale factor for all screens >= minWidth
        const scaleFactor = screenWidth / designWidth;

        scaler.style.transform = `scale(${scaleFactor})`;
        scaler.style.transformOrigin = "top left";
        scaler.style.width = `${designWidth}px`;
        scaler.style.margin = "0 0";

        document.body.style.overflowX = "hidden";

        // Calculate the actual scaled height
        requestAnimationFrame(() => {
          const contentHeight = scaler.scrollHeight;
          const scaledHeight = contentHeight * scaleFactor;
          setWrapperHeight(scaledHeight);
        });
      } else {
        // Mobile: reset to responsive (screenWidth < minWidth)
        scaler.style.transform = "none";
        scaler.style.width = "100%";
        scaler.style.margin = "0";
        document.body.style.overflowX = "auto";
        setWrapperHeight("auto");
      }
    };

    // Initial scale
    scalePageContent();

    // Scale on resize with debounce for better performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(scalePageContent, 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", scalePageContent);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", scalePageContent);
      clearTimeout(timeoutId);
    };
  }, [minWidth, maxWidth, designWidth]);

  return { scalerRef, wrapperHeight };
};
