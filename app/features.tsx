"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { staggerChild, staggerContainer } from "~/util/variants";

export default function Features() {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { amount: 0.5, once: true });
  return (
    <section className="bg-white pb-96 pt-16 text-black">
      <div className="container mx-auto">
        <motion.ul
          ref={inViewRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.li
            variants={staggerChild}
            className="rounded-[10px] border border-blue-400 bg-white px-4 py-8"
          >
            <p className="mb-4 text-h2 text-blue-500">Scale</p>
            <p>Architected to meet all your data needs</p>
          </motion.li>
          <motion.li
            variants={staggerChild}
            className="rounded-[10px] border border-blue-400 bg-white px-4 py-8"
          >
            <p className="mb-4 text-h2 text-blue-500">Scale</p>
            <p>Architected to meet all your data needs</p>
          </motion.li>
          <motion.li
            variants={staggerChild}
            className="rounded-[10px] border border-blue-400 bg-white px-4 py-8"
          >
            <p className="mb-4 text-h2 text-blue-500">Scale</p>
            <p>Architected to meet all your data needs</p>
          </motion.li>
          <motion.li
            variants={staggerChild}
            className="rounded-[10px] border border-blue-400 bg-white px-4 py-8"
          >
            <p className="mb-4 text-h2 text-blue-500">Scale</p>
            <p>Architected to meet all your data needs</p>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}
