import React, {
  ChangeEvent,
  FormEvent,
  ReactComponentElement,
  useEffect,
  useState,
} from 'react';
import './Admin.css';
import { AddHr } from './AddHr';
import { AdminUserTable } from './AdminUserTable';
import { AdminButtons } from './AdminButtons';
import { AdminHrTable } from './AdminHrTable';
import './Table.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { importStudentsFromFileAsync } from '../../redux/features/studentsImportSlice';
import { FormState } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { apiUrl } from '../../config/api';
import { ModalMessage } from '../../views/ModalMessage';
import { log } from 'util';

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
export type ParsedData = ParsedRow[] | [];

type Message = ReactComponentElement<typeof ModalMessage>;

export const Admin = () => {
  const importedStudentsState = useAppSelector((store) => store.studentsImport);
  const dispatch = useAppDispatch();
  const [csvData, setCsvData] = useState<ParsedData>([]);
  const [showAddWindow, setShowAddWindow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showStudentsTable, setShowStudentsTable] = useState(true);
  const [hrsData, setHrsData] = useState<HrData>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [newHr, setNewHr] = useState<HrRow>({
    email: '',
    firstName: '',
    secondName: '',
    company: '',
    maxReservedStudents: 0,
  });
  const [loading, setLoading] = useState(false);

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

    const formData = new FormData();
    formData.append('file_asset', e.target.files[0]);
    if (e.target.files[0]) {
      await dispatch(importStudentsFromFileAsync(formData)).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          console.log(importedStudentsState.status);
          getTablesData();
          setShowStudentsTable(true);
          setMessage(
            <ModalMessage
              message={`Zaktualizowano: ${importedStudentsState.results.studentsUpdated.length} studentów, Dodano: ${importedStudentsState.results.studentsAdded.length} studentów, Zignorowano: ${importedStudentsState.results.studentsIgnored.length} studentów`}
              setShowModal={setShowModal}
            />,
          );
          setShowModal(true);
        }
      });
    }
    e.target.value = '';
  };

  const handleHrAddSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //view with all hr is not necessary at this point
    //maybe hrsData delete and replace with refresh list after added new hr (if you really want)
    setHrsData((hrsData) => [...hrsData, newHr]);
    setNewHr({
      email: '',
      firstName: '',
      secondName: '',
      company: '',
      maxReservedStudents: 0,
    });
    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/admin/create/hr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHr),
        credentials: 'include',
      });
      const dataLoginRes = await res.json();
      console.log(dataLoginRes)
      if (dataLoginRes.statusCode === 201) {
        setShowAddWindow(false);
        setShowStudentsTable(false);
      }
      if(dataLoginRes.statusCode === 404){
        //todo show nice & correct message
      }

    } finally {
      setLoading(false);
    }
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
          loading={loading}
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
