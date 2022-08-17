import React from 'react';
import { StudentCV } from '../StudenctCV/StudenctCV';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import {StudentForm} from "../StudentForm/StudentForm";

export const StudentDashboard = () => {
  const currUser = useAppSelector((state) => state.user.user);

  if (!currUser) {
    return <CustomSpinner />;
  }
  if (!currUser.firstName || !currUser.lastName || !currUser.githubUsername || !currUser.teamProjectUrls) {
    return <StudentForm />
  }

  return <StudentCV />;
};
