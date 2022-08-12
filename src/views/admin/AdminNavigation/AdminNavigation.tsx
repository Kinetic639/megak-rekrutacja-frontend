import { Nav } from 'react-bootstrap';
import React, { ChangeEvent } from 'react';
import './AdminNavigation.css';
import { importStudentsFromFileAsync } from '../../../redux/features/studentsImportSlice';
import { useAppDispatch } from '../../../redux/hooks/hooks';
interface Props {
  currTable: string;
  switchCurrTable: (table: string) => void;
  switchShowHrAddForm: () => void;
}

export const AdminNavigation = ({
  switchShowHrAddForm,
  currTable,
  switchCurrTable,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleLoadCSV = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;

    const formData = new FormData();
    formData.append('file_asset', e.target.files[0]);
    if (e.target.files[0]) {
      await dispatch(importStudentsFromFileAsync(formData));
    }
    e.target.value = '';
  };
  return (
    <div className="nav-container">
      <Nav className={`navigation`} variant="tabs" defaultActiveKey="link-1">
        <Nav.Item className={`nav-items`}>
          <Nav.Link onClick={(e) => switchCurrTable('hr')} eventKey="link-1">
            Lista Rekruterów
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`nav-items`}>
          <Nav.Link
            onClick={(e) => switchCurrTable('students')}
            eventKey="link-2"
          >
            Lista Kursantów
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`nav-items`}>
          <Nav.Link
            onClick={(e) => switchCurrTable('import')}
            eventKey="link-3"
          >
            Importuj Kursantów
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {currTable === 'hr' && (
        <button
          className="buttons-register-hr__button button"
          onClick={switchShowHrAddForm}
        >
          Zarejestruj Rekrutera
        </button>
      )}
      {currTable === 'import' && (
        <div className="import-container">
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
                <li>courseEngagement</li>
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
