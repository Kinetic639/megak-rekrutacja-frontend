import React, { FormEvent, useState } from 'react';
import { StudentCV } from '../StudenctCV/StudenctCV';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks/hooks';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import {updateStudentAsync} from "../../../redux/features/userSlice";
import {StudentForm} from "../StudentForm/StudentForm";

export const StudentDashboard = () => {
  const dispatch = useAppDispatch();
  const currUser = useAppSelector((state) => state.user.user);
  const [student, setStudent] = useState<any>(currUser);

  const handleStudentFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateStudentAsync(student));
  };

  if (!currUser) {
    return <CustomSpinner />;
  }

  const { tel, githubUsername } = currUser;

  if (tel && githubUsername) return <StudentCV />;
  else
    return <StudentForm
        setStudent={setStudent}
        student={student}
        handleStudentFormSubmit={handleStudentFormSubmit}
    />;
};
