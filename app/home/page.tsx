"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Ruler,
  Package,
  Users,
  Sparkles,
  ArrowRight,
  Grid3x3,
  Download,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: Grid3x3,
    title: "Drag & Drop Design",
    description: "Intuitive 2D floor planner with snap-to-grid functionality",
    color: "bg-[#4ECDC4]",
  },
  {
    icon: Ruler,
    title: "Real-time Measurements",
    description: "See distances and dimensions as you design your space",
    color: "bg-[#FF6B6B]",
  },
  {
    icon: Package,
    title: "Instant Pricing",
    description: "Auto-calculate total cost as you add furniture",
    color: "bg-[#FFD93D]",
  },
  {
    icon: Download,
    title: "Export to PDF",
    description: "Download your layout with a complete shopping list",
    color: "bg-[#95E1D3]",
  },
  {
    icon: Share2,
    title: "Collaboration Mode",
    description: "Share designs with your team for input",
    color: "bg-[#FCBAD3]",
  },
  {
    icon: Users,
    title: "Virtual Consultation",
    description: "Book a session with our design experts",
    color: "bg-[#A8E6CF]",
  },
];

const templates = [
  { name: "Startup Office", rooms: "2-3 desks", image: "🚀" },
  { name: "Executive Suite", rooms: "Premium setup", image: "👔" },
  { name: "Coworking Space", rooms: "10+ stations", image: "🤝" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation handled in app layout via components/nav.tsx */}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#4ECDC4]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block bg-accent/20 text-accent px-6 py-2 rounded-full text-sm font-semibold rotate-[-2deg]">
                {"Moroccan Office Furniture Experts"}
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {"Design Your "}
              <span className="text-primary rotate-[-2deg] inline-block">
                {"Perfect"}
              </span>
              {" Workspace"}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {
                "Interactive 2D floor planner meets modern office furniture. Create, share, and bring your workspace vision to life."
              }
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/planner">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl w-full sm:w-auto"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {"Launch Floor Planner"}
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full w-full sm:w-auto bg-transparent"
                >
                  {"Browse Furniture"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Interactive Preview */}
          <motion.div
            className="mt-20 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-border shadow-2xl rotate-[-1deg]">
              <div className="aspect-video bg-gradient-to-br from-[#4ECDC4]/20 via-[#FFD93D]/20 to-[#FF6B6B]/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Simulated floor planner preview */}
                <div className="grid grid-cols-4 grid-rows-3 gap-2 w-3/4 h-3/4">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/40 backdrop-blur-sm rounded-lg border-2 border-dashed border-foreground/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.05 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.6)",
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Grid3x3 className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-2xl font-bold text-foreground">
                      {"Drag. Drop. Design."}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {"Why Choose "}
              <span className="text-accent rotate-[-2deg] inline-block">
                {"WORKNSHARE"}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {"Like Canva, but for office spaces"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow bg-card border-2 border-border">
                  <div
                    className={`${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 rotate-[-3deg]`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {"Pre-made "}
              <span className="text-primary rotate-[2deg] inline-block">
                {"Templates"}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {"Start with a template and customize to your needs"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer bg-card border-2 border-border">
                  <div className="text-6xl mb-4">{template.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                  <p className="text-muted-foreground mb-4">{template.rooms}</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full bg-transparent"
                  >
                    {"Use Template"}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {"Ready to Design Your Space?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {
                "Join hundreds of Moroccan businesses creating their perfect workspaces"
              }
            </p>
            <Link href="/planner">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-12 py-6 rounded-full shadow-xl"
              >
                {"Start Your Free Design"}
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-black mb-4">
                <span className="inline-block text-[#FF6B6B]">{"W"}</span>
                <span className="inline-block text-[#4ECDC4]">{"O"}</span>
                <span className="inline-block text-[#FFD93D]">{"R"}</span>
                <span className="inline-block text-[#95E1D3]">{"K"}</span>
                <span className="inline-block text-[#F38181] rotate-45 mx-1">
                  {"N"}
                </span>
                <span className="inline-block text-[#AA96DA]">{"S"}</span>
                <span className="inline-block text-[#FCBAD3]">{"H"}</span>
                <span className="inline-block text-[#A8E6CF]">{"A"}</span>
                <span className="inline-block text-[#FFD93D]">{"R"}</span>
                <span className="inline-block text-[#4ECDC4]">{"E"}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Moroccan office furniture & workspace design"}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">{"Products"}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/products" className="hover:text-primary">
                    {"Desks"}
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary">
                    {"Chairs"}
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary">
                    {"Storage"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">{"Tools"}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/planner" className="hover:text-primary">
                    {"Floor Planner"}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary">
                    {"Consultation"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">{"Company"}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services" className="hover:text-primary">
                    {"Services"}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            {"© 2024 WORKNSHARE. Design your perfect workspace."}
          </div>
        </div>
      </footer>
    </div>
  );
}
