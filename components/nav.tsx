"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Nav() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/home"
          className="flex items-center gap-1 text-2xl font-bold text-foreground"
        >
          <img
            src="/Logo/Artboard-37-copywork-n-share.png"
            alt="WORKNSHARE logo"
            className="w-52"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <motion.div whileHover="hover">
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 relative"
            >
              <motion.img
                src="/Logo/Artboard-38work-n-share.png"
                alt="logo"
                className="w-4 h-4 absolute -left-6"
                initial={{ x: 20, opacity: 0 }}
                variants={{
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              {"Products"}
            </Link>
          </motion.div>
          <motion.div whileHover="hover">
            <Link
              href="/planner"
              className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 relative"
            >
              <motion.img
                src="/Logo/Artboard-38work-n-share.png"
                alt="logo"
                className="w-4 h-4 absolute -left-6"
                initial={{ x: 20, opacity: 0 }}
                variants={{
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              {"Floor Planner"}
            </Link>
          </motion.div>
          <motion.div whileHover="hover">
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 relative"
            >
              <motion.img
                src="/Logo/Artboard-38work-n-share.png"
                alt="logo"
                className="w-4 h-4 absolute -left-6"
                initial={{ x: 20, opacity: 0 }}
                variants={{
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              {"Services"}
            </Link>
          </motion.div>
          <motion.div whileHover="hover">
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 relative"
            >
              <motion.img
                src="/Logo/Artboard-38work-n-share.png"
                alt="logo"
                className="w-4 h-4 absolute -left-6"
                initial={{ x: 20, opacity: 0 }}
                variants={{
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              {"Contact"}
            </Link>
          </motion.div>
        </div>

        <Link href="/planner">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            {"Start Designing"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
