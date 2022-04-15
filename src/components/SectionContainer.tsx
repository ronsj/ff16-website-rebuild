import { useAnimation, motion } from 'framer-motion'
import { CSSProperties, ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export type SectionContainerProps = {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function SectionContainer({
  className = '',
  children,
  style,
}: SectionContainerProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1, top: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, top: '1rem' },
  }

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={`${className}`}
      style={style}
    >
      {children}
    </motion.section>
  )
}
