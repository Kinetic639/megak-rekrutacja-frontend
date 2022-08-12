import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import { validateCurrUserAsync } from './redux/features/userSlice';

import { UserLoginSite } from './views/UserLoginSite';
import { DashboardContainer } from './views/DashboardContainer/DashboardContainer';
import { CustomSpinner } from './components/common/CustomSpinner/CustomSpinner';

import './App.css';
import './button.css';

function App() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const currUser = userState.user;
  useEffect(() => {
    dispatch(validateCurrUserAsync());
  }, []);

  if (userState.status === 'loading') {
    return <CustomSpinner />;
  }
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

        <Route
          path={'/dashboard'}
          element={
            currUser ? <DashboardContainer /> : <Navigate replace to="/login" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
