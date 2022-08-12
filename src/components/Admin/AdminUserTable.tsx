import React from 'react';
import './AdminUserTable.css';
import { useAppSelector } from '../../redux/hooks/hooks';
import Spinner from 'react-bootstrap/Spinner';
import { Stack } from 'react-bootstrap';
import { ImportedStudentsStatus } from '../ImportedStudents/ImportedStudentsStatus/ImportedStudentsStatus';
import { ImportedStudentsList } from '../ImportedStudents/ImportedStudentsList/ImportedStudentsList';

export const AdminUserTable = () => {
  const studentsImport = useAppSelector((state) => state.studentsImport);
  const studentsData = studentsImport.results;
  const { studentsIgnored, studentsAdded, studentsUpdated } = studentsData;
  if (studentsImport.status === 'loading') {
    return <Spinner animation="border" variant="danger" />;
  }

  if (
    (!studentsIgnored || studentsIgnored.length < 1) &&
    (!studentsAdded || studentsAdded.length) < 1 &&
    (!studentsUpdated || studentsUpdated.length) < 1
  ) {
    return <h2>Zaimportuj plik csv aby zobaczyć wyniki.</h2>;
  }
  return (
    <Stack>
      <ImportedStudentsStatus
        studentsIgnored={studentsIgnored.length}
        studentsAdded={studentsAdded.length}
        studentsUpdated={studentsUpdated.length}
      />
      <ImportedStudentsList />
    </Stack>
  );
};
