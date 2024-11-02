import React from 'react';

interface ConditionOptions {
  variable: string;
  value: any;
}

interface ConditionComponentProps {
  options: ConditionOptions;
  variables: Record<string, any>;
  children: React.ReactNode;
}

export const ConditionComponent: React.FC<ConditionComponentProps> = ({
  options,
  variables,
  children,
}) => {
  return variables[options.variable] === options.value ? (
    <div>{children}</div>
  ) : null;
};
