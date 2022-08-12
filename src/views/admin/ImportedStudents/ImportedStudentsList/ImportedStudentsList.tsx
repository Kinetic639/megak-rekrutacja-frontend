import { useAppSelector } from '../../../../redux/hooks/hooks';
import { ListGroup, Stack } from 'react-bootstrap';
import React from 'react';

import './ImportedStudentsList.css';

export const ImportedStudentsList = () => {
  const importedStudentsLists = useAppSelector(
    (store) => store.studentsImport.results,
  );
  return (
    <Stack>
      {importedStudentsLists.studentsIgnored.length > 0 && (
        <>
          <div className="list-title students-ignored fw-bold">
            Kursanci zignorowani:
          </div>
          <ListGroup>
            {importedStudentsLists.studentsIgnored.map((student, index) => (
              <ListGroup.Item
                variant="danger"
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="fw-bold">
                  {student.email}{' '}
                  <span className="fw-normal">- {student.reason}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}

      {importedStudentsLists.studentsUpdated.length > 0 && (
        <>
          <div className="list-title students-updated fw-bold">
            Kursanci zaktualizowani:{' '}
          </div>
          <ListGroup>
            {importedStudentsLists.studentsUpdated.map((student, index) => (
              <ListGroup.Item
                variant="warning"
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="fw-bold">{student} </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}

      {importedStudentsLists.studentsAdded.length > 0 && (
        <>
          <div className="list-title students-added  fw-bold">
            Kursanci dodani:{' '}
          </div>
          <ListGroup>
            {importedStudentsLists.studentsAdded.map((student, index) => (
              <ListGroup.Item
                variant="success"
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="fw-bold">{student} </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Stack>
  );
};
