'use client'

import { useState, useRef } from 'react'
import { motion, PanInfo } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ArrowLeft,
  Plus,
  Trash2,
  Download,
  Share2,
  RotateCw,
  Grid3x3,
  Maximize2,
  Copy,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'

interface FurnitureItem {
  id: string
  type: string
  name: string
  width: number
  height: number
  x: number
  y: number
  rotation: number
  color: string
  price: number
}

const furnitureTemplates = [
  { type: 'desk', name: 'Modern Desk', width: 160, height: 80, color: '#C4A574', price: 2800 },
  { type: 'l-desk', name: 'L-Shape Desk', width: 180, height: 140, color: '#B8956A', price: 4500 },
  { type: 'chair', name: 'Office Chair', width: 65, height: 65, color: '#5DADE2', price: 1500 },
  { type: 'meeting-table', name: 'Meeting Table', width: 240, height: 120, color: '#D4AF87', price: 5000 },
  { type: 'round-table', name: 'Round Table', width: 120, height: 120, color: '#DDB892', price: 3200 },
  { type: 'storage', name: 'Cabinet', width: 50, height: 80, color: '#95A5A6', price: 1200 },
  { type: 'shelf', name: 'Bookshelf', width: 100, height: 40, color: '#A3B8C2', price: 900 },
  { type: 'sofa', name: 'Lounge Sofa', width: 200, height: 90, color: '#E8A598', price: 6500 },
  { type: 'plant', name: 'Plant', width: 40, height: 40, color: '#82C896', price: 300 },
]

const GRID_SIZE = 20
const SCALE = 2.5

