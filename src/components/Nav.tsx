"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode, useState } from "react";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";

export function Nav({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  return (
    <nav className=" top-nav-hero-container text-primary-foreground px-1 md:px-4 py-auto h-16 w-full">
      <div className="flex w-full justify-between md:container h-full items-center ">
        <div className="h-full w-auto md:min-w-48 flex items-center">
          <Logo />
        </div>
        <div className="flex md:hidden">
          {menu ? (
            <button className="w-auto py-2 px-4 flex justify-center h-full items-center mr-4">
              X
            </button>
          ) : (
            <button className="w-auto py-2 px-4 flex justify-center h-full items-center mr-4">
              <FiMenu />
            </button>
          )}
        </div>
        <div className="md:flex hidden">{children}</div>
      </div>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <div className="relative flex justify-center items-center  ml-1 h-full hover:text-[#0FC487] focus-visible:bg-secondary focus-visible:text-primary-foreground">
      <Link
        {...props}
        className={cn(
          "px-4 py-4",
          pathname === props.href && " text-[#0FC487] hover:text-[#13ffaa] inline-block text-nowrap"
        )}
      />
      {pathname === props.href ? (
        <motion.span
          layoutId="underline"
          className="h-1 w-nav mx-auto bg-[#0FC487] absolute bottom-3 left-4 "
        />
      ) : null}
    </div>
  );
}
