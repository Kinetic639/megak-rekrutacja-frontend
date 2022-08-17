import { Header } from '../../components/Header/Header';
import './DashboardWrapper.css';
import { useAppSelector } from '../../redux/hooks/hooks';
import { CustomSpinner } from '../../components/common/CustomSpinner/CustomSpinner';
import React from 'react';
import { AdminDashboard } from '../admin/AdminDashboard/AdminDashboard';
import { HrDashboard } from '../Hr/HrDashboard/HrDashboard';
import { StudentDashboard } from '../Student/StudentDashboard/StudentDashboard';

export const DashboardWrapper = () => {
  const userState = useAppSelector((state) => state.user);
  const currUser = userState.user;

  if (!currUser) {
    return <CustomSpinner />;
  }
  const currUserRole = currUser.userType;

  return (
    <div className="dashboard-wrapper">
      <Header />
      <main className="dashboard-main">
        {currUserRole === 'admin' && <AdminDashboard />}
        {currUserRole === 'hr' && <HrDashboard />}
        {currUserRole === 'student' && <StudentDashboard />}
      </main>
    </div>
  );
};
