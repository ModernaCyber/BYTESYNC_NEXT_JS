"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import Logo from "./Logo";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className=" top-nav-hero-container text-primary-foreground px-4 py-auto h-16 w-full">
      <div className="flex w-full justify-between container h-full items-center ">
        <div className="h-full w-auto min-w-48 flex items-center">
          <Logo/>
        </div>
        <div className="">{children}</div>
      </div>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "px-4 pt-4 pb-1 ml-1 hover:border-b-4 border-[#0FC487] hover:text-primary-foreground focus-visible:bg-secondary focus-visible:text-primary-foreground",
        pathname === props.href && " text-[#0FC487] hover:text-[#13ffaa]"
      )}
    />
  );
}
