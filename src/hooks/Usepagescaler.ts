import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface UsePageScalerOptions {
  minWidth?: number;
  maxWidth?: number;
  designWidth?: number;
}

export const usePageScaler = (options: UsePageScalerOptions = {}) => {
  const { minWidth = 1024, maxWidth = 1920, designWidth = 1920 } = options;

  const scalerRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<number | "auto">("auto");

  const location = useLocation(); // 🔥 NEW

  useEffect(() => {
    const scalePageContent = () => {
      const scaler = scalerRef.current;
      if (!scaler) return;

      const screenWidth = window.innerWidth;

      if (screenWidth >= minWidth) {
        const scaleFactor = screenWidth / designWidth;

        scaler.style.transform = `scale(${scaleFactor})`;
        scaler.style.transformOrigin = "top left";
        scaler.style.width = `${designWidth}px`;
        scaler.style.margin = "0 0";

        document.body.style.overflowX = "hidden";

        // 🔥 WAIT for layout to settle
        setTimeout(() => {
          requestAnimationFrame(() => {
            const contentHeight = scaler.scrollHeight;
            const scaledHeight = contentHeight * scaleFactor;
            setWrapperHeight(scaledHeight);
          });
        }, 50); // small delay fixes route/render timing
      } else {
        scaler.style.transform = "none";
        scaler.style.width = "100%";
        scaler.style.margin = "0";
        document.body.style.overflowX = "auto";
        setWrapperHeight("auto");
      }
    };

    // 🔥 RUN on:
    scalePageContent();

    // Resize handling
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(scalePageContent, 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", scalePageContent);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", scalePageContent);
      clearTimeout(timeoutId);
    };
  }, [minWidth, maxWidth, designWidth, location.pathname]); // 🔥 CRITICAL FIX

  return { scalerRef, wrapperHeight };
};