import { useAppSelector } from '../../../redux/hooks/hooks';
import { ListGroup, Stack } from 'react-bootstrap';
import React from 'react';

export const ImportedStudentsList = () => {
  const importedStudentsLists = useAppSelector(
    (store) => store.studentsImport.results,
  );
  return (
    <Stack>
      <div className="fw-bold">Kursanci zignorowani: </div>
      <ListGroup>
        {importedStudentsLists.studentsIgnored.map((student, index) => (
          <ListGroup.Item
            variant="danger"
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="fw-bold">{`${student.email} ${student.reason}`}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="fw-bold">Kursanci zaktualizowani: </div>
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
      <div className="fw-bold">Kursanci dodani: </div>
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
    </Stack>
  );
};
