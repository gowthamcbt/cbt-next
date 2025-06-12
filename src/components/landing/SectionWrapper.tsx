import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className, ...props }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
