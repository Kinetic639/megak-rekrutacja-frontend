import React from 'react';
import './CvSection.css';

interface CvSectionProps {
  title: string;
  children?: React.ReactNode;
}

export const CvSection = (props: CvSectionProps) => (
  <div className="cv-section__container">
    <div className="cv-section__title">{props.title}</div>
    <div className="cv-section__content">{props.children}</div>
  </div>
);
