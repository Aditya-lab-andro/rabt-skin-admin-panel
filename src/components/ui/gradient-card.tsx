
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const GradientCard = ({ children, className, gradient = false }: GradientCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-gray-200/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg",
      gradient 
        ? "bg-gradient-to-br from-white/80 to-gray-50/80 shadow-xl"
        : "bg-white/70 shadow-sm",
      className
    )}>
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0fa1b8]/5 to-[#06b6d4]/5 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
