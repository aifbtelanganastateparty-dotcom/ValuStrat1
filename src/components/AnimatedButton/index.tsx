import React, { ReactNode } from 'react';
import { useRippleEffect, useMagneticButton } from '../../hooks/useSmoothAnimations';
import styles from './AnimatedButton.module.css';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  magnetic?: boolean;
  ripple?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Enhanced button component with ripple and magnetic effects
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  magnetic = false,
  ripple = true,
  className = '',
  onClick,
  href,
  type = 'button',
}) => {
  const rippleRef = useRippleEffect();
  const magneticRef = useMagneticButton(0.3);
  const buttonRef = magnetic ? magneticRef.ref : rippleRef.ref;

  const baseClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      className={baseClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;

