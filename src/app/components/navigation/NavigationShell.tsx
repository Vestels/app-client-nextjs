"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import SideNavigation from "@/app/components/navigation/SideNavigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function NavigationShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    setIsNavigationOpen(!isMobile);
  }, [isMobile]);

  return (
    <>
      <Header isSideNavigationOpen={isNavigationOpen} onMenuOpen={() => setIsNavigationOpen((previous) => !previous)} />

      <main className="main">
        <SideNavigation isOpen={isNavigationOpen} />
        <article className="main-container">{children}</article>
      </main>
    </>
  );
}
