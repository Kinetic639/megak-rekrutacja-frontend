import React from 'react';
import './ButtonContainer.css.css';

interface ButtonContainerProps {
  type: 'table' | 'cv';
  children?: React.ReactNode;
}

export const ButtonContainer = ({ children, type }: ButtonContainerProps) => (
  <div className={`button-container ${type}`}>{children}</div>
);
