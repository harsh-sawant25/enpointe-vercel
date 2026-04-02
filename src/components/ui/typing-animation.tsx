"use client"

import type React from "react"
import { cn } from "../../../lib/utils";
import { motion, type MotionProps } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface TypingAnimationProps extends MotionProps {
  words: string[] // Accept multiple words
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
}

export function TypingAnimation({
  words,
  className,
  duration = 200,
  delay = 0,
  as: Component = "div",
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  })

  const [displayedText, setDisplayedText] = useState<string>("")
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [started, setStarted] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let i = 0
    const currentWord = words[wordIndex]

    const typingEffect = setInterval(() => {
      if (i < currentWord.length) {
        setDisplayedText(currentWord.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)

        // Pause before fading
        setTimeout(() => {
          let j = currentWord.length;
          const fadeOut = setInterval(() => {
            if (j > 0) {
              setDisplayedText(currentWord.slice(0, j - 1));
              j--;
            } else {
              clearInterval(fadeOut);
              // Move to the next word after fading is complete
              setTimeout(() => {
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
              }, 100); // Small delay to ensure state update
            }
          }, 50);
        }, 1000); // 1 second pause before fading
      }
    }, duration)

    return () => clearInterval(typingEffect)
  }, [words, wordIndex, duration, started])

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        "bg-clip-text text-transparent font-bold",
        "leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-loose xl:leading-[5rem]",
        "tracking-[-0.02em]",
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(90deg, #FF33CC 45%, #0055FF 55%)',
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      {...props}
    >
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </MotionComponent>
  )
}