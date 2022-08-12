import React, { FormEvent, useState } from 'react';
import { AdminNavigation } from '../AdminNavigation/AdminNavigation';
import Modal from 'react-bootstrap/Modal';
import { SingleHrElement } from 'types';

import './AdminDashboard.css';
import { DashboardContainer } from '../../../components/common/DashboardContainer/DashboardContainer';
import { DashboardCard } from '../../../components/common/DashboardCard/DashboardCard';
import { AvailableStudents } from '../../../components/AvailableStudents/AvailableStudents';
import { ImportedStudentsView } from '../ImportedStudents/ImportedStudentsView';
import { AddHr } from '../AddHrForm/AddHr';
import { AdminHrTable } from '../AdminHrTable/AdminHrTable';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { createNewHrAsync } from '../../../redux/features/hrListSlice';

export const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const [currTable, setCurrTable] = useState('hr');
  const [showHrAddForm, setSowHrAddForm] = useState(false);
  const [newHr, setNewHr] = useState<SingleHrElement>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    maxReservedStudents: 0,
  });

  const switchCurrTable = (table: string) => {
    setCurrTable(table);
  };

  const switchShowHrAddForm = () => {
    setSowHrAddForm(!showHrAddForm);
  };

  const handleHrAddSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewHrAsync(newHr));
    switchShowHrAddForm();
  };

  return (
    <DashboardContainer>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showHrAddForm}
        onHide={switchShowHrAddForm}
      >
        <AddHr
          setShowAddWindow={switchShowHrAddForm}
          newHr={newHr}
          setNewHr={setNewHr}
          handleHrAddSubmit={handleHrAddSubmit}
        />
      </Modal>

      <AdminNavigation
        currTable={currTable}
        switchCurrTable={switchCurrTable}
        switchShowHrAddForm={switchShowHrAddForm}
      />
      <DashboardCard>
        {currTable === 'hr' && <AdminHrTable />}
        {currTable === 'students' && <AvailableStudents availableStudentsVariant={'available-list'}/>}
        {currTable === 'import' && <ImportedStudentsView />}
      </DashboardCard>
    </DashboardContainer>
  );
};
