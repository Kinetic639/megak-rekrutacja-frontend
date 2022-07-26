import React, { ChangeEvent, useState } from 'react';
import './Admin.css';
import { AddHr } from './AddHr';

export const Admin = () => {
  const [showAddWindow, setShowAddWindow] = useState(false);

  const handleLoadCSV = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className="admin">
      {showAddWindow ? <AddHr setShowAddWindow={setShowAddWindow} /> : null}
      <div className="admin__buttons">
        <button
          className="buttons-register-hr__button button"
          onClick={() => setShowAddWindow(true)}
        >
          Zarejestruj Rekrutera
        </button>
        <label
          htmlFor="buttons-csv__button"
          className="buttons-csv__label button"
        >
          Załaduj plik CSV
          <input
            id="buttons-csv__button"
            className="buttons-csv__button"
            type="file"
            accept="text/csv"
            style={{ display: 'none' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleLoadCSV(e)}
          />
        </label>
        <span className="buttons-csv__help">?</span>
        <div className="csv-help">
          <p className="csv-help__info">
            Plik CSV powinien zawierać następujące nazwy kolumn:
            <ul>
              <li>email</li>
              <li>courseCompletion</li>
              <li>courseEngagment</li>
              <li>projectDegree</li>
              <li>teamProjectDegree</li>
              <li>bonusProjectUrls</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="admin__users-table">
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
        <div className="table-row">
          <span className="table-row__name">Jan K.</span>
          <span className="table-row__expand">X</span>
        </div>
      </div>
      {showAddWindow ? <div className="background-blur" /> : null}
    </div>
  );
};
