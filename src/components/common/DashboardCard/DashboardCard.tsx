import React from 'react';
import './DashboardCard.css';

interface DashboardCardProps {
  children?: React.ReactNode;
}

export const DashboardCard = (props: DashboardCardProps) => (
  <div className="dashboard-card">{props.children}</div>
);
