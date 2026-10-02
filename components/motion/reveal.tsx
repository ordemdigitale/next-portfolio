"use client";

import { motion, type Variants } from "motion/react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;me?: string;
    /** Stager delay in seconds, useful when rendering several Reveals in a list. */
    delay?: number;
    /** Distance (px) the content travels in on reveal. */
    distance?: number;
};

const baseVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

/**
 * Fades + slides content up into place the first time it scrolls into view.
 * Respects prefers-reduced-motion automatically via `motion`'s defaults.
*/

export function Reveal({ children, className, delay = 0, distance = 24 }: RevealProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible" //triggers the animation when the element scrolls into the viewport
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: { opacity: 0, y: distance },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}

export { baseVariants };