"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn(
                "row-span-1 rounded-[2.5rem] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 md:p-8 dark:bg-zinc-900 bg-white border border-transparent justify-between flex flex-col space-y-4 liquid-glass diffusion-shadow z-10",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 mt-2">
                {icon}
                <div className="font-sans font-bold text-zinc-950 dark:text-zinc-100 mb-3 mt-4 tracking-tight text-2xl">
                    {title}
                </div>
                <div className="font-sans font-normal text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
