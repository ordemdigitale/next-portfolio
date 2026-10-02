"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { heroStats, contactInfo } from "@/lib/data";
import portrait from "@/public/images/portrait.png";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

const portraitVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 12 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

export function Hero() {
    // Skip the enter animation entirely for users who've asked for reduced
    // motion — content renders straight into its final ("visible") state.
    const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id="accueil"
      className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 pt-36 pb-20 md:flex-row md:pt-44 md:pb-28 lg:gap-8 lg:px-12 font-poppins"
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={containerVariants}
    >
      {/* Copy & CTAs */}
      <motion.div
        className="z-10 flex w-full flex-col items-start lg:w-7/12"
        variants={containerVariants}
      >
        <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-peach-200 bg-peach-100/70 px-3.5 py-1.5 text-xs font-medium text-peach-600 shadow-sm sm:text-sm"
        >
            <span className="text-xs text-peach-500">✦</span>
            <span>lionel.dabo@outlook.com</span>
        </motion.div>

        <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl md:text-6xl xl:text-[4.25rem]"
        >
          Je transforme <br/>vos idées en expériences digitales utiles
        </motion.h1>

        <motion.p
            variants={itemVariants}
            className="mb-9 max-w-xl leading-relaxed text-muted-text sm:text-lg"
        >
          Moi c&apos;est{" "}
          <strong className="text-charcoal">Lionel Dabo</strong>, développeur logiciel. <br/>
          J'aime comprendre comment les choses fonctionnent,
          créer des solutions simples à des problèmes complexes et
          donner vie à des idées à travers le code.
        </motion.p>

        <motion.div
            variants={itemVariants}
            className="flex w-full flex-wrap items-center gap-4 sm:w-auto"
        >
          <Button asChild size="lg">
            <a href="#projets">
              <span>Voir mes Projets</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              <span>Discuter d&apos;un projet</span>
              <span className="text-base leading-none">💬</span>
            </a>
          </Button>
        </motion.div>

        <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-8 border-t border-stone-200/80 pt-10 text-xs text-muted-text sm:text-sm"
        >
          {/* {heroStats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              {i > 0 && <div className="h-8 w-px bg-stone-300/70" />}
              <div>
                <span className="block text-base font-bold leading-tight text-charcoal sm:text-lg">
                  {stat.value}
                </span>
                <span>{stat.label}</span>
              </div>
            </div>
          ))} */}

          {contactInfo.links.map((link, i) => (
            <div key={link.label} className="flex items-center gap-8">
                {i > 0 && <div className="h-8 w-px bg-stone-300/70" />}
                <Button asChild variant="peach" size="sm">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <span>{link.label}</span> {link.icon}
                    </a>
                </Button>
            </div>
            ))}
        </motion.div>
      </motion.div>

      {/* Portrait & floating badges */}
      <motion.div
        className="relative flex w-full items-center justify-center lg:w-5/12"
        variants={portraitVariants}
      >
        <div className="absolute h-80 w-80 translate-x-4 rounded-full bg-gradient-to-tr from-peach-400/35 to-peach-200/40 blur-2xl -z-10 sm:h-96 sm:w-96" />

        <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-3xl p-2 sm:w-88 md:w-96">
          <Image
            src={portrait}
            alt="Lionel Dabo — Développeur d'Applications & UI Designer"
            fill
            priority
            sizes="(max-width: 768px) 288px, 384px"
            className="rounded-2xl object-cover object-center saturate-[0.95] contrast-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80" />
        </div>

        {/* Each badge: outer div handles the idle float (translateY only),
            inner div keeps its existing rotate + hover-to-straighten behavior
            so the two transforms don't collide on the same element. */}
        <div className="absolute top-10 -left-4 animate-float sm:-left-6">
          <div className="flex -rotate-4 items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3.5 py-2 shadow-card-lift backdrop-blur-xs transition-transform duration-300 hover:rotate-0">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-peach-500" />
            <span className="text-xs font-bold text-charcoal">
              Python
            </span>
          </div>
        </div>

        <div className="absolute bottom-56 -right-2 animate-float-delayed sm:-right-6">
          <div className="flex rotate-4 items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-card-lift backdrop-blur-xs transition-transform duration-300 hover:rotate-0">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-peach-500" />
            <span className="text-xs font-bold leading-tight text-charcoal">
                React
            </span>
          </div>
        </div>

        <div className="absolute -bottom-3 left-8 animate-float-slow">
          <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-peach-500" />
            <span className="text-xs font-bold leading-tight text-charcoal">PostgreSQL</span>
          </div>
        </div>
        
      </motion.div>
    </motion.section>
  );
}
