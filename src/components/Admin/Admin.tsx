import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Admin.css';
import { AddHr } from './AddHr';
import { AdminUserTable } from './AdminUserTable';
import { AdminButtons } from './AdminButtons';
import { AdminHrTable } from './AdminHrTable';
import './Table.css';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { importStudentsFromFileAsync } from '../../redux/features/studentsImportSlice';
import { FormState } from 'react-hook-form';
import { Form } from 'react-bootstrap';

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

export interface HrRow {
  email: string;
  firstName: string;
  secondName: string;
  company: string;
  maxReservedStudents: number;
}

export type HrData = HrRow[] | [];

export const Admin = () => {
  const dispatch = useAppDispatch();
  const [showAddWindow, setShowAddWindow] = useState(false);
  const [showStudentsTable, setShowStudentsTable] = useState(true);
  const [hrsData, setHrsData] = useState<HrData>([]);
  const [newHr, setNewHr] = useState<HrRow>({
    email: '',
    firstName: '',
    secondName: '',
    company: '',
    maxReservedStudents: 0,
  });

  const handleLoadCSV = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    const formData = new FormData();
    formData.append('file_asset', e.target.files[0]);
    if (e.target.files[0]) {
      dispatch(importStudentsFromFileAsync(formData));
    }
    e.target.value = "";
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
      {showStudentsTable ? <AdminUserTable /> : <AdminHrTable hrs={hrsData} />}
      {showAddWindow ? <div className="background-blur" /> : null}
    </div>
  );
};
