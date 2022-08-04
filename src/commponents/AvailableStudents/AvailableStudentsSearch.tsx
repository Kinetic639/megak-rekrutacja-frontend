import React from 'react';
import { Form, Nav } from 'react-bootstrap';

const AvailableStudentsSearch = () => {
  return (
    <>
      <Nav
        style={{
          backgroundColor: '#292A2B',
        }}
        className={`mt-2`}
      >
        <Form className="d-flex">
          <div className={`wrapper`}>
            <div className={`icon`}></div>
            <Form.Control
              id="form-control-search-hr"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor: '#1e1e20',
              }}
            />
          </div>
        </Form>
      </Nav>
      <p
        style={{
          height: '4px',
          backgroundColor: '#1e1e21',
        }}
        className={'mt-3'}
      />
    </>
  );
};

export { AvailableStudentsSearch };
