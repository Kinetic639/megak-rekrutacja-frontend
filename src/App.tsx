import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { UserLoginSite } from './views/UserLoginSite';
import { AvailableStudentsSite } from './views/AvailableStudentsSite';
import { Admin } from './commponents/Admin/Admin';

function App() {
  return (
    <>
      <Routes>
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
