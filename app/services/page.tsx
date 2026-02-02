'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Calendar,
  Ruler,
  Truck,
  Wrench,
  Sparkles,
  Users,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Ruler,
    title: 'Space Planning & Design',
    description: 'Expert workspace design consultation',
    features: [
      'Professional floor planning',
      'Ergonomic layout optimization',
      '3D visualization available',
      'Custom furniture recommendations',
    ],
    price: '2,500',
    color: 'bg-[#4ECDC4]',
  },
  {
    icon: Calendar,
    title: 'Virtual Consultation',
    description: 'One-on-one session with our design team',
    features: [
      '60-minute video consultation',
      'Personalized design advice',
      'Budget planning assistance',
      'Follow-up support included',
    ],
    price: '500',
    color: 'bg-[#FF6B6B]',
  },
  {
    icon: Truck,
    title: 'Delivery & Installation',
    description: 'Professional delivery across Morocco',
    features: [
      'Free delivery over 20,000 MAD',
      'Professional assembly service',
      'Quality inspection on arrival',
      'Furniture placement assistance',
    ],
    price: 'From 800',
    color: 'bg-[#FFD93D]',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Keep your workspace in perfect condition',
    features: [
      '12-month warranty on all items',
      'Repair and replacement service',
      'Regular maintenance checks',
      'Priority customer support',
    ],
    price: 'Custom',
    color: 'bg-[#A8E6CF]',
  },
]

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Tell us about your workspace needs and vision',
  },
  {
    step: '02',
    title: 'Design',
    description: 'We create a custom floor plan using our tool',
  },
  {
    step: '03',
    title: 'Review',
    description: 'Refine the design together until perfect',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Professional delivery and installation',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <div className="text-2xl font-black">
              <span className="inline-block text-[#FF6B6B]">{'W'}</span>
              <span className="inline-block text-[#4ECDC4]">{'O'}</span>
              <span className="inline-block text-[#FFD93D]">{'R'}</span>
              <span className="inline-block text-[#95E1D3]">{'K'}</span>
              <span className="inline-block text-[#F38181] rotate-45 mx-1">{'N'}</span>
              <span className="inline-block text-[#AA96DA]">{'S'}</span>
              <span className="inline-block text-[#FCBAD3]">{'H'}</span>
              <span className="inline-block text-[#A8E6CF]">{'A'}</span>
              <span className="inline-block text-[#FFD93D]">{'R'}</span>
              <span className="inline-block text-[#4ECDC4]">{'E'}</span>
            </div>
          </Link>

          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              {'Book Consultation'}
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-6 bg-accent text-accent-foreground rotate-[-2deg]">
              {'Professional Services'}
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
              {'We Help You Create '}
              <span className="text-primary rotate-[2deg] inline-block">{'Amazing'}</span>
              {' Workspaces'}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {'From consultation to installation, we support you every step of the way'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow border-2 border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center rotate-[-3deg] shrink-0`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{'Starting from'}</p>
                      <p className="text-3xl font-black text-primary">
                        {service.price}
                        {service.price !== 'Custom' && (
                          <span className="text-lg text-muted-foreground ml-1">{'MAD'}</span>
                        )}
                      </p>
                    </div>
                    <Link href="/contact">
                      <Button variant="outline" className="rounded-full bg-transparent">
                        {'Get Started'}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {'Our '}
              <span className="text-accent rotate-[-2deg] inline-block">{'Process'}</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {'Simple steps to your perfect workspace'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 text-center h-full bg-card border-2 border-border">
                  <div className="text-7xl font-black text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {'What Our '}
              <span className="text-primary rotate-[2deg] inline-block">{'Clients'}</span>
              {' Say'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Fatima El Mansouri',
                company: 'Tech Startup',
                quote: 'WORKNSHARE transformed our office space. The floor planner made it so easy to visualize everything before purchasing.',
              },
              {
                name: 'Youssef Benchekroun',
                company: 'Marketing Agency',
                quote: 'Exceptional service from consultation to delivery. Our team loves the new workspace design.',
              },
              {
                name: 'Amina Alaoui',
                company: 'Law Firm',
                quote: 'Professional, creative, and efficient. They understood exactly what we needed for our executive offices.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card border-2 border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    {'"'}{testimonial.quote}{'"'}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {'Book a free consultation and let us help you create your perfect workspace'}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-12 py-6 rounded-full shadow-xl">
                {'Schedule Consultation'}
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
