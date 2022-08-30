import React, { MouseEventHandler, SyntheticEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiFillStar } from 'react-icons/ai';

import './FiltersPanel.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { clearFilters, setFilters } from '../../redux/features/filtersSlice';

interface Grade {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
}

interface expectedTypeWork {
  REMOTE: boolean;
  OFFICE: boolean;
  MOVE: boolean;
  HYBRID: boolean;
  DEFAULT: boolean;
}

interface expectedSalary {
  from: number;
  to: number;
}

interface ExpectedContractType {
  UOP: boolean;
  B2B: boolean;
  UZ: boolean;
  UOD: boolean;
  DEFAULT: boolean;
}

interface monthsOfCommercialExp {
  experienceValue: number | null;
}

interface filtersInt {
  courseCompletion: Grade;
  courseEngagement: Grade;
  projectDegree: Grade;
  teamProjectDegree: Grade;
  expectedTypeWork: {
    REMOTE: boolean;
    OFFICE: boolean;
    MOVE: boolean;
    HYBRID: boolean;
    DEFAULT: boolean;
  };
  expectedContractType: {
    UOP: boolean;
    B2B: boolean;
    UZ: boolean;
    UOD: boolean;
    DEFAULT: boolean;
  };
  expectedSalary: {
    from: number;
    to: number;
  };
  canTakeApprenticeship: {
    value: boolean | null;
  };
  monthsOfCommercialExp: {
    experienceValue: number | null;
  };
}

interface Props {
  hideModal: () => void;
}

