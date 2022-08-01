import React from 'react';
import './AdminUserRow.css';

interface Props {
  email: string;
  courseCompletion: string;
  courseEngagement: string;
  projectDegree: string;
  teamProjectDegree: string;
  bonusProjectUrls: string[];
}

export const AdminUserRow = ({
  email,
  courseCompletion,
  courseEngagement,
  projectDegree,
  teamProjectDegree,
  bonusProjectUrls,
}: Props) => {
  return (
    <tr className="table-row">
      <td className="table-cell table-row__email">{email}</td>
      <td className="table-cell table-row__course-completion">
        {courseCompletion}/5
      </td>
      <td className="table-cell able-row__course-engagement">
        {courseEngagement}/5
      </td>
      <td className="table-cell table-row__project-degree">
        {projectDegree}/5
      </td>
      <td className="table-cell table-row__team-project-degree">
        {teamProjectDegree}/5
      </td>
      <td className="table-cell table-row__github-urls">
        {bonusProjectUrls.join(' ')}
      </td>
    </tr>
  );
};
