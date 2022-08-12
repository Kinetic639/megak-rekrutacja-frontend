import React, { useEffect } from 'react';
import './AdminUserTable.css';
import { AdminHrRow } from './AdminHrRow';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { getHrListAsync } from '../../../redux/features/hrListSlice';
import { SingleHrElement } from 'types';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import { Table } from 'react-bootstrap';

export const AdminHrTable = () => {
  const dispatch = useAppDispatch();
  const hrListState = useAppSelector((state) => state.hrList);
  const hrs = hrListState.results;
  useEffect(() => {
    dispatch(getHrListAsync());
  }, []);
  if (hrListState.status === 'loading') {
    return <CustomSpinner />;
  }
  return (
    <div className="hrTable">
      <Table
        variant="dark"
        striped
        bordered
        hover
        className="admin__users-table"
      >
        <thead className="table-header">
          <tr>
            <th className="table-header-cell table-header__email">Email</th>
            <th className="table-header-cell table-header__first-name">Imię</th>
            <th className="table-header-cell table-header__second-name">
              Nazwisko
            </th>
            <th className="table-header-cell table-header__company">Firma</th>
            <th className="table-header-cell table-header__max-reserved-students">
              Maks. rezerwacji
            </th>
          </tr>
        </thead>
        <tbody className="table-tbody">
          {!hrs
            ? null
            : hrs.map((row: SingleHrElement) => {
                if (!row.email) return null;
                if (!row.email.includes('@')) return null;
                return (
                  <AdminHrRow
                    key={row.email}
                    email={row.email}
                    firstName={row.firstName}
                    lastName={row.lastName}
                    company={row.company || ''}
                    maxReservedStudents={row.maxReservedStudents || 0}
                  />
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};
