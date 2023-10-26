"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { PageContextShape } from "~/lib/get-page-context";
import { cn } from "~/util";
import {
  revealVariants,
  staggerChild,
  staggerContainer,
} from "~/util/variants";

const DecoratorTile = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 29, scale: 1 }}
    transition={{
      duration: 2,
      type: "spring",
      stiffness: 200,
      damping: 40,
    }}
    className="gradient-decorator absolute -left-[0] bottom-[29rem] z-10 h-[110%] w-[110%] shrink-0 rounded-[41px] sm:-left-[40%] sm:h-[900px] sm:w-[900px] sm:rounded-[92px] md:-left-[64%] md:bottom-24 lg:-left-[26rem] xl:-left-60"
  />
);

export default function Hero({
  theme,
  name,
  overview,
  features,
  images,
}: Pick<
  PageContextShape,
  "theme" | "name" | "overview" | "features" | "images"
>) {
  return (
    <section
      className={cn(
        `header-offset relative flex w-full items-center justify-center overflow-hidden md:overflow-visible`,
        theme,
      )}
    >
      <Tabs defaultValue="overview" orientation="vertical">
        <div className="container mx-auto flex flex-col items-center gap-12 overflow-hidden pb-8 sm:relative sm:overflow-visible sm:pb-12 md:flex-row md:gap-12 md:pb-20 md:pt-10 lg:pt-32">
          <div className="relative z-30 flex-[1] sm:hidden">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
          </div>

          <div className="relative z-20 mb-12 flex-1 sm:mb-0 md:flex-[1.1] xl:flex-[2]">
            <TabsContent value="overview">
              <motion.div
                variants={staggerChild}
                initial="hidden"
                animate="visible"
                className="relative z-30 h-full w-full shrink-0 px-14 md:px-0"
              >
                <Image
                  priority
                  src="/images/data-pipelines-dashboard.svg"
                  height={426}
                  width={664}
                  alt="Customer.io Journeys"
                />
              </motion.div>
            </TabsContent>
            <TabsContent value="features">
              <motion.div
                variants={staggerChild}
                initial="hidden"
                animate="visible"
                className="relative z-30 h-full w-full shrink-0 px-14 md:px-0"
              >
                <Image
                  priority
                  src="/images/data-pipelines-dashboard.svg"
                  height={426}
                  width={664}
                  alt="Customer.io Journeys"
                />
              </motion.div>
            </TabsContent>
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-24 z-20 h-full w-full shrink-0 scale-125"
            >
              <Image
                priority
                src="/images/dot-pattern.svg"
                height={595}
                width={730}
                alt="Customer.io Journeys"
              />
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 flex flex-1 flex-col items-center gap-10 sm:flex-row md:flex-col md:items-start"
          >
            <div className="flex-[1.25] md:flex-1">
              <div className="text-center text-h2 sm:text-left">
                Customer.io
              </div>
              <h1 className="text-gradient mb-2 text-center sm:mb-6 sm:inline-block sm:text-left">
                {name}
              </h1>

              <TabsContent value="overview">
                <motion.p
                  variants={staggerChild}
                  className="lead text-center sm:text-left md:mb-10 lg:max-w-[27ch]"
                >
                  {overview.content}
                </motion.p>
              </TabsContent>

              <TabsContent value="features">
                <motion.p
                  variants={staggerChild}
                  className="lead text-center sm:text-left md:mb-10 lg:max-w-[27ch]"
                >
                  {features.content}
                </motion.p>
              </TabsContent>
            </div>

            <div className="hidden w-full flex-[1] sm:block">
              <TabsList>
                <TabsTrigger value="overview">
                  <span className="mr-5">01</span>Product Overview
                </TabsTrigger>
                <TabsTrigger value="features">
                  <span className="mr-5">02</span> Product Features
                </TabsTrigger>
              </TabsList>
            </div>
          </motion.div>

          <DecoratorTile />
        </div>
      </Tabs>
    </section>
  );
}
