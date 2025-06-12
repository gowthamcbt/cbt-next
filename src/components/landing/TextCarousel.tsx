
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextCarouselProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function TextCarousel({ texts, interval = 3000, className }: TextCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const componentMounted = useRef(true);

  useEffect(() => {
    componentMounted.current = true;
    return () => {
      componentMounted.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      if (!componentMounted.current) return;
      setIsVisible(false);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (!componentMounted.current) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500); 
    }, interval);

    return () => {
      clearInterval(timer);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [texts, interval]);

  if (!texts || texts.length === 0) {
    return null;
  }

  return (
    <div className={cn("h-12 flex items-center justify-center overflow-hidden", className)}>
      <p
        className={cn(
          "text-lg sm:text-xl md:text-2xl text-gray-200 transition-opacity duration-500 ease-in-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {texts[currentIndex]}
      </p>
    </div>
  );
}