// Furniture rendering components
const FurnitureShape = ({ item, isRotated }: { item: FurnitureItem, isRotated: boolean }) => {
  const w = isRotated ? item.height : item.width
  const h = isRotated ? item.width : item.height

  switch (item.type) {
    case 'desk':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <linearGradient id={`desk-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.7 }} />
            </linearGradient>
            <filter id={`shadow-${item.id}`}>
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          {/* Main desktop */}
          <rect x="0" y="0" width={w} height={h} fill={`url(#desk-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" rx="4" filter={`url(#shadow-${item.id})`} />
          {/* Wood grain texture */}
          <rect x="4" y="4" width={w - 8} height={h - 8} fill="none" stroke="#2C3E50" strokeWidth="0.5" strokeOpacity="0.15" rx="3" />
          {/* Left drawer unit */}
          <g>
            <rect x={w * 0.06} y={h * 0.25} width={w * 0.22} height={h * 0.18} fill="#34495E" fillOpacity="0.15" stroke="#2C3E50" strokeWidth="1.5" rx="2" />
            <rect x={w * 0.06} y={h * 0.55} width={w * 0.22} height={h * 0.18} fill="#34495E" fillOpacity="0.15" stroke="#2C3E50" strokeWidth="1.5" rx="2" />
            <circle cx={w * 0.17} cy={h * 0.34} r="2.5" fill="#2C3E50" />
            <circle cx={w * 0.17} cy={h * 0.64} r="2.5" fill="#2C3E50" />
          </g>
          {/* Monitor stand area */}
          <rect x={w * 0.38} y={h * 0.15} width={w * 0.24} height={h * 0.08} fill="#34495E" fillOpacity="0.1" stroke="#2C3E50" strokeWidth="1" strokeDasharray="2,2" rx="2" />
          {/* Keyboard tray indicator */}
          <line x1={w * 0.35} y1={h * 0.85} x2={w * 0.65} y2={h * 0.85} stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        </svg>
      )

    case 'l-desk':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <linearGradient id={`l-desk-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.75 }} />
            </linearGradient>
          </defs>
          {/* Horizontal part */}
          <rect x="0" y="0" width={w} height={h * 0.57} fill={`url(#l-desk-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" rx="4" />
          {/* Vertical part */}
          <rect x="0" y="0" width={w * 0.5} height={h} fill={`url(#l-desk-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" rx="4" />
          {/* Corner radius fix */}
          <rect x="0" y="0" width={w * 0.5} height={h * 0.57} fill={item.color} stroke="none" />
          <rect x="0" y="0" width={w * 0.5} height={h * 0.57} fill="none" stroke="#2C3E50" strokeWidth="2" />
          {/* Drawer details */}
          <rect x={w * 0.05} y={h * 0.7} width={w * 0.15} height={h * 0.12} fill="#34495E" fillOpacity="0.15" stroke="#2C3E50" strokeWidth="1.5" rx="2" />
          <circle cx={w * 0.125} cy={h * 0.76} r="2" fill="#2C3E50" />
        </svg>
      )

    case 'chair':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <radialGradient id={`chair-grad-${item.id}`}>
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.6 }} />
            </radialGradient>
          </defs>
          {/* Chair base with wheels */}
          <circle cx={w * 0.5} cy={h * 0.85} r={w * 0.38} fill="none" stroke="#34495E" strokeWidth="2" />
          <circle cx={w * 0.5} cy={h * 0.5} r="2.5" fill="#34495E" />
          <circle cx={w * 0.2} cy={h * 0.92} r="3" fill="#2C3E50" />
          <circle cx={w * 0.8} cy={h * 0.92} r="3" fill="#2C3E50" />
          <circle cx={w * 0.5} cy={h * 0.65} r="3" fill="#2C3E50" />
          <circle cx={w * 0.35} cy={h * 0.75} r="3" fill="#2C3E50" />
          <circle cx={w * 0.65} cy={h * 0.75} r="3" fill="#2C3E50" />
          {/* Seat */}
          <ellipse cx={w * 0.5} cy={h * 0.5} rx={w * 0.4} ry={h * 0.35} fill={`url(#chair-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" />
          <ellipse cx={w * 0.5} cy={h * 0.5} rx={w * 0.3} ry={h * 0.25} fill="none" stroke="#2C3E50" strokeWidth="1" opacity="0.3" />
          {/* Backrest */}
          <path d={`M ${w * 0.25} ${h * 0.35} Q ${w * 0.25} ${h * 0.05} ${w * 0.5} ${h * 0.05} T ${w * 0.75} ${h * 0.35}`} fill={item.color} stroke="#2C3E50" strokeWidth="2" />
          {/* Armrests */}
          <rect x={w * 0.15} y={h * 0.35} width="4" height={h * 0.2} fill="#2C3E50" rx="2" />
          <rect x={w * 0.81} y={h * 0.35} width="4" height={h * 0.2} fill="#2C3E50" rx="2" />
        </svg>
      )

    case 'meeting-table':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <linearGradient id={`table-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.75 }} />
            </linearGradient>
          </defs>
          {/* Table top */}
          <rect x="0" y="0" width={w} height={h} fill={`url(#table-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2.5" rx="8" />
          <rect x="5" y="5" width={w - 10} height={h - 10} fill="none" stroke="#2C3E50" strokeWidth="0.5" strokeOpacity="0.2" rx="6" />
          {/* Table legs */}
          <rect x={w * 0.1} y={h * 0.15} width="6" height={h * 0.7} fill="#34495E" rx="3" />
          <rect x={w * 0.9 - 6} y={h * 0.15} width="6" height={h * 0.7} fill="#34495E" rx="3" />
          {/* Center line detail */}
          <line x1={w * 0.5} y1={h * 0.1} x2={w * 0.5} y2={h * 0.9} stroke="#2C3E50" strokeWidth="1" strokeDasharray="4,4" opacity="0.2" />
        </svg>
      )

    case 'round-table':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <radialGradient id={`round-table-grad-${item.id}`}>
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.7 }} />
            </radialGradient>
          </defs>
          {/* Table top */}
          <circle cx={w / 2} cy={h / 2} r={Math.min(w, h) / 2} fill={`url(#round-table-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2.5" />
          <circle cx={w / 2} cy={h / 2} r={Math.min(w, h) / 2 - 8} fill="none" stroke="#2C3E50" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* Center pedestal */}
          <circle cx={w / 2} cy={h / 2} r={Math.min(w, h) / 8} fill="#34495E" stroke="#2C3E50" strokeWidth="2" />
        </svg>
      )

    case 'storage':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <linearGradient id={`storage-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          {/* Cabinet body */}
          <rect x="0" y="0" width={w} height={h} fill={`url(#storage-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" rx="3" />
          {/* Double doors */}
          <line x1={w / 2} y1="0" x2={w / 2} y2={h} stroke="#2C3E50" strokeWidth="2.5" />
          {/* Handles */}
          <rect x={w * 0.35} y={h * 0.48} width="2" height={h * 0.08} fill="#2C3E50" rx="1" />
          <rect x={w * 0.63} y={h * 0.48} width="2" height={h * 0.08} fill="#2C3E50" rx="1" />
          {/* Shelf lines */}
          <line x1="5" y1={h * 0.33} x2={w - 5} y2={h * 0.33} stroke="#2C3E50" strokeWidth="1" opacity="0.3" />
          <line x1="5" y1={h * 0.67} x2={w - 5} y2={h * 0.67} stroke="#2C3E50" strokeWidth="1" opacity="0.3" />
          {/* Top detail */}
          <rect x="0" y="0" width={w} height="5" fill="#34495E" fillOpacity="0.2" />
        </svg>
      )

    case 'shelf':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <linearGradient id={`shelf-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          {/* Back panel */}
          <rect x="0" y="0" width={w} height={h} fill={`url(#shelf-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" rx="2" />
          {/* Shelves */}
          <rect x="3" y={h * 0.3} width={w - 6} height="4" fill="#34495E" stroke="#2C3E50" strokeWidth="1" />
          <rect x="3" y={h * 0.65} width={w - 6} height="4" fill="#34495E" stroke="#2C3E50" strokeWidth="1" />
          {/* Books/items representation */}
          {[...Array(5)].map((_, i) => (
            <rect key={i} x={5 + i * (w / 6)} y={h * 0.35} width={w / 8} height={h * 0.25} fill="#E74C3C" fillOpacity="0.6" stroke="#2C3E50" strokeWidth="0.5" rx="1" />
          ))}
        </svg>
      )

    case 'sofa':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <linearGradient id={`sofa-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>
          {/* Sofa back */}
          <rect x="0" y="0" width={w} height={h * 0.5} fill={`url(#sofa-grad-${item.id})`} stroke="#2C3E50" strokeWidth="2" rx="6" />
          {/* Sofa seat */}
          <rect x="0" y={h * 0.35} width={w} height={h * 0.5} fill={item.color} stroke="#2C3E50" strokeWidth="2" rx="4" />
          {/* Armrests */}
          <rect x="0" y={h * 0.25} width={w * 0.12} height={h * 0.6} fill={item.color} stroke="#2C3E50" strokeWidth="2" rx="4" />
          <rect x={w * 0.88} y={h * 0.25} width={w * 0.12} height={h * 0.6} fill={item.color} stroke="#2C3E50" strokeWidth="2" rx="4" />
          {/* Cushion lines */}
          <line x1={w * 0.33} y1={h * 0.4} x2={w * 0.33} y2={h * 0.85} stroke="#2C3E50" strokeWidth="1.5" opacity="0.4" />
          <line x1={w * 0.67} y1={h * 0.4} x2={w * 0.67} y2={h * 0.85} stroke="#2C3E50" strokeWidth="1.5" opacity="0.4" />
          {/* Legs */}
          <rect x={w * 0.15} y={h * 0.9} width="5" height={h * 0.1} fill="#2C3E50" rx="1" />
          <rect x={w * 0.8} y={h * 0.9} width="5" height={h * 0.1} fill="#2C3E50" rx="1" />
        </svg>
      )

    case 'plant':
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} className="drop-shadow-lg">
          <defs>
            <radialGradient id={`plant-grad-${item.id}`}>
              <stop offset="0%" style={{ stopColor: item.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: item.color, stopOpacity: 0.6 }} />
            </radialGradient>
          </defs>
          {/* Pot */}
          <path d={`M ${w * 0.25} ${h * 0.6} L ${w * 0.2} ${h} L ${w * 0.8} ${h} L ${w * 0.75} ${h * 0.6} Z`} fill="#D35400" stroke="#2C3E50" strokeWidth="1.5" />
          {/* Soil */}
          <ellipse cx={w / 2} cy={h * 0.6} rx={w * 0.27} ry={h * 0.08} fill="#8B4513" stroke="#2C3E50" strokeWidth="1" />
          {/* Leaves */}
          <ellipse cx={w * 0.5} cy={h * 0.3} rx={w * 0.35} ry={h * 0.35} fill={`url(#plant-grad-${item.id})`} stroke="#27AE60" strokeWidth="1.5" />
          <ellipse cx={w * 0.35} cy={h * 0.25} rx={w * 0.25} ry={h * 0.25} fill={item.color} fillOpacity="0.8" stroke="#27AE60" strokeWidth="1.5" />
          <ellipse cx={w * 0.65} cy={h * 0.25} rx={w * 0.25} ry={h * 0.25} fill={item.color} fillOpacity="0.8" stroke="#27AE60" strokeWidth="1.5" />
          <ellipse cx={w * 0.5} cy={h * 0.15} rx={w * 0.2} ry={h * 0.2} fill={`url(#plant-grad-${item.id})`} stroke="#27AE60" strokeWidth="1.5" />
        </svg>
      )

    default:
      return (
        <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`}>
          <rect x="0" y="0" width={w} height={h} fill={item.color} stroke="#2C3E50" strokeWidth="2" rx="4" />
        </svg>
      )
  }
}

export default function FloorPlannerPage() {
  const [roomWidth, setRoomWidth] = useState(700)
  const [roomHeight, setRoomHeight] = useState(500)
  const [furniture, setFurniture] = useState<FurnitureItem[]>([])
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [showGrid, setShowGrid] = useState(true)
  const [zoom, setZoom] = useState(1)
  const canvasRef = useRef<HTMLDivElement>(null)

  const addFurniture = (template: typeof furnitureTemplates[0]) => {
    const newItem: FurnitureItem = {
      id: `${template.type}-${Date.now()}`,
      type: template.type,
      name: template.name,
      width: template.width,
      height: template.height,
      x: Math.min(50 + Math.random() * 100, roomWidth - template.width),
      y: Math.min(50 + Math.random() * 100, roomHeight - template.height),
      rotation: 0,
      color: template.color,
      price: template.price,
    }
    setFurniture(prev => [...prev, newItem])
    setSelectedItem(newItem.id)
  }

  const duplicateFurniture = (id: string) => {
    setFurniture(prev => {
      const itemToDuplicate = prev.find(item => item.id === id)
      if (!itemToDuplicate) return prev

      const itemWidth = (itemToDuplicate.rotation === 90 || itemToDuplicate.rotation === 270) 
        ? itemToDuplicate.height 
        : itemToDuplicate.width
      const itemHeight = (itemToDuplicate.rotation === 90 || itemToDuplicate.rotation === 270) 
        ? itemToDuplicate.width 
        : itemToDuplicate.height

      const newX = Math.min(itemToDuplicate.x + 30, roomWidth - itemWidth)
      const newY = Math.min(itemToDuplicate.y + 30, roomHeight - itemHeight)

      // Don't duplicate if it would be out of bounds
      if (newX + itemWidth > roomWidth || newY + itemHeight > roomHeight) {
        return prev
      }

      const newItem: FurnitureItem = {
        ...itemToDuplicate,
        id: `${itemToDuplicate.type}-${Date.now()}`,
        x: newX,
        y: newY,
      }
      
      setSelectedItem(newItem.id)
      return [...prev, newItem]
    })
  }

  const deleteFurniture = (id: string) => {
    setFurniture(prev => prev.filter(item => item.id !== id))
    if (selectedItem === id) setSelectedItem(null)
  }

  const rotateFurniture = (id: string) => {
    setFurniture(prevFurniture =>
      prevFurniture
        .map(item => {
          if (item.id !== id) return item

          const newRotation = (item.rotation + 90) % 360
          const isRotated = newRotation === 90 || newRotation === 270
          const itemWidth = isRotated ? item.height : item.width
          const itemHeight = isRotated ? item.width : item.height

          // Remove if rotation causes item to go out of bounds
          if (item.x + itemWidth > roomWidth || item.y + itemHeight > roomHeight) {
            return null
          }

          return { ...item, rotation: newRotation }
        })
        .filter((item): item is FurnitureItem => item !== null)
    )
  }

  // Remove items when room size shrinks
  const handleRoomResize = (width: number, height: number) => {
    setRoomWidth(width)
    setRoomHeight(height)
    
    setFurniture(prevFurniture =>
      prevFurniture.filter(item => {
        const itemWidth = (item.rotation === 90 || item.rotation === 270) ? item.height : item.width
        const itemHeight = (item.rotation === 90 || item.rotation === 270) ? item.width : item.height
        return item.x + itemWidth <= width && item.y + itemHeight <= height
      })
    )
  }

  const handleDragEnd = (id: string, _event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setFurniture(prevFurniture => 
      prevFurniture
        .map(item => {
          if (item.id !== id) return item

          // Calculate new position accounting for zoom and scale
          let newX = item.x + (info.offset.x / zoom) / SCALE
          let newY = item.y + (info.offset.y / zoom) / SCALE

          // Apply grid snapping if enabled
          if (showGrid) {
            newX = Math.round(newX / GRID_SIZE) * GRID_SIZE
            newY = Math.round(newY / GRID_SIZE) * GRID_SIZE
          }

          // Get item dimensions considering rotation
          const itemWidth = (item.rotation === 90 || item.rotation === 270) ? item.height : item.width
          const itemHeight = (item.rotation === 90 || item.rotation === 270) ? item.width : item.height

          // Check if item is within bounds
          const isOutOfBounds = 
            newX < 0 || 
            newY < 0 || 
            newX + itemWidth > roomWidth || 
            newY + itemHeight > roomHeight

          // Remove item if out of bounds, otherwise update position
          if (isOutOfBounds) {
            return null
          }

          return { ...item, x: newX, y: newY }
        })
        .filter((item): item is FurnitureItem => item !== null)
    )
    
    // Clear selection if item was removed
    const movedItem = furniture.find(item => item.id === id)
    if (movedItem) {
      const itemWidth = (movedItem.rotation === 90 || movedItem.rotation === 270) ? movedItem.height : movedItem.width
      const itemHeight = (movedItem.rotation === 90 || movedItem.rotation === 270) ? movedItem.width : movedItem.height
      const newX = movedItem.x + (info.offset.x / zoom) / SCALE
      const newY = movedItem.y + (info.offset.y / zoom) / SCALE
      const isOutOfBounds = newX < 0 || newY < 0 || newX + itemWidth > roomWidth || newY + itemHeight > roomHeight
      if (isOutOfBounds && selectedItem === id) {
        setSelectedItem(null)
      }
    }
  }

  const totalCost = furniture.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg">
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => alert('Share functionality')} className="hidden md:inline-flex bg-transparent hover:bg-primary hover:text-primary-foreground">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button size="sm" onClick={() => alert('Export to PDF')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full lg:w-96 bg-card/50 backdrop-blur-sm border-b lg:border-b-0 lg:border-r-2 border-primary/20 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Floor Planner
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drag furniture onto the canvas to design your perfect workspace
              </p>
            </div>

            {/* Room Settings */}
            <Card className="p-5 bg-gradient-to-br from-secondary/50 to-secondary/30 border-2 border-primary/10">
              <h3 className="font-black mb-4 flex items-center gap-2 text-lg">
                <Maximize2 className="h-5 w-5 text-primary" />
                Room Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="width" className="text-xs font-bold text-muted-foreground mb-2">
                    Width (cm)
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    value={roomWidth}
                    onChange={(e) => handleRoomResize(Number(e.target.value), roomHeight)}
                    min={300}
                    max={1500}
                    className="font-bold"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-xs font-bold text-muted-foreground mb-2">
                    Height (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={roomHeight}
                    onChange={(e) => handleRoomResize(roomWidth, Number(e.target.value))}
                    min={300}
                    max={1500}
                    className="font-bold"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="grid"
                      checked={showGrid}
                      onChange={(e) => setShowGrid(e.target.checked)}
                      className="w-4 h-4 rounded border-2 border-primary"
                    />
                    <Label htmlFor="grid" className="text-sm font-bold cursor-pointer">
                      Snap to Grid
                    </Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="outline" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))} className="p-2 bg-transparent">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-xs font-bold px-2">{Math.round(zoom * 100)}%</span>
                    <Button size="sm" variant="outline" onClick={() => setZoom(Math.min(2, zoom + 0.1))} className="p-2 bg-transparent">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Furniture Library */}
            <div>
              <h3 className="font-black mb-4 flex items-center gap-2 text-lg">
                <Grid3x3 className="h-5 w-5 text-primary" />
                Furniture Library
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {furnitureTemplates.map((template) => (
                  <motion.button
                    key={template.type}
                    onClick={() => addFurniture(template)}
                    className="p-4 bg-gradient-to-br from-card to-secondary/30 border-2 border-border hover:border-primary rounded-2xl transition-all text-left group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="w-full aspect-square rounded-xl mb-3 flex items-center justify-center border-2 border-border group-hover:border-primary transition-all shadow-lg"
                      style={{ backgroundColor: template.color }}
                    >
                      <Plus className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    <p className="font-bold text-sm line-clamp-1">{template.name}</p>
                    <p className="text-xs text-muted-foreground font-semibold">
                      {template.width}×{template.height}cm
                    </p>
                    <p className="text-xs font-black text-primary mt-1">
                      {template.price.toLocaleString()} MAD
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Current Items */}
            {furniture.length > 0 && (
              <div>
                <h3 className="font-black mb-3 text-lg">Current Items ({furniture.length})</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {furniture.map((item) => (
                    <Card
                      key={item.id}
                      className={`p-3 cursor-pointer transition-all hover:scale-[1.02] ${
                        selectedItem === item.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/30'
                      }`}
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-12 h-12 rounded-lg border-2 border-border shadow-md"
                            style={{ backgroundColor: item.color }}
                          />
                          <div>
                            <p className="font-bold text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground font-semibold">
                              {item.width}×{item.height}cm
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation()
                              duplicateFurniture(item.id)
                            }}
                            className="hover:bg-primary/10"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation()
                              rotateFurniture(item.id)
                            }}
                            className="hover:bg-primary/10"
                          >
                            <RotateCw className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteFurniture(item.id)
                            }}
                            className="hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="flex items-center justify-center min-h-full">
            <div
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center',
                transition: 'transform 0.2s',
              }}
            >
              <Card className="p-6 bg-card shadow-2xl border-4 border-primary/20">
                <div
                  ref={canvasRef}
                  className="relative bg-white border-4 border-border rounded-lg overflow-hidden"
                  style={{
                    width: `${roomWidth * SCALE}px`,
                    height: `${roomHeight * SCALE}px`,
                    backgroundImage: showGrid
                      ? `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`
                      : 'none',
                    backgroundSize: showGrid ? `${GRID_SIZE * SCALE}px ${GRID_SIZE * SCALE}px` : 'auto',
                  }}
                >
                  {/* Room label */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-black shadow-lg">
                    {roomWidth}cm × {roomHeight}cm
                  </div>

                  {furniture.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                      <div className="space-y-2">
                        <Grid3x3 className="h-16 w-16 text-muted-foreground/30 mx-auto" />
                        <p className="text-lg font-bold text-muted-foreground">
                          Start designing your workspace
                        </p>
                        <p className="text-sm text-muted-foreground/70">
                          Click on furniture items to add them to your floor plan
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Furniture */}
                  {furniture.map((item) => {
                    const isSelected = selectedItem === item.id
                    const isRotated = item.rotation === 90 || item.rotation === 270

                    return (
                      <motion.div
                        key={item.id}
                        drag
                        dragMomentum={false}
                        dragElastic={0}
                        onDragEnd={(e, info) => handleDragEnd(item.id, e, info)}
                        onClick={() => setSelectedItem(item.id)}
                        className={`absolute cursor-move transition-all ${
                          isSelected ? 'ring-4 ring-primary z-20 shadow-2xl' : 'hover:ring-2 hover:ring-primary/50 z-10'
                        }`}
                        style={{
                          left: `${item.x * SCALE}px`,
                          top: `${item.y * SCALE}px`,
                          width: `${(isRotated ? item.height : item.width) * SCALE}px`,
                          height: `${(isRotated ? item.width : item.height) * SCALE}px`,
                          transform: `rotate(${item.rotation}deg)`,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FurnitureShape item={item} isRotated={isRotated} />
                        
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-black whitespace-nowrap shadow-lg"
                          >
                            {isRotated ? `${item.height}×${item.width}` : `${item.width}×${item.height}`}cm
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
