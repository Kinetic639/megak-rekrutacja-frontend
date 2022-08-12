import React, { ChangeEvent } from 'react';
import './AdminButtons.css';

interface Props {
  setShowAddWindow: (boolean: boolean) => void;
  handleLoadCSV: (e: ChangeEvent<HTMLInputElement>) => void;
  setShowStudentsTable: (boolean: boolean) => void;
  showStudentsTable: boolean;
}

export const AdminButtons = ({
  setShowAddWindow,
  handleLoadCSV,
  setShowStudentsTable,
  showStudentsTable,
}: Props) => {
  return (
    <div className="admin__buttons">
      <button
        className="buttons-change-view button"
        onClick={() => setShowStudentsTable(!showStudentsTable)}
      >
        {showStudentsTable ? 'Widok Rekruterów' : 'Widok Kursantów'}
      </button>
      {!showStudentsTable && (
        <button
          className="buttons-register-hr__button button"
          onClick={() => setShowAddWindow(true)}
        >
          Zarejestruj Rekrutera
        </button>
      )}
      {showStudentsTable && (
        <div>
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
            <div className="csv-help__info">
              Plik CSV powinien zawierać następujące nazwy kolumn:
              <ul>
                <li>email</li>
                <li>courseCompletion</li>
                <li>courseEngagment</li>
                <li>projectDegree</li>
                <li>teamProjectDegree</li>
                <li>bonusProjectUrls</li>
              </ul>
              Kolumna - bonusProjectUrls - powinna zawierać linki w tej samej
              komórce, oddzielone przecinkiem.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
