import React from 'react';
import { StudentCV } from '../StudenctCV/StudenctCV';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import { StudentForm } from '../StudentForm/StudentForm';

export const StudentDashboard = () => {
  const currUser = useAppSelector((state) => state.user.user);
  if (!currUser) {
    return <CustomSpinner />;
  }
  const {
    tel,
    githubUsername,
    teamProjectUrls,
    canTakeApprenticeship,
    monthsOfCommercialExp,
  } = currUser;

  if (
    tel ||
    githubUsername ||
    teamProjectUrls ||
    canTakeApprenticeship ||
    monthsOfCommercialExp
  )
    return <StudentCV />;
  else return <StudentForm />;
};
