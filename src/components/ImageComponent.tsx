import React from 'react';

interface ImageOptions {
  src: string;
  alt: string;
}

interface ImageComponentProps {
  options: ImageOptions;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({ options }) => {
  return <img src={options.src} alt={options.alt} />;
};
