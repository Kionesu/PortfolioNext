"use client";

import { NavLink } from "@/components/ui/nav-link";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
          EF
        </div>
        <div className="flex gap-6">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/veille">Veille Technologique</NavLink>
          <NavLink href="/projets">Projets</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}