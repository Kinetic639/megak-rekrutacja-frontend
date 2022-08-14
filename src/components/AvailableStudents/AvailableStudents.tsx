import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

import './AvailableStudents.css';
import { apiUrl } from '../../config/api';

import { AvailableStudentsSearch } from './AvailableStudentsSearch';
import { AvailableStudentsNavigation } from './AvailableStudentsNavigation';
import { AvailableStudentsTableElements } from './AvailableStudentsTableElements';
import { PaginationStudents } from './PaginationStudents';
import { useAppSelector} from "../../redux/hooks/hooks";

interface UserListResponseHr {
  id: string;
  email: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: string;
  firstName: string;
  lastName: string;
  status: string;
  githubUsername: string;
}

interface Props {
  availableStudentsVariant: string;
}

const AvailableStudents = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [changeStudentStatus, setChangeStudentStatus] = useState(false);
  const [resDataUserList, setResDataUserList] = useState<UserListResponseHr[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsListPerPage, setStudentsListPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [hrDashboardSwitch, setHrDashboardSwitch] = useState(false);
  const hrID = useAppSelector((state) => state.user.user!.id);

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

  if(hrDashboardSwitch) {
    useEffect(() => {
      setLoading(true);
      setChangeStudentStatus(false);
      (async () => {
        try {
          const res = await fetch(`${apiUrl}/user/list/reserved`);
          const data: UserListResponseHr[] = await res.json();
          setResDataUserList(data);
        } finally {
          setLoading(false);
        }
      })();
    }, [changeStudentStatus, hrDashboardSwitch]);
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
    }, [changeStudentStatus, hrDashboardSwitch]);
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
          <div className="list-container pt-0 ps-0">
            <AvailableStudentsNavigation setHrDashboardSwitch={setHrDashboardSwitch} hrDashboardSwitch={hrDashboardSwitch}/>
          </div>
          <div className="list-container">
            <AvailableStudentsSearch setSearch={setSearch} search={search}/>
            <AvailableStudentsTableElements
              userListResHr={currentStudentsList}
              setChangeStudentStatus={setChangeStudentStatus}
              availableStudentsVariant={props.availableStudentsVariant}
              hrDashboardSwitch={hrDashboardSwitch}
              hrID={hrID}
              setSearch={setSearch}
            />
          </div>
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
