import React, { useState } from 'react';
import { Form, Nav } from 'react-bootstrap';

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const AvailableStudentsSearch = (props: Props) => {
  return (
    <>
      <Nav className={`mt-2 custom-nav-search`}>
        <Form className="d-flex">
          <div className={`wrapper`}>
            <div className={`icon`}></div>
            <Form.Control
              id="form-control-search-hr"
              type="text"
              placeholder="Search"
              aria-label="Search"
              defaultValue=""
              onChange={(event) => props.setSearch(event.target.value)}
            />
          </div>
        </Form>
      </Nav>
      <p className={'mt-3 custom-p'} />
    </>
  );
};

export { AvailableStudentsSearch };
