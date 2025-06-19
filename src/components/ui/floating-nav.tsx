
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingNavProps {
  children: React.ReactNode;
  className?: string;
}

export const FloatingNav = ({ children, className }: FloatingNavProps) => {
  return (
    <div className={cn(
      "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
      "bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3",
      "shadow-lg hover:shadow-xl transition-all duration-300",
      className
    )}>
      <div className="flex items-center space-x-4">
        {children}
      </div>
    </div>
  );
};
