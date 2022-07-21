import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { UserLoginSite } from './views/UserLoginSite';
import { AvailableStudentsSite } from './views/AvailableStudentsSite';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/auth/login'} element={<UserLoginSite />} />
        <Route
          path={'/available-students'}
          element={<AvailableStudentsSite />}
        />
      </Routes>
    </>
  );
}

export default App;
