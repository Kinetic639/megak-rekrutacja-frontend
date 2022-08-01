import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import './App.css';
import './button.css';
import { UserLoginSite } from './views/UserLoginSite';
import { AvailableStudentsSite } from './views/AvailableStudentsSite';
import { Admin } from './components/Admin/Admin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/login" />} />
        <Route path={'/auth/login'} element={<UserLoginSite />} />
        <Route
          path={'/available-students'}
          element={<AvailableStudentsSite />}
        />
        <Route path={'/admin'} element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
