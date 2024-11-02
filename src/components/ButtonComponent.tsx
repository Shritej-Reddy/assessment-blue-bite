import React from 'react';

interface ButtonOptions {
  text: string;
  variable: string;
  value: any;
}

interface ButtonComponentProps {
  options: ButtonOptions;
  updateVariable: (name: string, value: any) => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  options,
  updateVariable,
}) => {
  const handleClick = () => {
    updateVariable(options.variable, options.value);
  };

  return <button onClick={handleClick}>{options.text}</button>;
};
