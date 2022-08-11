import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

import './AvailableStudents.css';
import { apiUrl } from '../../config/api';

import { AvailableStudentsSearch } from './AvailableStudentsSearch';
import { AvailableStudentsNavigation } from './AvailableStudentsNavigation';
import { AvailableStudentsTableElements } from './AvailableStudentsTableElements';
import { PaginationStudents } from './PaginationStudents';

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
  githubUsername: string;
}
interface Props {
  conversationSite: boolean;
}

const AvailableStudents = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [resDataUserList, setResDataUserList] = useState<UserListResponseHr[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsListPerPage, setStudentsListPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [changeStudentStatus, setChangeStudentStatus] = useState(false);

  const filteredBySearch = resDataUserList.filter((filterData) => {
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

  const indexOfLastStudentsList = currentPage * studentsListPerPage;
  const indexOfFirstStudentsList =
    indexOfLastStudentsList - studentsListPerPage;

  const currentStudentsList = filteredBySearch.slice(
    indexOfFirstStudentsList,
    indexOfLastStudentsList,
  );
  if (props.conversationSite) {
    useEffect(() => {
      setLoading(true);
      (async () => {
        try {
          const res = await fetch(`${apiUrl}/user/list/reserved`);
          const data: UserListResponseHr[] = await res.json();
          setResDataUserList(data);
        } finally {
          setLoading(false);
        }
      })();
    }, [changeStudentStatus]);
  } else {
    useEffect(() => {
      setLoading(true);
      (async () => {
        try {
          const res = await fetch(`${apiUrl}/user/list/basic`);
          const data: UserListResponseHr[] = await res.json();
          setResDataUserList(data);
        } finally {
          setLoading(false);
        }
      })();
    }, [changeStudentStatus]);
  }

  return (
    <>
      {loading ? (
        <Spinner
          animation="border"
          variant="danger"
          className={'position-absolute top-50 start-50'}
        />
      ) : (
        <>
          <Container className={`mt-5 mb-1 custom-container-second p-0`}>
            <AvailableStudentsNavigation
              conversationSite={props.conversationSite}
            />
          </Container>
          <Container className={`custom-container mt-1`}>
            <AvailableStudentsSearch setSearch={setSearch} />
            <AvailableStudentsTableElements
              userListResHr={currentStudentsList}
              setChangeStudentStatus={setChangeStudentStatus}
              conversationSite={props.conversationSite}
            />
          </Container>
          <PaginationStudents
            studentsListPerPage={studentsListPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setStudentsListPerPage={setStudentsListPerPage}
            numberOfStudents={filteredBySearch.length}
            search={search}
          />
        </>
      )}
    </>
  );
};

export { AvailableStudents };
