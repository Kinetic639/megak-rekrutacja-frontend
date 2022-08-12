import React, { ChangeEvent, FormEvent } from 'react';
import './AddHr.css';
import { HrRow } from './Admin';

interface Props {
  setShowAddWindow: (boolean: boolean) => void;
  newHr: HrRow;
  setNewHr: (row: HrRow) => void;
  handleHrAddSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const AddHr = ({
  setShowAddWindow,
  setNewHr,
  newHr,
  handleHrAddSubmit,
}: Props) => {
  const changeHrValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNewHr({
      ...newHr,
      [name]: value,
    });
  };

  return (
    <form
      className="admin__add-hr modal-center"
      onSubmit={(e) => handleHrAddSubmit(e)}
    >
      <h2 className="add-hr__title">Dodaj rekrutera</h2>
      <label htmlFor="hr-email" className="label">
        Email
        <input
          type="email"
          name="email"
          id="hr-email"
          onChange={changeHrValue}
          required={true}
        />
      </label>
      <label htmlFor="hr-first-name" className="label">
        Imię
        <input
          type="text"
          name="firstName"
          id="hr-first-name"
          onChange={changeHrValue}
          required={true}
        />
      </label>
      <label htmlFor="hr-second-name" className="label">
        Nazwisko
        <input
          type="text"
          name="secondName"
          id="hr-second-name"
          onChange={changeHrValue}
          required={true}
        />
      </label>
      <label htmlFor="hr-company" className="label">
        Firma
        <input
          type="text"
          name="company"
          id="hr-company"
          onChange={changeHrValue}
          required={true}
        />
      </label>
      <label htmlFor="hr-max-reserved-students" className="label">
        Maks. liczba zarezerwowanych studentów
        <input
          type="number"
          min={1}
          max={999}
          name="maxReservedStudents"
          id="hr-max-reserved-students"
          required={true}
          onChange={changeHrValue}
        />
      </label>
      <div className="add-hr__buttons">
        <button
          type="button"
          className="button"
          onClick={() => setShowAddWindow(false)}
        >
          Anuluj
        </button>
        <button type="submit" className="button">
          Dodaj
        </button>
      </div>
    </form>
  );
};
