'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Search, Plus, Check } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Modern Executive Desk',
    category: 'desks',
    price: 3500,
    dimensions: '180x80cm',
    available: true,
    color: '#8B7355',
    description: 'Spacious executive desk with cable management'
  },
  {
    id: 2,
    name: 'Standing Desk',
    category: 'desks',
    price: 4200,
    dimensions: '160x70cm',
    available: true,
    color: '#F5E6D3',
    description: 'Adjustable height standing desk'
  },
  {
    id: 3,
    name: 'Compact Workstation',
    category: 'desks',
    price: 2100,
    dimensions: '120x60cm',
    available: true,
    color: '#4A4A4A',
    description: 'Perfect for small spaces'
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    category: 'chairs',
    price: 1800,
    dimensions: '65x65cm',
    available: true,
    color: '#2C3E50',
    description: 'Full back support with lumbar adjustment'
  },
  {
    id: 5,
    name: 'Executive Leather Chair',
    category: 'chairs',
    price: 2500,
    dimensions: '70x70cm',
    available: true,
    color: '#654321',
    description: 'Premium leather with memory foam'
  },
  {
    id: 6,
    name: 'Mesh Task Chair',
    category: 'chairs',
    price: 1200,
    dimensions: '60x60cm',
    available: true,
    color: '#4ECDC4',
    description: 'Breathable mesh for all-day comfort'
  },
  {
    id: 7,
    name: 'Filing Cabinet',
    category: 'storage',
    price: 900,
    dimensions: '45x50x70cm',
    available: true,
    color: '#7F8C8D',
    description: '3-drawer mobile filing cabinet'
  },
  {
    id: 8,
    name: 'Bookshelf Unit',
    category: 'storage',
    price: 1500,
    dimensions: '90x30x180cm',
    available: true,
    color: '#D4A574',
    description: '5-tier open storage unit'
  },
  {
    id: 9,
    name: 'Storage Credenza',
    category: 'storage',
    price: 3200,
    dimensions: '160x45x75cm',
    available: false,
    color: '#34495E',
    description: 'Sliding door credenza with shelves'
  },
  {
    id: 10,
    name: 'Meeting Table',
    category: 'tables',
    price: 5500,
    dimensions: '240x120cm',
    available: true,
    color: '#8B7355',
    description: '8-person conference table'
  },
  {
    id: 11,
    name: 'Collaboration Table',
    category: 'tables',
    price: 3800,
    dimensions: '180x90cm',
    available: true,
    color: '#F5E6D3',
    description: 'Versatile team workspace'
  },
  {
    id: 12,
    name: 'Side Table',
    category: 'tables',
    price: 650,
    dimensions: '60x60cm',
    available: true,
    color: '#ECF0F1',
    description: 'Modern coffee table'
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleCart = (productId: number) => {
    setCart(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const totalPrice = cart.reduce((sum, id) => {
    const product = products.find(p => p.id === id)
    return sum + (product?.price || 0)
  }, 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              {'Our '}
              <span className="text-primary rotate-[-2deg] inline-block">{'Furniture'}</span>
              {' Catalog'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {'Browse our curated collection of modern office furniture. Add items to see pricing in your floor plan.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] z-40 bg-card/95 backdrop-blur-lg border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search furniture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] rounded-full">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{'All Categories'}</SelectItem>
                <SelectItem value="desks">{'Desks'}</SelectItem>
                <SelectItem value="chairs">{'Chairs'}</SelectItem>
                <SelectItem value="storage">{'Storage'}</SelectItem>
                <SelectItem value="tables">{'Tables'}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">{'No products found'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => {
                const inCart = cart.includes(product.id)
                
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                      {/* Product Visual */}
                      <div 
                        className="aspect-square relative overflow-hidden"
                        style={{ backgroundColor: product.color }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-2/3 h-2/3 bg-white/10 backdrop-blur-sm rounded-2xl border-4 border-white/20"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            {/* Illustrated furniture representation */}
                            {product.category === 'desks' && (
                              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                                <rect x="10" y="60" width="80" height="8" fill="white" opacity="0.8" rx="2" />
                                <rect x="15" y="68" width="4" height="25" fill="white" opacity="0.6" />
                                <rect x="81" y="68" width="4" height="25" fill="white" opacity="0.6" />
                              </svg>
                            )}
                            {product.category === 'chairs' && (
                              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                                <rect x="30" y="20" width="40" height="30" fill="white" opacity="0.8" rx="4" />
                                <rect x="30" y="50" width="40" height="8" fill="white" opacity="0.8" rx="2" />
                                <rect x="35" y="58" width="4" height="25" fill="white" opacity="0.6" />
                                <rect x="61" y="58" width="4" height="25" fill="white" opacity="0.6" />
                              </svg>
                            )}
                            {product.category === 'storage' && (
                              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                                <rect x="25" y="20" width="50" height="60" fill="white" opacity="0.8" rx="4" />
                                <line x1="30" y1="40" x2="70" y2="40" stroke="white" strokeWidth="2" opacity="0.4" />
                                <line x1="30" y1="60" x2="70" y2="60" stroke="white" strokeWidth="2" opacity="0.4" />
                              </svg>
                            )}
                            {product.category === 'tables' && (
                              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                                <ellipse cx="50" cy="45" rx="40" ry="10" fill="white" opacity="0.8" />
                                <rect x="48" y="55" width="4" height="30" fill="white" opacity="0.6" />
                              </svg>
                            )}
                          </motion.div>
                        </div>
                        
                        {!product.available && (
                          <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                            {'Out of Stock'}
                          </Badge>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2 capitalize">
                            {product.category}
                          </Badge>
                          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {product.description}
                          </p>
                          <p className="text-xs text-muted-foreground mb-3">
                            {'Dimensions: '}{product.dimensions}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <span className="text-2xl font-black text-primary">
                            {product.price.toLocaleString()}
                            <span className="text-sm text-muted-foreground ml-1">{'MAD'}</span>
                          </span>
                          <Button
                            size="sm"
                            onClick={() => toggleCart(product.id)}
                            disabled={!product.available}
                            className={
                              inCart
                                ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                                : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                            }
                          >
                            {inCart ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                {'Added'}
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-1" />
                                {'Add'}
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Summary */}
      {cart.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Card className="p-6 shadow-2xl border-2 border-border bg-card">
            <div className="flex flex-col gap-4 min-w-[280px]">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{'Shopping Cart'}</p>
                <p className="text-3xl font-black text-foreground">
                  {totalPrice.toLocaleString()}
                  <span className="text-lg text-muted-foreground ml-2">{'MAD'}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <Link href="/planner">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                  {'Add to Floor Plan'}
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
