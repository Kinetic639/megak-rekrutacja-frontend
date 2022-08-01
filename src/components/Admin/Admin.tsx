import React, {
  ChangeEvent,
  FormEvent,
  ReactComponentElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import './Admin.css';
import { AddHr } from './AddHr';
import { AdminUserTable } from './AdminUserTable';
import { AdminButtons } from './AdminButtons';
import Papa, { ParseResult } from 'papaparse';
import { AdminHrTable } from './AdminHrTable';
import './Table.css';
import { apiUrl } from '../../config/api';
import { ModalMessage } from '../../views/ModalMessage';

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

type Message = ReactComponentElement<typeof ModalMessage>;

export const Admin = () => {
  const [showAddWindow, setShowAddWindow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showStudentsTable, setShowStudentsTable] = useState(true);
  const [csvData, setCsvData] = useState<ParsedData>([]);
  const [hrsData, setHrsData] = useState<HrData>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [newHr, setNewHr] = useState<HrRow>({
    email: '',
    firstName: '',
    secondName: '',
    company: '',
    maxReservedStudents: 0,
  });

  useEffect(() => {
    getTablesData();
  }, []);

  const getTablesData = async (): Promise<void> => {
    try {
      const data = await fetch(`${apiUrl}/user/list/basic`, {
        method: 'GET',
      });
      const students: ParsedData = await data.json();
      setCsvData(students);
    } catch (error) {}
  };

  const handleLoadCSV = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;

    try {
      const formData = new FormData();
      formData.append('file_asset', e.target.files[0]);
      const response = await fetch(`${apiUrl}/admin/create/students`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.status === 201) {
        getTablesData();
        setShowStudentsTable(true);
        setMessage(
          <ModalMessage
            message={`Zaktualizowano: ${data.studentsUpdated.length} studentów, Dodano: ${data.studentsAdded.length} studentów, Zignorowano: ${data.studentsIgnored.length} studentów`}
            setShowModal={setShowModal}
          />,
        );
        setShowModal(true);
      }
    } catch (error) {}
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
      {showModal ? message : null}
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
