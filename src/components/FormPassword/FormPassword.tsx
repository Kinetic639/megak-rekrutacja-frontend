import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

import { apiUrl } from '../../config/api';
import './FromPassword.css';
import { LoadingSuccess } from '../common/Modals/LoadingSuccess/LoadingSuccess';

interface FormRegisterType {
  password: string;
  rePassword: string;
}

interface Props {
  token: string | null;
}

const FormPassword = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormRegisterType>();
  const [loading, setLoading] = useState(false);
  const [resError, setResError] = useState('');
  const [success, setSuccess] = useState('');

  const password = useRef<HTMLInputElement | string>();
  password.current = watch('password', '');

  const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/auth/activate?token=${props.token}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      const dataFormRes = await res.json();
      if (dataFormRes !== 'Konto aktywowane poprawnie') {
        setResError(dataFormRes.message);
      }
      if (dataFormRes === 'Konto aktywowane poprawnie') {
        setSuccess(dataFormRes.message);
      }
    } finally {
      setLoading(false);
    }
  };
  if (success !== '') {
    return <LoadingSuccess message={success} navigate={'/login'} />;
  }
  return (
    <>
      <Container
        fluid
        className={`position-absolute top-50 start-50 translate-middle container-form-password`}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className={'mt-3 mb-4 text-white'}>Ustaw Nowe Hasło: </h2>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label className={`text-white`}>Hasło:</Form.Label>
            <Col sm={12}>
              <Form.Control
                type="password"
                className={`input-password`}
                placeholder="Hasło"
                {...register('password', {
                  required: 'To pole nie może być puste!',
                  minLength: {
                    value: 8,
                    message: 'Hasło musi mieć conajmniej 8 znaków.',
                  },
                  maxLength: {
                    value: 32,
                    message: 'Hasło nie może mieć więcej niż 32 znaki.',
                  },
                  validate: {
                    isUpper: (value) =>
                      /(?=.*[A-Z])/.test(value) ||
                      'Hasło musi zawierać conajmniej jedną dużą litere',
                    isLower: (value) =>
                      /(?=.*[a-z])/.test(value) ||
                      'Hasło musi zawierać conajmniej jedną małą litere',
                    isSpecialChar: (value) =>
                      /(?=.*[@#$%^&+=!_~])/.test(value) ||
                      'Hasło musi zawierać conajmniej jeden znak specjalny',
                    isOneDigit: (value) =>
                      /(?=.*[0-9])/.test(value) ||
                      'Hasło musi zawierać conajmniej jedną liczbe',
                  },
                })}
              />
              {errors.password && (
                <p className={`errorP mt-1`}>{errors.password.message}</p>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label className={`text-white`}>Powtórz Hasło:</Form.Label>
            <Col sm={12}>
              <Form.Control
                className={`input-password`}
                type="password"
                placeholder="Powtórz Hasło"
                {...register('rePassword', {
                  validate: (value) =>
                    value === password.current || 'Hasło jest nieprawidłowe',
                })}
              />
              {errors.rePassword && (
                <p className={`errorP mt-1`}>{errors.rePassword.message}</p>
              )}
              {resError !== '' && (
                <p className={`errorP mt-1`}>{`${resError}`}</p>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className=" mb-3 mt-4">
            <Col sm={{ span: 12 }}>
              <Button
                className={''}
                variant="danger"
                id={'button-change-password'}
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <Spinner
                    as="span"
                    variant="danger"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className={'me-2 ms-0'}
                    id={'loading-spinner'}
                  />
                )}
                {loading ? 'Zmiana Hasła...' : 'Zmień Hasło'}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export { FormPassword };
