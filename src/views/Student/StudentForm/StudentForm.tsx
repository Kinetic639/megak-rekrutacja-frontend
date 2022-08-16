import React, { ChangeEvent, FormEvent } from 'react';
import { useAppSelector } from '../../../redux/hooks/hooks';
import './StudentForm.css';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import { updateStudent } from 'types';
import { ContractType, WorkType } from 'types';
import Form from 'react-bootstrap/Form';

interface Props {
  // setShowAddWindow: (boolean: boolean) => void;
  student: updateStudent;
  setStudent: (row: updateStudent) => void;
  handleStudentFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const workType = Object.values(WorkType);
const contractType = Object.values(ContractType);

export const StudentForm = ({
  handleStudentFormSubmit,
  student,
  setStudent,
}: Props) => {
  const currUser = useAppSelector((state) => state.user.user);

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const ifNull = (value: WorkType | ContractType) =>
    value ? null : <option>{''}</option>;

  if (!currUser) {
    return <CustomSpinner />;
  }

  return (
    <form className="modal-center" onSubmit={(e) => handleStudentFormSubmit(e)}>
      <h2 className="edit-student__title">Edytuj swoje dane</h2>
      <label htmlFor="hr-first-name" className="label">
        Imię
        <input
          type="text"
          name="firstName"
          id="student-first-name"
          value={student.firstName}
          onChange={onChange}
          required={true}
        />
      </label>
      <label htmlFor="student-last-name" className="label">
        Nazwisko
        <input
          type="text"
          name="lastName"
          id="student-last-name"
          value={student.lastName}
          onChange={onChange}
          required={true}
        />
      </label>
      <label htmlFor="student-tel" className="label">
        Numer telefonu
        <input
          type="tel"
          name="tel"
          id="tel"
          maxLength={9}
          value={student.tel ?? ''}
          onChange={onChange}
          required={true}
        />
      </label>
      {/*should be textArea*/}
      <label htmlFor="bio" className="label">
        Biografia*
        <input
          type="text"
          name="bio"
          id="bio"
          value={student.bio ?? ''}
          onChange={onChange}
        />
      </label>
      <label htmlFor="githubUsername" className="label">
        Nazwa użytkownika GitHub
        <input
          type="text"
          name="githubUsername"
          id="githubUsername"
          value={student.githubUsername ?? ''}
          onChange={onChange}
          required={true}
        />
      </label>
      <label htmlFor="githubUsername" className="label">
        Oczekiwany tryb pracy
        <select
          id="expectedTypeWork"
          name="expectedTypeWork"
          value={workType[workType.indexOf(student.expectedTypeWork)]}
          onChange={onChange}
        >
          {ifNull(student.expectedTypeWork)}
          {workType.map((workType: WorkType, index: number) => (
            <option key={index} value={workType}>
              {workType}
            </option>
          ))}
          required={true}
        </select>
      </label>
      <label htmlFor="targetWorkCity" className="label">
        Docelowe miasto
        <input
          type="text"
          name="targetWorkCity"
          id="targetWorkCity"
          value={student.targetWorkCity ?? ''}
          onChange={onChange}
          required={true}
        />
      </label>
      <label htmlFor="expectedContractType" className="label">
        Preferowany typ umowy
        <select
          id="expectedContractType"
          name="expectedContractType"
          value={
            contractType[contractType.indexOf(student.expectedContractType)]
          }
          onChange={onChange}
        >
          {ifNull(student.expectedContractType)}
          {contractType.map((contractType: ContractType, index: number) => (
            <option key={index} value={contractType}>
              {contractType}
            </option>
          ))}
          required={true}
        </select>
      </label>
      <label htmlFor="canTakeApprenticeship" className="label">
        Zgoda na odbycie bezpłatnych praktyk/stażu na początek
        <Form.Check
          type="radio"
          label="Nie"
          value={'0'}
          checked={
            student.canTakeApprenticeship === false ||
            student.canTakeApprenticeship === '0'
          }
          name="canTakeApprenticeship"
          onChange={onChange}
          id={`inline-radio-1`}
        />
        <Form.Check
          type="radio"
          label="Tak"
          name="canTakeApprenticeship"
          value={'1'}
          checked={
            student.canTakeApprenticeship === true ||
            student.canTakeApprenticeship === '1'
          }
          onChange={onChange}
        />
      </label>
      <label htmlFor="expectedSalary" className="label">
        Oczekiwane wynagrodzenie
        <input
          type="number"
          name="expectedSalary"
          id="expectedSalary"
          min={0}
          max={50000}
          value={student.expectedSalary ?? 0}
          onChange={onChange}
        />
      </label>
      <label htmlFor="monthsOfCommercialExp" className="label">
        Liczba miesięcy komercyjnego doświadczenia
        <input
          type="number"
          name="monthsOfCommercialExp"
          id="monthsOfCommercialExp"
          value={student.monthsOfCommercialExp ?? 0}
          onChange={onChange}
        />
      </label>
      {/*should be textArea*/}
      <label htmlFor="education" className="label">
        Edukacja*
        <input
          type="text"
          name="education"
          id="education"
          value={student.education ?? ''}
          onChange={onChange}
        />
      </label>
      {/*should be textArea*/}
      <label htmlFor="workExperience" className="label">
        Doświadczenie w pracy*
        <input
          type="text"
          name="workExperience"
          id="workExperience"
          value={student.workExperience ?? ''}
          onChange={onChange}
        />
      </label>
      {/*should be textArea*/}
      <label htmlFor="courses" className="label">
        Kursy*
        <input
          type="text"
          name="courses"
          id="courses"
          value={student.courses ?? ''}
          onChange={onChange}
        />
      </label>
      <label htmlFor="portfolioUrls" className="label">
        Link do portfolio* (po przecinku np. https://git.1.pl,https://git.2.pl)
        <input
          type="text"
          name="portfolioUrls"
          id="portfolioUrls"
          value={student.portfolioUrls ?? ''}
          onChange={onChange}
        />
      </label>
      <label htmlFor="teamProjectUrls" className="label">
        Link do projektu gupowego* (po przecinku np. https://git.1.pl,https://git.2.pl)
        <input
          type="text"
          name="teamProjectUrls"
          id="teamProjectUrls"
          value={student.teamProjectUrls ?? ''}
          onChange={onChange}
        />
      </label>
      <h5>* - pole nie jest wymagane</h5>
      <button type="submit" className="button">
        Aktualizuj dane
      </button>
      {/*</div>*/}
    </form>
  );
};
