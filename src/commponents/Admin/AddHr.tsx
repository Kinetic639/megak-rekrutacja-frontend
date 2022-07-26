import React from 'react';
import './AddHr.css';

interface Props {
  setShowAddWindow: (boolean: boolean) => void;
}

export const AddHr = ({ setShowAddWindow }: Props) => {
  return (
    <form className="admin__add-hr">
      <h2 className="add-hr__title">Dodaj rekrutera</h2>
      <label htmlFor="hr-email" className="label">
        Email
        <input type="text" name="email" id="hr-email" />
      </label>
      <label htmlFor="hr-first-name" className="label">
        Imię
        <input type="text" name="firstName" id="hr-first-name" />
      </label>
      <label htmlFor="hr-second-name" className="label">
        Nazwisko
        <input type="text" name="secondName" id="hr-second-name" />
      </label>
      <label htmlFor="hr-company" className="label">
        Firma
        <input type="text" name="company" id="hr-company" />
      </label>
      <label htmlFor="hr-max-reserved-students" className="label">
        Maks. liczba zarezerwowanych studentów
        <input
          type="number"
          min={1}
          max={999}
          name="maxReservedStudents"
          id="hr-max-reserved-students"
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
