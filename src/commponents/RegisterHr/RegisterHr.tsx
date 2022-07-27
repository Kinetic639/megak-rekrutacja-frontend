import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { apiUrl } from '../../config/api';

// import { CreateNewHr } from 'types';

interface CreateNewHr {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  maxReservedStudents: number;
}

export const RegisterHr = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateNewHr>();
  const [loading, setLoading] = useState(false);
  const [resError, setResError] = useState('');

  const onSubmit: SubmitHandler<CreateNewHr> = async (data) => {
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/user/create/hr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
        }),
        credentials: 'include',
      });
      const dataLoginRes = await res.json();
      console.log(dataLoginRes);

      if (dataLoginRes.message !== 'Login successful.') {
        setResError(dataLoginRes.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Container
        className={`position-absolute top-50 start-50 translate-middle`}
      >
        <h4 className={'text-light'}>
          Dodaj nowego użytkownika HR/Headhunter:
        </h4>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            as={Row}
            className="mb-3 mt-3"
            // controlId="formHorizontalEmail"
          >
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="E-mail"
                {...register('email', {
                  required: `To pole nie może być puste!`,
                  maxLength: 255,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Zły format adresu E-mail.',
                  },
                })}
              />
              {errors.email && (
                <p className={`errorP mt-1`}>{errors.email.message}</p>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Imię"
                {...register('firstName', {
                  required: `To pole nie może być puste!`,
                })}
              />
              {errors.firstName && (
                <p className={`errorP mt-1`}>{errors.firstName.message}</p>
              )}
              {/*{resError === 'Invalid login data.' && (*/}
              {/*  <p*/}
              {/*    className={`errorP mt-1`}*/}
              {/*  >{`Wprowadzone dane są nieprawidłowe.`}</p>*/}
              {/*)}*/}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Nazwisko"
                {...register('lastName', {
                  required: `To pole nie może być puste!`,
                })}
              />
              {errors.lastName && (
                <p className={`errorP mt-1`}>{errors.lastName.message}</p>
              )}
              {/*{resError === 'Invalid login data.' && (*/}
              {/*  <p*/}
              {/*    className={`errorP mt-1`}*/}
              {/*  >{`Wprowadzone dane są nieprawidłowe.`}</p>*/}
              {/*)}*/}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control
                type="text"
                placeholder="Nazwa firmy"
                {...register('company', {
                  required: `To pole nie może być puste!`,
                })}
              />
              {errors.company && (
                <p className={`errorP mt-1`}>{errors.company.message}</p>
              )}
              {/*{resError === 'Invalid login data.' && (*/}
              {/*  <p*/}
              {/*    className={`errorP mt-1`}*/}
              {/*  >{`Wprowadzone dane są nieprawidłowe.`}</p>*/}
              {/*)}*/}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Form.Control
                type="number"
                placeholder="Maksymalna liczba zarezerwowanych kursantów"
                min={1}
                max={999}
                {...register('maxReservedStudents', {
                  required: `To pole nie może być puste!`,
                })}
              />
              {errors.maxReservedStudents && (
                <p className={`errorP mt-1`}>
                  {errors.maxReservedStudents.message}
                </p>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 12 }}>
              <Button
                className={`float-end`}
                id="buttonLogin"
                variant="danger"
                type="submit"
              >
                Zapisz HR
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <h3 className="text-light">
          {resError ? 'Podany e-mail jest już zapisany w bazie danych.' : ''}
        </h3>
        <h3 className="text-light">
          {loading ? 'Zapisję użytkownika w bazie danych.' : ''}
        </h3>
      </Container>
    </>
  );
};
