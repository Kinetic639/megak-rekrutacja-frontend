import React from 'react';
import { FiltersPanel } from './features/filtersPanel/FiltersPanel';
import './App.css';
import { StudentCVSite } from './views/StudentCVSite';

function App() {
  return (
    <>
      <StudentCVSite />
      {/* <FiltersPanel closeCallback={() => { }} /> */}
    </>
  );
}

export default App;
