import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Admin.css';
import { AddHr } from './AddHr';
import { AdminUserTable } from './AdminUserTable';
import { AdminButtons } from './AdminButtons';
import Papa, { ParseResult } from 'papaparse';
import { AdminHrTable } from './AdminHrTable';
import './Table.css';

export interface CsvRow {
  email: string;
  courseCompletion: string;
  courseEngagement: string;
  projectDegree: string;
  teamProjectDegree: string;
  bonusProjectUrls: string;
}

type WithoutBonusProjectUrlsAsString = Omit<CsvRow, 'bonusProjectUrls'>;

export interface ParsedRow extends WithoutBonusProjectUrlsAsString {
  bonusProjectUrls: string[];
}

export type ParsedData = ParsedRow[] | [];

export interface HrRow {
  email: string;
  firstName: string;
  secondName: string;
  company: string;
  maxReservedStudents: number;
}

export type HrData = HrRow[] | [];

export const Admin = () => {
  const [showAddWindow, setShowAddWindow] = useState(false);
  const [showStudentsTable, setShowStudentsTable] = useState(true);
  const [csvData, setCsvData] = useState<ParsedData>([]);
  const [hrsData, setHrsData] = useState<HrData>([]);
  const [newHr, setNewHr] = useState<HrRow>({
    email: '',
    firstName: '',
    secondName: '',
    company: '',
    maxReservedStudents: 0,
  });

  const handleLoadCSV = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    Papa.parse(e.target.files[0], {
      header: true,
      complete: async (results: ParseResult<CsvRow>) => {
        const parsedData: ParsedData = results.data.map((result) =>
          (({
            email,
            courseCompletion,
            courseEngagement,
            projectDegree,
            teamProjectDegree,
          }) => ({
            email,
            courseCompletion,
            courseEngagement,
            projectDegree,
            teamProjectDegree,
            bonusProjectUrls: result.bonusProjectUrls.split(','),
          }))(result),
        );
        setCsvData(parsedData);
        setShowStudentsTable(true);
      },
    });
  };

  const handleHrAddSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHrsData((hrsData) => [...hrsData, newHr]);
    setNewHr({
      email: '',
      firstName: '',
      secondName: '',
      company: '',
      maxReservedStudents: 0,
    });
    setShowAddWindow(false);
    setShowStudentsTable(false);
  };

  return (
    <div className="admin">
      {showAddWindow ? (
        <AddHr
          setShowAddWindow={setShowAddWindow}
          newHr={newHr}
          setNewHr={setNewHr}
          handleHrAddSubmit={handleHrAddSubmit}
        />
      ) : null}
      <AdminButtons
        setShowAddWindow={setShowAddWindow}
        handleLoadCSV={handleLoadCSV}
        setShowStudentsTable={setShowStudentsTable}
        showStudentsTable={showStudentsTable}
      />
      {showStudentsTable ? (
        <AdminUserTable csvData={csvData} />
      ) : (
        <AdminHrTable hrs={hrsData} />
      )}
      {showAddWindow ? <div className="background-blur" /> : null}
    </div>
  );
};
