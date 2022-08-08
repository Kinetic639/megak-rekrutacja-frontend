import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { apiUrl } from '../../config/api';
import './FromPassword.css';

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
      const res = await fetch(`${apiUrl}/user/change-password?${props.token}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      const dataFormRes = await res.json();
      // @TODO Need to set service after good or bad register
      // if (dataFormRes !== 'Komunikat z BE') {
      //   setResError(dataFormRes.message);
      // }
      // setSuccess(dataFormRes.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid={'sm'} className={``}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className={'mt-4'}>Ustaw Nowe Hasło: </h2>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label>Hasło:</Form.Label>
            <Col sm={12}>
              <Form.Control
                type="password"
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
                <p className={`errorP`}>{errors.password.message}</p>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label>Powtórz Hasło:</Form.Label>
            <Col sm={12}>
              <Form.Control
                type="password"
                placeholder="Powtórz Hasło"
                {...register('rePassword', {
                  validate: (value) =>
                    value === password.current || 'Hasło jest nieprawidłowe',
                })}
              />
              {errors.rePassword && (
                <p className={`errorP`}>{errors.rePassword.message}</p>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 12 }}>
              <Button className={''} type="submit">
                Zmień Hasło
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export { FormPassword };
