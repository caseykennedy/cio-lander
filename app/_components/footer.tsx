"use client";

import useDate from "~/lib/useDate";

export default function Footer() {
  const nevadaTime = useDate();
  return (
    <footer className="border-t-[2px] border-dotted border-zinc-700 py-4">
      <div className="container pb-96">cio</div>
    </footer>
  );
}
