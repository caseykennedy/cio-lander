"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Button from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
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
    <section className="header-offset flex w-full items-center justify-center">
      <Tabs defaultValue="overview" orientation="vertical">
        <div className="container relative mx-auto flex flex-col gap-16 overflow-visible pb-20 pt-32 md:flex-row">
          <div className="relative z-20 flex-1 lg:flex-[2]">
            <TabsContent value="overview">
              <div className="relative z-30 h-full w-full shrink-0">
                <Image
                  priority
                  src="/images/data-pipelines-dashboard.svg"
                  height={426}
                  width={664}
                  alt="Customer.io Journeys"
                />
              </div>
            </TabsContent>
            <TabsContent value="features">
              <div className="relative z-30 h-full w-full shrink-0">
                <Image
                  priority
                  src="/images/data-pipelines-dashboard.svg"
                  height={426}
                  width={664}
                  alt="Customer.io Journeys"
                />
              </div>
            </TabsContent>
            <div className="absolute -top-24 z-20 h-full w-full shrink-0">
              <Image
                priority
                src="/images/dot-pattern.svg"
                height={595}
                width={730}
                alt="Customer.io Journeys"
              />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 flex-1"
          >
            <div className="text-h2">Customer.io</div>
            <h1 className="text-gradient-blue-to-green mb-6 inline-block">
              Data Pipelines
            </h1>
            <motion.p
              variants={staggerChild}
              className="lead mb-10 max-w-[25ch]"
            >
              Connect first-party data to every tool in your tech stack with
              Data Pipelines, a customer data platform (CDP), so you can focus
              on what matters most—building relationships with your customers.
            </motion.p>
            <div className="flex flex-col gap-4">
              {/* <TabsTrigger value="overview"></TabsTrigger> */}
              {/* <TabsTrigger
                value="overview"
                className="w-full border-b border-black/30 py-6"
              >
                <span>01</span>Product Overview
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="w-full border-b border-black/30 py-6"
              >
                <span>02</span> Product Features
              </TabsTrigger> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 29, scale: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 200,
              damping: 40,
            }}
            className="gradient-blue-to-green absolute -left-60 bottom-24 z-10 h-[900px] w-[900px] shrink-0 rounded-[92px]"
          />
        </div>
      </Tabs>
    </section>
  );
}
