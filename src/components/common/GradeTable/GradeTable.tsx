import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import React from 'react';
import { StarGrade } from '../StarGrade/StarGrade';

import './GradeTable.css';
import { Score } from 'types';

interface Props {
  showStars?: boolean;
  grades?: { name: string; grade: string | Score | number | null }[];
  tableSize?: 'sm' | 'md';
  starsSize?: 'md' | 'lg';
  gradeSize?: 'md' | 'lg';
  hideGrade?: boolean;
}

export const GradeTable = ({
  hideGrade = false,
  showStars = false,
  grades,
  tableSize = 'md',
  gradeSize = 'md',
  starsSize = 'md',
}: Props) => {
  return (
    <div className="grades-table__table">
      {grades?.map((grade, index) => (
        <div key={index} className={`grades-table__table-element ${tableSize}`}>
          <div className="grade__row  grade__row--title">
            <p className="mb-0">{grade.name}</p>
          </div>
          <div className={`grade__row grade__row--score ${gradeSize}`}>
            {!hideGrade && (
              <div className="grade__col ">
                <p
                  className={`grade__score ${
                    (grade.grade &&
                      (Number(grade.grade) < 0 || Number(grade.grade) > 5)) ||
                    typeof grade.grade === 'string'
                      ? 'fw-bold'
                      : null
                  }`}
                >
                  {grade.grade}&nbsp;
                  {grade.grade && grade.grade >= 0 && grade.grade <= 5 && (
                    <span className="grade__score--span">/&nbsp;5</span>
                  )}
                </p>
              </div>
            )}
            {showStars && (
              <div>
                <StarGrade stars={grade.grade} size={starsSize} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
