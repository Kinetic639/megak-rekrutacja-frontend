import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { UserLoginSite } from './views/UserLoginSite';
import { AvailableStudentsSite } from './views/AvailableStudentsSite';
import { ConversationStudentsSite } from './views/ConversationStudentsSite';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/auth/login'} element={<UserLoginSite />} />
        <Route
          path={'/available-students'}
          element={<AvailableStudentsSite />}
        />
        <Route
          path={'/conversation-students'}
          element={<ConversationStudentsSite />}
        />
      </Routes>
    </>
  );
}

export default App;
