"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="transition-opacity duration-1000" style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </div>
  )
}
