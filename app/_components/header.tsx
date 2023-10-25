"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "./ui/button";
import Logo from "./logo";

import { cn } from "~/util";

const navLinks = [
  { title: "Journeys", href: "/", iconPath: "icon-journeys.svg" },
  {
    title: "Data Pipelines",
    href: "/data-pipelines",
    iconPath: "icon-data-pipelines.svg",
  },
];

const NavLink = ({
  active,
  children,
  href,
}: {
  active?: boolean;
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className={cn(
      `group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded border border-white/50 bg-transparent px-3 py-2.5 font-sans text-xs font-bold uppercase tracking-[2px] text-white transition-colors hover:border-white`,
      active ? "border-white/50" : "border-transparent",
    )}
  >
    {children}
  </Link>
);

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-30 w-full px-[18px] pt-8 md:pt-12">
      <div className="container mx-auto flex h-[87px] flex-row items-center justify-between rounded-[10px] bg-white/10 backdrop-blur-[10px]">
        <div
          className="text-base leading-tight"
          aria-label="Customer.io Lander Logo"
        >
          <Logo />
          <span className="hidden">customer.io</span>
        </div>
        <nav className="flex flex-row flex-nowrap items-center gap-11">
          {navLinks.map(({ title, href, iconPath }, i) => (
            <NavLink href={href} key={i} active={pathname === href}>
              <span className="shrink-0">
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
        </nav>
        <div>
          <Button variant="secondary" onClick={() => alert("Hello!")}>
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
