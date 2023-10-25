"use client";

import { motion } from "framer-motion";

import { staggerChild, staggerContainer } from "~/util/variants";

const ListItems = ({ title, items }: { title: string; items: string[] }) => (
  <motion.ul
    className="flex-1 overflow-hidden"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <motion.li variants={staggerChild} className="pb-16">
      {title}
    </motion.li>
    {items.map((item, i) => (
      <motion.li variants={staggerChild} key={i}>
        {item}&nbsp;
      </motion.li>
    ))}
  </motion.ul>
);

export default function Hero() {
  return (
    <section className="header-offset flex w-full items-center justify-center px-4 md:px-8">
      <div className="container relative mx-auto flex flex-col overflow-visible pb-24 pt-24 md:flex-row">
        <div className="relative z-20 flex-1 lg:flex-[2]">svg</div>
        <div className="relative z-20 flex-1">
          <div className="text-h2">Customer.io</div>
          <h1 className="mb-6 inline-block bg-gradient-to-br from-blue-600 to-green-500 bg-clip-text text-transparent">
            Data Pipelines
          </h1>
          <p className="lead mb-5 max-w-[25ch]">
            Connect first-party data to every tool in your tech stack with Data
            Pipelines, a customer data platform (CDP), so you can focus on what
            matters most—building relationships with your customers.
          </p>
          <a href="#" className="block border p-4">
            Product Overview
          </a>
          <a href="#" className="block border p-4">
            Product Features
          </a>
        </div>
        <div className="gradient-blue-to-green absolute -left-60 -top-[23rem] z-10 h-[900px] w-[900px] flex-shrink-0 rotate-[29deg] rounded-[92px]" />
      </div>
    </section>
  );
}
