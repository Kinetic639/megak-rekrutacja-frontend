import React, { useState } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { AvailableStudentsTableElements } from './AvailableStudentsTableElements';

interface UserListResponseHr {
  id: string;
  email: string;
  courseCompletion: string;
  courseEngagement: string;
  projectDegree: string;
  teamProjectDegree: string;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: string;
  firstName: string;
  lastName: string;
}

interface Props {
  userListResHr: UserListResponseHr[];
  indexOfLastStudentsList: number;
  indexOfFirstStudentsList: number;
}

const AvailableStudentsSearch = (props: Props) => {
  const [search, setSearch] = useState('');

  const filteredBySearch = props.userListResHr.filter((filterData) => {
    filterData.firstName === null
      ? (filterData.firstName = '')
      : filterData.firstName;
    filterData.lastName === null
      ? (filterData.lastName = 'BRAK')
      : filterData.lastName;
    return (
      filterData.firstName.toLowerCase().includes(search.toLowerCase()) ||
      filterData.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

  const currentStudentsList = filteredBySearch.slice(
    props.indexOfFirstStudentsList,
    props.indexOfLastStudentsList,
  );

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
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </Form>
      </Nav>
      <p className={'mt-3 custom-p'} />
      <AvailableStudentsTableElements userListResHr={currentStudentsList} />
    </>
  );
};

export { AvailableStudentsSearch };
