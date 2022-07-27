import React from 'react';
import './AdminUserTable.css';
import { HrData, HrRow } from './Admin';
import { AdminHrRow } from './AdminHrRow';

interface Props {
  hrs: HrData;
}

export const AdminHrTable = ({ hrs }: Props) => {
  return (
    <table className="admin__users-table">
      <h2 className="table-title">Rekruterzy</h2>
      <tbody className="table-tbody">
        <tr className="table-header">
          <td className="table-header-cell table-header__email">Email</td>
          <td className="table-header-cell table-header__first-name">Imię</td>
          <td className="table-header-cell table-header__second-name">
            Nazwisko
          </td>
          <td className="table-header-cell table-header__company">Firma</td>
          <td className="table-header-cell table-header__max-reserved-students">
            Maks. liczba studentów do rozmowy
          </td>
        </tr>
        {!hrs
          ? null
          : hrs.map((row: HrRow) => {
              if (!row.email) return null;
              if (!row.email.includes('@')) return null;
              return (
                <AdminHrRow
                  key={row.email}
                  email={row.email}
                  firstName={row.firstName}
                  secondName={row.secondName}
                  company={row.company}
                  maxReservedStudents={row.maxReservedStudents}
                />
              );
            })}
      </tbody>
    </table>
  );
};
