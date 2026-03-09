"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function LiquidGlass({ children, className }: LiquidGlassProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn("liquid-glass rounded-[2.5rem] p-8 md:p-10 diffusion-shadow", className)}
        >
            {children}
        </motion.div>
    );
}
