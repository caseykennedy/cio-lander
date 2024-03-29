"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { PageContextShape } from "~/lib/get-page-context";
import { cn } from "~/util";
import { revealVariants, staggerChild } from "~/util/variants";

const DecoratorTile = () => (
  <div className="gradient-decorator absolute -left-[0] bottom-[20rem] z-10 h-[110%] w-[110%] shrink-0 rotate-[29deg] rounded-[41px] sm:-left-[40%] sm:bottom-[25rem] sm:h-[900px] sm:w-[900px] sm:rounded-[92px] md:-left-[64%] md:bottom-24 lg:-left-[26rem] lg:bottom-[6.5rem] lg:h-[940px] lg:w-[940px] xl:-left-64" />
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
        `header-offset relative flex w-full items-center justify-center overflow-hidden md:overflow-visible lg:h-[770px]`,
        theme,
      )}
    >
      <Tabs
        defaultValue="overview"
        orientation="vertical"
        className="h-full w-full"
      >
        <div className="container mx-auto flex h-full w-full flex-col items-center gap-12 overflow-hidden pb-10 sm:relative sm:overflow-visible sm:pb-12 md:flex-row md:gap-12 md:pb-16 md:pt-10 lg:pt-28 xl:items-start">
          <div className="relative z-30 flex-[1] sm:hidden">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
          </div>

          <div className="relative -top-4 z-20 mb-12 max-h-[426px] w-full flex-1 sm:mb-0 md:flex-[1.1] xl:flex-[2]">
            <TabsContent value="overview">
              <motion.div
                variants={staggerChild}
                initial="hidden"
                animate="visible"
                className="relative z-30 w-full px-8 md:px-0"
              >
                <Image
                  priority
                  src={images.dashboard}
                  height={420}
                  width={700}
                  alt="Customer.io Journeys"
                />
              </motion.div>
            </TabsContent>
            <TabsContent value="features">
              <motion.div
                variants={staggerChild}
                initial="hidden"
                animate="visible"
                className="relative z-30 w-full px-8 md:px-0"
              >
                <Image
                  priority
                  src={images.platform}
                  height={420}
                  width={700}
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
                alt="Background pattern"
              />
            </motion.div>
          </div>

          <motion.div className="relative z-20 flex flex-1 flex-col items-center gap-8 sm:flex-row md:flex-col md:items-start md:gap-0">
            <div className="flex-[1.25] md:flex-1">
              <div>
                <div className="text-center text-h2 sm:text-left">
                  Customer.io
                </div>
                <h1 className="text-gradient mb-2 text-center sm:mb-5 sm:inline-block sm:text-left">
                  {name}
                </h1>
              </div>

              <TabsContent value="overview">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  className="lead px-4 text-center sm:px-0 sm:text-left md:mb-10 lg:max-w-[27ch]"
                >
                  {overview.content}
                </motion.p>
              </TabsContent>

              <TabsContent value="features">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  className="lead px-4 text-center sm:px-0 sm:text-left md:mb-10 lg:max-w-[27ch]"
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
