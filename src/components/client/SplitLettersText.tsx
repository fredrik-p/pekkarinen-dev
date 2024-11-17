'use client';

import { useEffect } from 'react';
import { splitLetters } from '@/utils/splitLetters';

interface SplitLettersTextProps {
  text: string;
  className?: string;
  component?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SplitLettersText({ 
  text, 
  className = '', 
  component: Component = 'span' 
}: SplitLettersTextProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      splitLetters();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Component className={`js-splitLetters ${className}`}>
      {text}
    </Component>
  );
}
