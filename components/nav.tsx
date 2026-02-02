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
            src="https://worknshare.ma/wp-content/uploads/2022/09/WORKSHARE_-_LOGO_HD-1-removebg-preview.png"
            alt="WORKNSHARE logo"
            className="w-52"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/products"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {"Products"}
          </Link>
          <Link
            href="/planner"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {"Floor Planner"}
          </Link>
          <Link
            href="/services"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {"Services"}
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {"Contact"}
          </Link>
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
