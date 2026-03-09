"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100 flex items-center justify-center overflow-hidden"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className="absolute inset-0 transition-all duration-300 dark:-rotate-90 dark:opacity-0 rotate-0 opacity-100"
                    weight="bold"
                    size={20}
                />
                <Moon
                    className="absolute inset-0 transition-all duration-300 rotate-90 opacity-0 dark:rotate-0 dark:opacity-100"
                    weight="bold"
                    size={20}
                />
            </div>
            <span className="sr-only">Toggle theme</span>
        </motion.button>
    );
}
