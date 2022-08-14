import React from 'react';

import './OptionsButton.css';

interface OptionsButtonProps {
  type: 'table' | 'cv';
  children?: React.ReactNode;
}

export const OptionsButton = ({ type, children }: OptionsButtonProps) => (
  <div className={`custom-button button ${type}`}>{children}</div>
);
