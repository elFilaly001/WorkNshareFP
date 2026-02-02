'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 500)
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance">
              {'Let\'s Create '}
              <span className="text-primary rotate-[-2deg] inline-block">{'Together'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {'Get in touch with our team to start designing your perfect workspace'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-black mb-6">{'Contact Info'}</h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-card border-2 border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 rotate-[-3deg]">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{'Our Office'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {'123 Boulevard Mohammed V'}
                          <br />
                          {'Casablanca, Morocco'}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-2 border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 rotate-[3deg]">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{'Phone'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {'+212 5XX-XXXXXX'}
                          <br />
                          {'Mon-Fri 9am-6pm'}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-2 border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#4ECDC4] w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 rotate-[-3deg]">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{'Email'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {'info@worknshare.ma'}
                          <br />
                          {'sales@worknshare.ma'}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-2 border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FFD93D] w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 rotate-[3deg]">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{'Business Hours'}</h3>
                        <p className="text-sm text-muted-foreground">
                          {'Monday - Friday'}
                          <br />
                          {'9:00 AM - 6:00 PM'}
                          <br />
                          {'Saturday: 10:00 AM - 2:00 PM'}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 lg:p-12 bg-card border-2 border-border shadow-xl">
                  {!formSubmitted ? (
                    <>
                      <h2 className="text-3xl font-black mb-2">{'Send Us a Message'}</h2>
                      <p className="text-muted-foreground mb-8">
                        {'Fill out the form below and we\'ll get back to you within 24 hours'}
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name">{'Full Name'} *</Label>
                            <Input
                              id="name"
                              required
                              placeholder="Your name"
                              value={formData.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">{'Email'} *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone">{'Phone'}</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+212 XXX-XXXXXX"
                              value={formData.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">{'Company'}</Label>
                            <Input
                              id="company"
                              placeholder="Your company"
                              value={formData.company}
                              onChange={(e) => handleChange('company', e.target.value)}
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="service">{'Service Interested In'}</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleChange('service', value)}
                          >
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="floor-planning">{'Floor Planning & Design'}</SelectItem>
                              <SelectItem value="consultation">{'Virtual Consultation'}</SelectItem>
                              <SelectItem value="delivery">{'Delivery & Installation'}</SelectItem>
                              <SelectItem value="maintenance">{'Maintenance & Support'}</SelectItem>
                              <SelectItem value="general">{'General Inquiry'}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">{'Message'} *</Label>
                          <Textarea
                            id="message"
                            required
                            placeholder="Tell us about your project..."
                            rows={6}
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            className="mt-2"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full shadow-xl"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          {'Send Message'}
                        </Button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-12"
                    >
                      <div className="bg-accent/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-12 w-12 text-accent" />
                      </div>
                      <h2 className="text-4xl font-black mb-4">{'Message Sent!'}</h2>
                      <p className="text-xl text-muted-foreground mb-8">
                        {'Thank you for reaching out. We\'ll get back to you within 24 hours.'}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          onClick={() => setFormSubmitted(false)}
                          variant="outline"
                          size="lg"
                          className="rounded-full"
                        >
                          {'Send Another Message'}
                        </Button>
                        <Link href="/home">
                          <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-full sm:w-auto"
                          >
                            {'Back to Home'}
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-2 border-border">
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/40 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-2xl font-bold text-foreground">{'Visit Our Showroom'}</p>
                <p className="text-muted-foreground">{'123 Boulevard Mohammed V, Casablanca'}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
