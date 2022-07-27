import React from 'react';
import './AdminUserTable.css';
import { AdminUserRow } from './AdminUserRow';
import { ParsedData, ParsedRow } from './Admin';

interface Props {
  csvData: ParsedData;
}

export const AdminUserTable = ({ csvData }: Props) => {
  return (
    <table className="admin__users-table">
      <h2 className="table-title">Studenci</h2>
      <tbody className="table-tbody">
        <tr className="table-header">
          <td className="table-header-cell table-header__email">Email</td>
          <td className="table-header-cell table-header__course-completion">
            Ocena przejścia kursu
          </td>
          <td className="table-header-cell table-header__course-engagement">
            Ocena aktywności i zaangażowania na kursie
          </td>
          <td className="table-header-cell table-header__project-degree">
            Ocena kodu w projekcie własnym
          </td>
          <td className="table-header-cell table-header__team-project-degree">
            Ocena kodu w projekcie grupowym
          </td>
          <td className="table-header-cell table-header__github-urls">
            Linki do GitHuba
          </td>
        </tr>
        {!csvData
          ? null
          : csvData.map((row: ParsedRow) => {
              if (!row.email) return null;
              if (!row.email.includes('@')) return null;
              return (
                <AdminUserRow
                  key={row.email}
                  email={row.email}
                  courseCompletion={row.courseCompletion}
                  courseEngagement={row.courseEngagement}
                  projectDegree={row.projectDegree}
                  teamProjectDegree={row.teamProjectDegree}
                  bonusProjectUrls={row.bonusProjectUrls}
                />
              );
            })}
      </tbody>
    </table>
  );
};
