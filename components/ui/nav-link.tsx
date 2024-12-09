"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 transition-colors hover:text-white/90",
        isActive ? "text-white" : "text-white/70",
        "hover:before:opacity-100 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:bg-gradient-to-r before:from-blue-500 before:via-violet-500 before:to-pink-500 before:opacity-0 before:transition-opacity"
      )}
    >
      {children}
    </Link>
  );
}