import { Header } from '../../components/Header/Header';
import './DashboardContainer.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { validateCurrUserAsync } from '../../redux/features/userSlice';
import { CustomSpinner } from '../../components/common/CustomSpinner/CustomSpinner';
import React from 'react';
import { Admin } from '../../components/Admin/Admin';
import { AvailableStudentsSite } from '../AvailableStudentsSite';
import { FiltersPanel } from '../../components/filters/FiltersPanel';

import '../../components/filtersPanel/FiltersPanel.css';
import { Filter } from '../../components/filtersPanel/Filter';

export const DashboardContainer = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const currUser = userState.user;

  if (!currUser) {
    return <CustomSpinner />;
  }
  const currUserRole = currUser.userType;

  return (
    <div className="dashboard-wrapper">
      <Header />
      <main>
        {currUserRole === 'admin' && <Admin />}
        {currUserRole === 'hr' && <AvailableStudentsSite />}
        {currUserRole === 'student' && <>student</>}
      </main>
    </div>
  );
};
