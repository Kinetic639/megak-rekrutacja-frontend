import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/user/login'} element={<UserLoginSite />} />
      </Routes>
    </>
  );
}

export default App;
