import React from 'react';
import './DashboardContainer.css';

interface DashboardContainerProps {
  children?: React.ReactNode;
}

export const DashboardContainer = (props: DashboardContainerProps) => (
  <div className="dashboard-container ">{props.children}</div>
);
