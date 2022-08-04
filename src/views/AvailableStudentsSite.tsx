import React from 'react';
import { AvailableStudents } from '../components/AvailableStudents/AvailableStudents';
import { Header } from '../components/Header/Header';

const AvailableStudentsSite = () => {
  return (
    <>
      <Header />
      <AvailableStudents />
    </>
  );
};

export { AvailableStudentsSite };
