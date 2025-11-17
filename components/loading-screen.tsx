"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [routeLoading, setRouteLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Simulate initialization (replace with actual logic)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setTimeout(() => setRouteLoading(false), 500) // Small delay for smooth transition
    }

    // Listen to router events
    const originalPush = router.push
    const originalReplace = router.replace

    router.push = (...args) => {
      handleRouteChangeStart()
      return originalPush(...args)
    }

    router.replace = (...args) => {
      handleRouteChangeStart()
      return originalReplace(...args)
    }

    // Handle back/forward navigation
    const handlePopState = () => {
      handleRouteChangeStart()
      setTimeout(handleRouteChangeComplete, 1000) // Simulate loading time
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      router.push = originalPush
      router.replace = originalReplace
      window.removeEventListener('popstate', handlePopState)
    }
  }, [router])

  const letters = ['C', 'N', '1']
  const showLoading = isLoading || routeLoading

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          {/* Techy background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* CN1 Logo */}
          <div className="relative text-6xl font-bold font-mono mb-4 flex z-10">
            {letters.map((letter, index) => (
              <motion.span
                key={letter}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: [0.5, 1.2, 1],
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  ease: "easeOut",
                  scale: {
                    times: [0, 0.6, 1],
                    ease: "easeOut",
                  },
                }}
                className="inline-block text-foreground drop-shadow-lg"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
            }}
            className="mt-4 text-muted-foreground font-mono text-sm z-10"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
