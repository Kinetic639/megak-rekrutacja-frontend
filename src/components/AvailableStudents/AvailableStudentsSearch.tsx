import React, { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { FiFilter } from 'react-icons/fi';
import { FilterButton } from '../common/buttons/FilterButton/FilterButton';

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const AvailableStudentsSearch = (props: Props) => {
  return (
    <>
      <Nav className={`mt-2 custom-nav-search`}> // Brzydki zapis. Zwykły string powinien być w "", tak jak niżej. Z resztą tutaj widać, że raz jest tak, a raz inaczej - w tym pliku i w całym projekcie
        <Form className="d-flex">
          <div className={`wrapper`}>
            <div className={`icon`}></div>
            <Form.Control
              id="form-control-search-hr"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={`${props.search}`} // Zupełnie zbędny zapis. Krócej: value={props.search}
              onChange={(event) => props.setSearch(event.target.value)}
            />
          </div>
        </Form>
        <FilterButton />
      </Nav>
      <p className={'mt-3 custom-p'} />
    </>
  );
};

export { AvailableStudentsSearch };
