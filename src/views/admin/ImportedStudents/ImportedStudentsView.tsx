import { ImportedStudentsStatus } from './ImportedStudentsStatus/ImportedStudentsStatus';
import { ImportedStudentsList } from './ImportedStudentsList/ImportedStudentsList';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { BsFileEarmarkExcel } from 'react-icons/bs';

import './ImportedStudentsView.css';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import React from 'react';

export const ImportedStudentsView = () => {
  const students = useAppSelector((state) => state.studentsImport.results);
  const status = useAppSelector((state) => state.studentsImport.status);
  if (status === 'loading') {
    return <CustomSpinner />;
  }

  if (
    !students.studentsIgnored.length &&
    !students.studentsAdded.length &&
    !students.studentsUpdated.length
  ) {
    return (
      <div className="isv-container pt-3 flex-column d-flex justify-content-center align-items-center">
        <BsFileEarmarkExcel className="file-icon" color="#adadad" />
        <p className="fs-3">
          Wczytaj dane z pliku csv aby wyświetlić rezultat importowania
        </p>

        <div className="csv-help__info   pt-3">
          <p className="fs-5">
            Plik CSV powinien zawierać następujące nazwy kolumn:
          </p>
          <ul className="fs-65">
            <li>email</li>
            <li>courseCompletion (0-5)</li>
            <li>courseEngagement (0-5)</li>
            <li>projectDegree (0-5)</li>
            <li>teamProjectDegree (0-5)</li>
            <li>bonusProjectUrls</li>
          </ul>
          Kolumna - bonusProjectUrls - powinna zawierać linki w tej samej
          komórce, oddzielone przecinkiem.
        </div>
      </div>
    );
  }

  return (
    <div className="isv-container">
      <>
        <ImportedStudentsStatus
          studentsIgnored={students.studentsIgnored.length}
          studentsAdded={students.studentsAdded.length}
          studentsUpdated={students.studentsUpdated.length}
        />
        <ImportedStudentsList />
      </>
    </div>
  );
};
