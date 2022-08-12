import { ListGroup, Stack } from 'react-bootstrap';
import React from 'react';
interface Props {
  studentsIgnored: number;
  studentsAdded: number;
  studentsUpdated: number;
}

export const ImportedStudentsStatus = ({
  studentsIgnored,
  studentsAdded,
  studentsUpdated,
}: Props) => {
  return (
    <Stack>
      <ListGroup horizontal>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="fw-bold">Status Importowania: </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          Zignorowano: {studentsIgnored}
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          Zaktualizowano: {studentsUpdated}
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          Dodano: {studentsAdded}
        </ListGroup.Item>
      </ListGroup>
    </Stack>
  );
};
