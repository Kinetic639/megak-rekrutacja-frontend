import React from 'react';
import { Form, Nav } from 'react-bootstrap';

const AvailableStudentsSearch = () => {
  return (
    <>
      <Nav className={`mt-2 custom-nav-search`}>
        <Form className="d-flex">
          <div className={`wrapper`}>
            <div className={`icon`}></div>
            <Form.Control
              id="form-control-search-hr"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </Form>
      </Nav>
      <p className={'mt-3 custom-p'} />
    </>
  );
};

export { AvailableStudentsSearch };
