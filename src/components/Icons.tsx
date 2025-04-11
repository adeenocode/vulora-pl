import React from 'react';
import { 
  TrendingUp, 
  Leaf, 
  Wheat, 
  Globe, 
  Sprout,
  Droplets,
  Battery,
  Zap,
  Dumbbell,
  Bone,
  CircuitBoard,
  Component,
  Sparkles,
  Check,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  FlaskConical
} from 'lucide-react';

type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

const iconMap = {
  TrendingUp,
  Leaf,
  Wheat,
  Globe,
  Sprout,
  Droplets,
  Battery,
  Zap,
  Dumbbell,
  Bone,
  CircuitBoard,
  Component,
  Sparkles,
  Check,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  FlaskConical
};

export function Icon({ name, size = 24, className = "" }: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  return <IconComponent size={size} className={className} />;
}