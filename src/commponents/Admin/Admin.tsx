import React, { ChangeEvent } from 'react';
import './Admin.css';

export const Admin = () => {
  const handleLoadCSV = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className="admin">
      <div className="admin__buttons">
        <button className="buttons-register-hr__button button">
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
    </div>
  );
};
