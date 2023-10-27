import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "";
};

export { cn, getBaseUrl };
