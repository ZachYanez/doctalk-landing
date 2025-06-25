"use client";

import DesktopLayout from "@/components/DesktopLayout";
import MobileLayout from "@/components/MobileLayout";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
}
