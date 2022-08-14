import React from 'react';
import { DashboardContainer } from '../../../components/common/DashboardContainer/DashboardContainer';
import { DashboardCard } from '../../../components/common/DashboardCard/DashboardCard';
import { useState } from 'react';
import { AvailableStudents } from '../../../components/AvailableStudents/AvailableStudents';
import { ShowCvButton } from '../../../components/common/buttons/ShowCvButton/ShowCvButton';

export const HrDashboard = () => {
  const [currTable, setCurrTable] = useState('hr');

  const switchCurrTable = (table: string) => {
    setCurrTable(table);
  };
  return (
    <DashboardContainer>
      <DashboardCard>
        <AvailableStudents availableStudentsVariant={'available-list'}/>
      </DashboardCard>
    </DashboardContainer>
  );
};
