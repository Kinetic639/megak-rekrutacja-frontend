import React, { MouseEventHandler, SyntheticEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiFillStar } from 'react-icons/ai';

import './FiltersPanel.css';

const formInitialValues = {
  courseCompletion: {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  },
  courseEngagement: {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  },
  projectDegree: {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  },
  teamProjectDegree: {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  },
  expectedTypeWork: {
    value: '',
  },
  expectedContractType: {
    value: null,
  },
  expectedSalaryFrom: {
    from: 0,
    to: 0,
  },
  canTakeApprenticeship: {
    value: null,
  },
  monthsOfCommercialExp: {
    value: null,
  },
};

export const FiltersPanel = () => {
  const [form, setForm] = useState(formInitialValues);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('submit');
  };

  const handleCheckboxClick = (
    formEl: string,
    formElValue: string | boolean | number,
  ) => {
    setForm({
      ...form,
      courseCompletion: { ...form.courseCompletion, two: true },
    });
  };

  return (
    <div className="filterForm__container">
      <div className="filterForm__header">
        <h3 className="filterForm__title">Filtrowanie</h3>
        <Button
          variant="dark"
          className="filterForm__btn--dark custom-button button"
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
            <div className="filterForm__checkbox-container">
              <input
                type="checkbox"
                className="filterForm__checkbox"
                id="course-completion-1"
                onChange={(e) => console.log(form)}
              />
              <label
                className="filterForm__checkbox-label"
                htmlFor="course-completion-1"
              >
                <span className="filterForm__checkbox--span">1</span>
                <AiFillStar className="filterForm__checkbox--icon" />
              </label>
            </div>
            <div className="filterForm__checkbox-container">
              <input
                type="checkbox"
                className="filterForm__checkbox"
                id="course-completion-2"
                name="testName"
                onChange={(e) =>
                  handleCheckboxClick(
                    'courseCompletion.two',
                    !form.courseCompletion.two,
                  )
                }
              />
              <label
                className="filterForm__checkbox-label"
                htmlFor="course-completion-2"
              >
                <span className="filterForm__checkbox--span">2</span>
                <AiFillStar className="filterForm__checkbox--icon" />
              </label>
            </div>
            <div className="filterForm__checkbox-container">
              <input
                type="checkbox"
                className="filterForm__checkbox"
                id="course-completion-3"
              />
              <label
                className="filterForm__checkbox-label"
                htmlFor="course-completion-3"
              >
                <span className="filterForm__checkbox--span">3</span>
                <AiFillStar className="filterForm__checkbox--icon" />
              </label>
            </div>
            <div className="filterForm__checkbox-container">
              <input
                type="checkbox"
                className="filterForm__checkbox"
                id="course-completion-4"
              />
              <label
                className="filterForm__checkbox-label"
                htmlFor="course-completion-4"
              >
                <span className="filterForm__checkbox--span">4</span>
                <AiFillStar className="filterForm__checkbox--icon" />
              </label>
            </div>
            <div className="filterForm__checkbox-container">
              <input
                type="checkbox"
                className="filterForm__checkbox"
                id="course-completion-5"
              />
              <label
                className="filterForm__checkbox-label"
                htmlFor="course-completion-5"
              >
                <span className="filterForm__checkbox--span">5</span>
                <AiFillStar className="filterForm__checkbox--icon" />
              </label>
            </div>
          </div>
        </div>

        <div className="filterForm__footer">
          <Button
            variant="dark"
            className="filterForm__btn--dark filterForm__btn--cancel custom-button button"
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