export const FiltersPanel = ({ hideModal }: Props) => {
  const dispatch = useAppDispatch();
  const filtersState = useAppSelector((state) => state.filters);
  const currFilters = filtersState.filtersSet.filters;
  const [form, setForm] = useState<filtersInt>(currFilters);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(setFilters(form));
    hideModal();
  };
  const handleClearForm = () => {
    dispatch(clearFilters());
    hideModal();
  };
  const handleCancel = () => {
    hideModal();
  };
  const handleFieldChange = (
    formGroup:
      | 'courseCompletion'
      | 'courseEngagement'
      | 'projectDegree'
      | 'teamProjectDegree'
      | 'expectedTypeWork'
      | 'expectedContractType'
      | 'expectedSalary'
      | 'canTakeApprenticeship'
      | 'monthsOfCommercialExp',
    formGroupEl: string,
    formElValue: boolean | string | number,
  ) => {
    setForm({
      ...form,
      [formGroup]: { ...form[formGroup], [formGroupEl]: formElValue },
    });
  };

  const renderNamesSwitch = (el: string): string => {
    switch (el) {
      case 'REMOTE':
        return 'Zdalnie';
      case 'OFFICE':
        return 'Biuro';
      case 'MOVE':
        return 'Możliwość relokacji';
      case 'HYBRID':
        return 'Hybrydowo';
      case 'DEFAULT':
        return 'Dowolne';
      case 'to':
        return 'Do: ';
      case 'from':
        return 'Od: ';
      case 'UOP':
        return 'Umowa o pracę';
      case 'B2B':
        return 'B2B';
      case 'UZ':
        return 'Umowa zlecenie';
      case 'UOD':
        return 'Umowa o dzieło';
      case 'experienceValue':
        return 'miesięcy';
      default:
        return 'brak danych';
    }
  };

  return (
    <div className="filterForm__container">
      <div className="filterForm__header">
        <h3 className="filterForm__title">Filtrowanie</h3>
        <Button
          variant="dark"
          className="filterForm__btn--dark custom-button button"
          onClick={handleClearForm}
        >
          Wyczyść filtry
        </Button>
      </div>
      <form className="filterForm__form" onSubmit={handleSubmit}>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Ocena przejścia kursu
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.courseCompletion).map((el) => (
              <div key={el} className="filterForm__checkbox-container">
                <input
                  type="checkbox"
                  checked={form.courseCompletion[el as unknown as keyof Grade]}
                  className="filterForm__checkbox"
                  id={`course-completion-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'courseCompletion',
                      `${el}`,
                      !form.courseCompletion[el as unknown as keyof Grade],
                    )
                  }
                />
                <label
                  className="filterForm__checkbox-label"
                  htmlFor={`course-completion-${el}`}
                >
                  <span className="filterForm__checkbox--span">{el}</span>
                  <AiFillStar className="filterForm__checkbox--icon" />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Ocena aktywności i zaangażowania na kursie
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.courseEngagement).map((el) => (
              <div key={el} className="filterForm__checkbox-container">
                <input
                  type="checkbox"
                  checked={form.courseEngagement[el as unknown as keyof Grade]}
                  className="filterForm__checkbox"
                  id={`course-engagement-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'courseEngagement',
                      `${el}`,
                      !form.courseEngagement[el as unknown as keyof Grade],
                    )
                  }
                />
                <label
                  className="filterForm__checkbox-label"
                  htmlFor={`course-engagement-${el}`}
                >
                  <span className="filterForm__checkbox--span">{el}</span>
                  <AiFillStar className="filterForm__checkbox--icon" />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Ocena kodu w projekcie własnym
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.projectDegree).map((el) => (
              <div key={el} className="filterForm__checkbox-container">
                <input
                  type="checkbox"
                  checked={form.projectDegree[el as unknown as keyof Grade]}
                  className="filterForm__checkbox"
                  id={`course-degree-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'projectDegree',
                      `${el}`,
                      !form.projectDegree[el as unknown as keyof Grade],
                    )
                  }
                />
                <label
                  className="filterForm__checkbox-label"
                  htmlFor={`course-degree-${el}`}
                >
                  <span className="filterForm__checkbox--span">{el}</span>
                  <AiFillStar className="filterForm__checkbox--icon" />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Ocena pracy w zespole w Scrum
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.teamProjectDegree).map((el) => (
              <div key={el} className="filterForm__checkbox-container">
                <input
                  type="checkbox"
                  checked={form.teamProjectDegree[el as unknown as keyof Grade]}
                  className="filterForm__checkbox"
                  id={`course-team-project-degree-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'teamProjectDegree',
                      `${el}`,
                      !form.teamProjectDegree[el as unknown as keyof Grade],
                    )
                  }
                />
                <label
                  className="filterForm__checkbox-label"
                  htmlFor={`course-team-project-degree-${el}`}
                >
                  <span className="filterForm__checkbox--span">{el}</span>
                  <AiFillStar className="filterForm__checkbox--icon" />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Preferowane miejsce pracy
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.expectedTypeWork).map((el) => (
              <div key={el} className="filterForm__checkbox-container">
                <input
                  type="checkbox"
                  checked={
                    form.expectedTypeWork[
                      el as unknown as keyof expectedTypeWork
                    ]
                  }
                  className="filterForm__checkbox"
                  id={`course-expected-work-type-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'expectedTypeWork',
                      `${el}`,
                      !form.expectedTypeWork[
                        el as unknown as keyof expectedTypeWork
                      ],
                    )
                  }
                />
                <label
                  className="filterForm__checkbox-label"
                  htmlFor={`course-expected-work-type-${el}`}
                >
                  <span className="filterForm__checkbox--span">
                    {renderNamesSwitch(el)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Preferowany typ kontraktu
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.expectedContractType).map((el) => (
              <div key={el} className="filterForm__checkbox-container">
                <input
                  type="checkbox"
                  checked={
                    form.expectedContractType[
                      el as unknown as keyof ExpectedContractType
                    ]
                  }
                  className="filterForm__checkbox"
                  id={`course-expected-contract-type-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'expectedContractType',
                      `${el}`,
                      !form.expectedContractType[
                        el as unknown as keyof ExpectedContractType
                      ],
                    )
                  }
                />
                <label
                  className="filterForm__checkbox-label"
                  htmlFor={`course-expected-contract-type-${el}`}
                >
                  <span className="filterForm__checkbox--span">
                    {renderNamesSwitch(el)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Oczekiwane wynagrodzenie miesięczne netto
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.expectedSalary).map((el) => (
              <div key={el} className="filterForm__input-container">
                <label
                  className="filterForm__input-label"
                  htmlFor={`course-expected-salary-${el}`}
                >
                  <span className="filterForm__input--span">
                    {renderNamesSwitch(el)}
                  </span>
                </label>
                <input
                  className="filterForm__input-field"
                  type="number"
                  placeholder="np. 10000"
                  value={
                    form.expectedSalary[el as unknown as keyof expectedSalary]
                  }
                  // className="filterForm__checkbox"
                  id={`course-expected-salary-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'expectedSalary',
                      `${el}`,
                      Number(e.target.value),
                    )
                  }
                />
                {` zł`}
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Zgoda na odbycie bezpłatnych praktyk/stażu na początek
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.canTakeApprenticeship).map((el) => (
              <div key={el} className="filterForm__input-container">
                <div className="filterForm__radio-container">
                  <input
                    className="filterForm__radio-input"
                    type="radio"
                    id="tak"
                    name="ble"
                    value="tak"
                    onChange={(e) =>
                      handleFieldChange('canTakeApprenticeship', `${el}`, true)
                    }
                  />
                  <label className="filterForm__radio-label" htmlFor="tak">
                    Tak
                  </label>
                </div>

                <div className="filterForm__radio-container">
                  <input
                    className="filterForm__radio-input"
                    type="radio"
                    id="nie"
                    name="ble"
                    value="nie"
                    onChange={(e) =>
                      handleFieldChange('canTakeApprenticeship', `${el}`, false)
                    }
                  />
                  <label className="filterForm__radio-label" htmlFor="nie">
                    Nie
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="filterForm__checkbox-section">
          <p className="filterForm__checkbox-section--title">
            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
          </p>
          <div className="filterForm__checkbox-section--container">
            {Object.keys(form.monthsOfCommercialExp).map((el) => (
              <div key={el} className="filterForm__input-container">
                <input
                  className="filterForm__input-field"
                  type="number"
                  placeholder="np. 10000"
                  value={
                    form.monthsOfCommercialExp[
                      el as unknown as keyof monthsOfCommercialExp
                    ] || 0
                  }
                  // className="filterForm__checkbox"
                  id={`course-experience-${el}`}
                  onChange={(e) =>
                    handleFieldChange(
                      'monthsOfCommercialExp',
                      `${el}`,
                      Number(e.target.value),
                    )
                  }
                />

                <label
                  className="filterForm__input-label"
                  htmlFor={`course-experience-${el}`}
                >
                  <span className="filterForm__input--span">
                    {renderNamesSwitch(el)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="filterForm__footer">
          <Button
            variant="dark"
            className="filterForm__btn--dark filterForm__btn--cancel custom-button button"
            onClick={handleCancel}
          >
            Anuluj
          </Button>
          <Button
            className="filterForm__btn--submit custom-button button"
            variant="danger"
            type="submit"
          >
            Pokaż wyniki
          </Button>
        </div>
      </form>
    </div>
  );
};
