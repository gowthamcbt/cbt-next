
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CarouselItem {
  title: string;
  subtitle: string;
}

interface AnimatedHeadlineCarouselProps {
  items: CarouselItem[];
  interval?: number;
}

const AnimatedHeadlineCarousel: React.FC<AnimatedHeadlineCarouselProps> = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<'in' | 'out'>('in');
  const [displayText, setDisplayText] = useState<CarouselItem>(items[0]);
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
    if (items.length <= 1) return;

    const changeSlide = () => {
      if (!componentMounted.current) return;
      setAnimationState('out'); 

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (!componentMounted.current) return;
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % items.length;
          setDisplayText(items[nextIndex]);
          return nextIndex;
        });
        setAnimationState('in');
      }, 500); 
    };

    const slideInterval = setInterval(changeSlide, interval + 500);

    return () => {
      clearInterval(slideInterval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [items, interval, currentIndex]); // Added currentIndex to reset interval on manual change if ever implemented

  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = displayText;

  return (
    <div className="relative h-48 md:h-64 lg:h-72 flex flex-col items-center justify-center overflow-hidden text-center">
      <div
        key={currentIndex} 
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center px-4", 
          animationState === 'in' ? 'animate-slide-in-right opacity-100' : 'animate-slide-out-left opacity-0'
        )}
      >
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 uppercase text-white">
          {currentItem.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-md sm:max-w-lg md:max-w-2xl">
          {currentItem.subtitle}
        </p>
      </div>
    </div>
  );
};

export default AnimatedHeadlineCarousel;
