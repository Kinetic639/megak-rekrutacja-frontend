import { ListGroup, Stack } from 'react-bootstrap';
import React from 'react';

import './ImportedStudentsStatus.css';

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
      <ListGroup className="status-list" horizontal>
        <ListGroup.Item
          as="li"
          className="status-list__item d-flex justify-content-between align-items-start"
        >
          Zignorowano:{' '}
          <span className="students-ignored">&nbsp;{studentsIgnored}</span>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="status-list__item d-flex justify-content-between align-items-start"
        >
          Zaktualizowano:{' '}
          <span className="students-updated">&nbsp;{studentsUpdated}</span>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="status-list__item d-flex justify-content-between align-items-start"
        >
          Dodano: <span className="students-added">&nbsp;{studentsAdded}</span>
        </ListGroup.Item>
      </ListGroup>
    </Stack>
  );
};
