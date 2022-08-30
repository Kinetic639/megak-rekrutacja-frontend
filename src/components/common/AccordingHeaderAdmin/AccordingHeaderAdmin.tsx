import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { ShowCvButton } from '../buttons/ShowCvButton/ShowCvButton';

interface Props {
  studentId: string;
  firstName: string;
  lastName: string;
}

const AccordingHeaderAdmin = (props: Props) => {
  return (
    <div className="accordion-header">
      <Accordion.Header className="accordion-header__header">
        <div>
          {props.firstName} {props.lastName}
        </div>
        <div className="spacer"></div>
      </Accordion.Header>
      <div className="accordion-header__btn-container">
        <ShowCvButton userId={props.studentId} />
        {/*<Button*/}
        {/*  className={`custom-button`}*/}
        {/*  as={'div'}*/}
        {/*  variant="danger"*/}
        {/*  onClick={(event) => {*/}
        {/*    event.stopPropagation();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Admin Power Button*/}
        {/*</Button>*/}
      </div>
    </div>
  );
};

export { AccordingHeaderAdmin };
