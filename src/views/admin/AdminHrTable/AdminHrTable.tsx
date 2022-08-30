import React, { useEffect, useState } from 'react';
import './AdminUserTable.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { getHrListAsync } from '../../../redux/features/hrListSlice';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import Accordion from 'react-bootstrap/Accordion';
import { AccordingHeaderAdminHr } from './AccordingHeaderAdminHr';
import { apiUrl } from '../../../config/api';
import { User } from '../../../../../megak-rekrutacja-backend/src/user/user.entity';
import { ShowCvButton } from '../../../components/common/buttons/ShowCvButton/ShowCvButton';

interface Reservations {
  hrs: [{ hr: User; reservations: string[] }];
  students: [{ student: User; reservations: string[] }];
}

export const AdminHrTable = () => {
  const dispatch = useAppDispatch();
  const hrListState = useAppSelector((state) => state.hrList);
  const [reservations, setReservations] = useState<Reservations | null>(null);
  const hrs = hrListState.results;

  useEffect(() => {
    dispatch(getHrListAsync());
    (async () => {
      const res = await fetch(`${apiUrl}/user/reservations/all`, {
        credentials: 'include',
      });
      const data = await res.json();
      await setReservations(data);
    })();
  }, []);
  if (hrListState.status === 'loading') {
    return <CustomSpinner />;
  }
  if (hrs?.length === 0) {
    return <p>Brak wyników do pokazania.</p>;
  }
  return (
    <Accordion className="hrTable">
      {reservations?.hrs.map((el, index) => (
        <Accordion.Item key={el.hr.id} eventKey={String(index)}>
          <AccordingHeaderAdminHr
            hr={el.hr}
            reservations={el.reservations.length || 0}
          />
          <Accordion.Body>
            {el.reservations.map((res) => {
              const student = reservations?.students.find((el) =>
                el.reservations.includes(res),
              )?.student;
              if (!student) {
                return <div>Error</div>;
              }
              return (
                <div className="hrTable__student-container">
                  <img
                    src={
                      `https://github.com/${student.githubUsername}.png` ||
                      'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
                    }
                    width="40"
                    height="40"
                    className="hrTable__student-header--avatar d-inline-block align-top navbar-color avatar"
                    alt={'avatar'}
                  />
                  <div className="hrTable__student-header">
                    {student.firstName} {student.lastName}
                  </div>
                  <ShowCvButton userId={student.id} />
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      ))}
      {/*{reservations?.hrs.map((el, index) => (*/}
      {/*  <Accordion.Item key={el.id} eventKey={String(index)}>*/}
      {/*    <AccordingHeaderAdminHr hr={el.hrId} />*/}
      {/*    <Accordion.Body>*/}
      {/*      <p>asdasdasdasdas</p>*/}
      {/*    </Accordion.Body>*/}
      {/*  </Accordion.Item>*/}
      {/*))}*/}
      {/*{hrs?.map((hr, index) => (*/}
      {/*  <Accordion.Item key={hr.id} eventKey={String(index)}>*/}
      {/*    <AccordingHeaderAdminHr hr={hr} />*/}
      {/*    <Accordion.Body>*/}
      {/*      <p>asdasdasdasdas</p>*/}
      {/*    </Accordion.Body>*/}
      {/*  </Accordion.Item>*/}
      {/*))}*/}
      {/*<Table*/}
      {/*  variant="dark"*/}
      {/*  striped*/}
      {/*  bordered*/}
      {/*  hover*/}
      {/*  className="admin__users-table"*/}
      {/*>*/}
      {/*  <thead className="table-header">*/}
      {/*    <tr>*/}
      {/*      <th className="table-header-cell table-header__email">Email</th>*/}
      {/*      <th className="table-header-cell table-header__first-name">Imię</th>*/}
      {/*      <th className="table-header-cell table-header__second-name">*/}
      {/*        Nazwisko*/}
      {/*      </th>*/}
      {/*      <th className="table-header-cell table-header__company">Firma</th>*/}
      {/*      <th className="table-header-cell table-header__max-reserved-students">*/}
      {/*        Maks. rezerwacji*/}
      {/*      </th>*/}
      {/*    </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody className="table-tbody">*/}
      {/*    {!hrs*/}
      {/*      ? null*/}
      {/*      : hrs.map((row: SingleHrElement) => {*/}
      {/*          if (!row.email) return null;*/}
      {/*          if (!row.email.includes('@')) return null;*/}
      {/*          return (*/}
      {/*            <AdminHrRow*/}
      {/*              key={row.email}*/}
      {/*              email={row.email}*/}
      {/*              firstName={row.firstName}*/}
      {/*              lastName={row.lastName}*/}
      {/*              company={row.company || ''}*/}
      {/*              maxReservedStudents={row.maxReservedStudents || 0}*/}
      {/*            />*/}
      {/*          );*/}
      {/*        })}*/}
      {/*  </tbody>*/}
      {/*</Table>*/}
    </Accordion>
  );
};
