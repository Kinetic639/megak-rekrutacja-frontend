import React from 'react';
import './CvSectionParagraph.css';

interface DashboardCardProps {
  children?: React.ReactNode;
}

export const CvSectionParagraph = (props: DashboardCardProps) => (
  <div className="paragraph__wrapper">
    <p className="paragraph">{props.children}</p>
  </div>
);
