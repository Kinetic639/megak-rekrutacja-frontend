import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { UserLoginSite } from './views/UserLoginSite';
import { AvailableStudentsSite } from './views/AvailableStudentsSite';
import { RegisterHr } from './commponents/RegisterHr/RegisterHr';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/auth/login'} element={<UserLoginSite />} />
        <Route path={'/admin/registerHr'} element={<RegisterHr />} />
        <Route
          path={'/available-students'}
          element={<AvailableStudentsSite />}
        />
      </Routes>
    </>
  );
}

export default App;
