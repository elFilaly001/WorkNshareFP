'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const puzzlePieces = [
  { id: 1, letter: 'W', color: 'bg-[#FF6B6B]', position: { x: 0, y: 0 } },
  { id: 2, letter: 'O', color: 'bg-[#4ECDC4]', position: { x: 1, y: 0 } },
  { id: 3, letter: 'R', color: 'bg-[#FFD93D]', position: { x: 2, y: 0 } },
  { id: 4, letter: 'K', color: 'bg-[#95E1D3]', position: { x: 3, y: 0 } },
  { id: 5, letter: 'N', color: 'bg-[#F38181]', position: { x: 0, y: 1 }, rotated: true },
  { id: 6, letter: 'S', color: 'bg-[#AA96DA]', position: { x: 1, y: 1 } },
  { id: 7, letter: 'H', color: 'bg-[#FCBAD3]', position: { x: 2, y: 1 } },
  { id: 8, letter: 'A', color: 'bg-[#A8E6CF]', position: { x: 3, y: 1 } },
  { id: 9, letter: 'R', color: 'bg-[#FFD93D]', position: { x: 4, y: 1 } },
  { id: 10, letter: 'E', color: 'bg-[#4ECDC4]', position: { x: 5, y: 1 } },
]

export default function PuzzleEntrance() {
  const router = useRouter()
  const [shuffledPieces, setShuffledPieces] = useState(puzzlePieces)
  const [isSolved, setIsSolved] = useState(false)
  const [selectedPieces, setSelectedPieces] = useState<number[]>([])

  useEffect(() => {
    // Shuffle pieces on mount
    const shuffled = [...puzzlePieces].sort(() => Math.random() - 0.5)
    setShuffledPieces(shuffled)
  }, [])

  const handlePieceClick = (pieceId: number) => {
    if (selectedPieces.length === 0) {
      setSelectedPieces([pieceId])
    } else if (selectedPieces.length === 1 && !selectedPieces.includes(pieceId)) {
      // Swap pieces
      const firstPieceIndex = shuffledPieces.findIndex(p => p.id === selectedPieces[0])
      const secondPieceIndex = shuffledPieces.findIndex(p => p.id === pieceId)
      
      const newPieces = [...shuffledPieces]
      ;[newPieces[firstPieceIndex], newPieces[secondPieceIndex]] = 
        [newPieces[secondPieceIndex], newPieces[firstPieceIndex]]
      
      setShuffledPieces(newPieces)
      setSelectedPieces([])
      
      // Check if solved
      const solved = newPieces.every((piece, index) => piece.id === puzzlePieces[index].id)
      if (solved) {
        setTimeout(() => setIsSolved(true), 500)
      }
    } else {
      setSelectedPieces([])
    }
  }

  const handleSkip = () => {
    router.push('/home')
  }

  const handleEnter = () => {
    router.push('/home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5E5] via-[#E0F7FA] to-[#FFF9C4] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#4ECDC4]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6B6B]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-36 h-36 bg-[#FFD93D]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {!isSolved ? (
            <motion.div
              key="puzzle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 text-foreground"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {'Solve the Puzzle to Enter'}
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-8 text-sm md:text-base"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {'Tap two pieces to swap them and reveal WORKNSHARE'}
              </motion.p>

              <div className="bg-card/80 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-2xl border-2 border-border max-w-2xl mx-auto">
                <div className="grid grid-cols-5 md:grid-cols-6 gap-2 md:gap-3 mb-8">
                  {shuffledPieces.map((piece, index) => (
                    <motion.button
                      key={piece.id}
                      onClick={() => handlePieceClick(piece.id)}
                      className={`
                        ${piece.color} 
                        aspect-square rounded-2xl md:rounded-3xl
                        flex items-center justify-center
                        text-2xl md:text-4xl font-black text-white
                        shadow-lg hover:shadow-xl
                        transition-all duration-200
                        ${selectedPieces.includes(piece.id) ? 'ring-4 ring-primary scale-95' : 'hover:scale-105'}
                        ${piece.rotated ? 'rotate-45' : ''}
                      `}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {piece.letter}
                    </motion.button>
                  ))}
                </div>

                <Button
                  onClick={handleSkip}
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto bg-transparent"
                >
                  {'Skip Puzzle'}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-center"
            >
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-6xl md:text-8xl font-black mb-6">
                  <span className="inline-block text-[#FF6B6B]">{'W'}</span>
                  <span className="inline-block text-[#4ECDC4]">{'O'}</span>
                  <span className="inline-block text-[#FFD93D]">{'R'}</span>
                  <span className="inline-block text-[#95E1D3]">{'K'}</span>
                  <span className="inline-block text-[#F38181] rotate-45 mx-2">{'N'}</span>
                  <span className="inline-block text-[#AA96DA]">{'S'}</span>
                  <span className="inline-block text-[#FCBAD3]">{'H'}</span>
                  <span className="inline-block text-[#A8E6CF]">{'A'}</span>
                  <span className="inline-block text-[#FFD93D]">{'R'}</span>
                  <span className="inline-block text-[#4ECDC4]">{'E'}</span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {'Design Your Perfect Workspace'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={handleEnter}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 rounded-full shadow-xl"
                >
                  {'Enter WORKNSHARE'}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
