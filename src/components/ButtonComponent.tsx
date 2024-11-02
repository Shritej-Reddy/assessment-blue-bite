import React from 'react';
import './Buttons.css'; // Ensure you import your button styles

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

  return (
    <button className="button" onClick={handleClick}>
      {options.text}
    </button>
  );
};
