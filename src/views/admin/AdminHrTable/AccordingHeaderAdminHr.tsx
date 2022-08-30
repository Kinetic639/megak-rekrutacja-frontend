import React from 'react';
import { Accordion } from 'react-bootstrap';

interface Props {
  hr: any;
  reservations: number;
}

export const AccordingHeaderAdminHr = ({ hr, reservations }: Props) => {
  return (
    <div
      className={`accordion-header ${
        !reservations && 'accordion-header--disabled'
      }`}
    >
      <Accordion.Header className="accordion-header__hr-header">
        <div className="accordion-header__hr-header--subtitle">
          {hr.firstName} {hr.lastName}
        </div>
        <div className="accordion-header__hr-header--subtitle">
          Firma: {hr.company}
        </div>
        <div className="accordion-header__hr-header--subtitle">
          Rezerwacje: {reservations} / {hr.maxReservedStudents}
        </div>
      </Accordion.Header>
    </div>
  );
};
