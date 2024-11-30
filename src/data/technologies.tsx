
import { FaPython } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpenai, SiJupyter, SiDocker } from 'react-icons/si';
import * as React from 'react';

const getIcon = (IconComponent: React.ElementType, className: string) => (<IconComponent className={className} />);

export const technologies = [
  { 
    icon: getIcon(SiTensorflow, "w-8 h-8"), 
    name: 'TensorFlow',
    category: 'Machine Learning'
  },
  { 
    icon: getIcon(SiPytorch, "w-8 h-8"), 
    name: 'PyTorch',
    category: 'Machine Learning'
  },
  { 
    icon: getIcon(SiScikitlearn, "w-8 h-8"), 
    name: 'Scikit-learn',
    category: 'Machine Learning'
  },
  { 
    icon: getIcon(SiKeras, "w-8 h-8"), 
    name: 'Keras',
    category: 'Machine Learning'
  },
  { 
    icon: getIcon(SiOpenai, "w-8 h-8"), 
    name: 'OpenAI',
    category: 'Machine Learning'
  },
  { 
    icon: getIcon(SiJupyter, "w-8 h-8"), 
    name: 'Jupyter',
    category: 'Development Tools'
  },
  { 
    icon: getIcon(SiDocker, "w-8 h-8"), 
    name: 'Docker',
    category: 'Cloud & DevOps'
  },
  { 
    icon: getIcon(FaPython, "w-8 h-8"), 
    name: 'Python',
    category: 'Programming Languages'
  },
];

export const techCategories = [
  'Machine Learning',
  'Development Tools',
  'Programming Languages',
  'Cloud & DevOps'
];