"use client";

import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import type { NavLink } from "./header";

import { cn } from "~/util";

const NavLink = ({
  active,
  children,
  href,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className={cn(
      `text-overline flex w-full items-center border-white/10 py-8 first:border-b`,
      // active ? "border-white/50" : "border-transparent",
    )}
    onClick={onClick}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-8 w-8 shrink-0" />
  </Link>
);

const NavigationSheet = ({
  children,
  navLinks,
}: {
  children: React.ReactNode;
  navLinks: NavLink[];
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open navigation">{children}</SheetTrigger>
      <SheetContent className="max-h-[100svh] overflow-y-auto">
        <SheetHeader>
          <div>
            {navLinks.map(({ title, href, iconPath }, i) => (
              <NavLink
                href={href}
                key={i}
                active={pathname === href}
                onClick={() => setOpen(false)}
              >
                <span className="shrink-0 pr-4">
                  <Image
                    priority
                    src={`/images/${iconPath}`}
                    height={25}
                    width={25}
                    alt="Customer.io Journeys"
                  />
                </span>
                {title}
              </NavLink>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationSheet;
