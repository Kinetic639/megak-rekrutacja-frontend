import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

import './App.css';
import './button.css';
import { UserLoginSite } from './views/UserLoginSite';
import { AvailableStudentsSite } from './views/AvailableStudentsSite';
import { Admin } from './components/Admin/Admin';
import { DashboardContainer } from './views/DashboardContainer/DashboardContainer';
import { useAppSelector } from './redux/hooks/hooks';

function App() {
  const userState = useAppSelector((state) => state.user);
  const currUser = userState.user;
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path={'/login'}
          element={
            currUser ? <Navigate replace to="/dashboard" /> : <UserLoginSite />
          }
        />

        <Route path={'/dashboard'} element={<DashboardContainer />} />
      </Routes>
    </>
  );
}

export default App;
