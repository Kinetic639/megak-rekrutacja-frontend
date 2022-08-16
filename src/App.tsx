import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { UserLoginSite } from './views/UserLoginSite';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';
import { validateCurrUserAsync } from './redux/features/userSlice';
import { CustomSpinner } from './components/common/CustomSpinner/CustomSpinner';
import { FormPasswordSite } from './views/FormPasswordSite';
import { DashboardWrapper } from './views/DashboardWrapper/DashboardWrapper';
import {ResetPasswordEmail} from "./components/ResetPasswordEmail/ResetPasswordEmail";

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
            currUser ? <DashboardWrapper /> : <Navigate replace to="/login" />
          }
        />
        {/*<Route path={'/user/change-password'} element={<FormPasswordSite />} />*/}
        <Route path={'/activate'} element={<FormPasswordSite activateOrReset={'activate'}/>} />
        <Route path={'/reset'} element={<FormPasswordSite activateOrReset={'reset'}/>} />
        <Route path={'/auth/send-reset-email'} element={<ResetPasswordEmail />} />
      </Routes>
    </>
  );
}

export default App;
