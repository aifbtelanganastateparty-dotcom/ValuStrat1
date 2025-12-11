import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseClassName = variant === 'primary' ? styles.primary : styles.secondary
  const combinedClassName = `${baseClassName} ${className}`.trim()

  const buttonContent = (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  )
}

export default Button

