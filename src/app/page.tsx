"use client";

import { useEffect, useState } from "react";

import DesktopLayout from "../components/DesktopLayout";
import MobileLayout from "../components/MobileLayout";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  // Breakpoint for switching layouts (e.g., Tailwind's lg breakpoint)
  const isMobile = useMediaQuery("(max-width: 1023px)");

  // State to track if component has mounted on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component mounts
    setIsClient(true);
  }, []);

  // Avoid rendering layout based on hook during SSR or initial client render
  // This prevents hydration mismatch errors
  if (!isClient) {
    // Render the default (Desktop) layout or a placeholder during SSR/initial load
    // Returning the default layout is often preferred to avoid layout shifts
    return <DesktopLayout />;
  }

  // Once mounted, render the correct layout based on screen size
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
