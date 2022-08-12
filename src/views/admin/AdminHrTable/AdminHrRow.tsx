import React from 'react';
interface Props {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  maxReservedStudents: number;
}

export const AdminHrRow = ({
  email,
  firstName,
  lastName,
  company,
  maxReservedStudents,
}: Props) => {
  return (
    <tr className="table-row">
      <td className="table-cell table-row__email">{email}</td>
      <td className="table-cell table-row__first-name">{firstName}</td>
      <td className="table-cell able-row__second-name">{lastName}</td>
      <td className="table-cell table-row__company">{company}</td>
      <td className="table-cell table-row__max-reserved-students">
        {maxReservedStudents}
      </td>
    </tr>
  );
};
