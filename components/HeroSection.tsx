import React from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  theme?: 'vtc' | 'formations' | 'afrique' | 'default';
  primaryAction?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
  theme = 'default',
  primaryAction,
  secondaryAction,
  children
}: HeroSectionProps) => {
  const getThemeColors = () => {
    switch (theme) {
      case 'vtc':
        return {
          primaryBtn: 'default',
          secondaryBtn: 'outline',
          gradient: 'from-black/70 to-yellow-600/30'
        };
      case 'formations':
        return {
          primaryBtn: 'default',
          secondaryBtn: 'outline',
          gradient: 'from-blue-700/70 to-gray-100/30'
        };
      case 'afrique':
        return {
          primaryBtn: 'default',
          secondaryBtn: 'outline',
          gradient: 'from-orange-500/70 to-green-600/30'
        };
      default:
        return {
          primaryBtn: 'default',
          secondaryBtn: 'outline',
          gradient: 'from-black/70 to-gray-900/30'
        };
    }
  };

  const themeColors = getThemeColors();

  const handlePrimaryClick = () => {
    if (primaryAction?.onClick) {
      primaryAction.onClick();
    } else if (primaryAction?.href) {
      window.location.href = primaryAction.href;
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryAction?.onClick) {
      secondaryAction.onClick();
    } else if (secondaryAction?.href) {
      window.location.href = secondaryAction.href;
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r",
        themeColors.gradient
      )} />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="font-body text-xl sm:text-2xl mb-8 leading-relaxed opacity-90">
          {subtitle}
        </p>
        
        {children && (
          <div className="mb-8">
            {children}
          </div>
        )}
        
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryAction && (
              <Button
                variant={themeColors.primaryBtn as any}
                size="lg"
                onClick={handlePrimaryClick}
                className="bg-yellow-600 hover:bg-yellow-700 text-black"
              >
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant={themeColors.secondaryBtn as any}
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900"
                onClick={handleSecondaryClick}
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        )}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;