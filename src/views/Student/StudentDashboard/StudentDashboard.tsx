import React from 'react';
import { StudentCV } from '../StudenctCV/StudenctCV';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';

export const StudentDashboard = () => {
  const currUser = useAppSelector((state) => state.user.user);
  if (!currUser) {
    return <CustomSpinner />;
  }
  return <StudentCV />;
};
