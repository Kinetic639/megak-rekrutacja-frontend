import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

import './UserLogin.css';
import { apiUrl } from '../../config/api';
import { useNavigate } from 'react-router';

interface FormLoginType {
  email: string;
  password: string;
}

const UserLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormLoginType>();
  const [loading, setLoading] = useState(false);
  const [resError, setResError] = useState('');
  const [areCredentialsValid, setAreCredentialsValid] = useState<
    boolean | undefined
  >();
  const onSubmit: SubmitHandler<FormLoginType> = async (data) => {
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
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
      if (dataLoginRes.message !== 'Login successful') {
        setResError(dataLoginRes.message);
        setAreCredentialsValid(false);
      } else {
        setAreCredentialsValid(true);
        navigate('/dashboard');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        className={`position-absolute top-50 start-50 translate-middle container-user-login`}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <img
            src="https://static1.s123-cdn-static-a.com/uploads/5191798/400_609bb5e2d9a39.png"
            width="124px"
            height="76px"
            className="mx-auto d-block mb-5"
            alt="MegaK Logo"
          />

          <Form.Group
            as={Row}
            className="mb-3 mt-3"
            controlId="formHorizontalEmail"
          >
            <Col sm={12}>
              <Form.Control
                className={'text-light'}
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
              {/*TODO Error label if email from database isn't correct.*/}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Col sm={12}>
              <Form.Control
                className={'text-light'}
                type="password"
                placeholder="Hasło"
                {...register('password', {
                  required: `To pole nie może być puste!`,
                })}
              />

              {errors.password && (
                <p className={`errorP mt-1`}>{errors.password.message}</p>
              )}
              {resError !== '' && (
                <p className={`errorP mt-1`}>{`${resError}`}</p>
              )}
              {/*TODO Error label if password from database don't mach or other.*/}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <p className={'mb-4 text-light text-end'}>Zapomniałeś hasła?</p>
            <Col sm={{ span: 12 }}>
              <Button
                className={`float-end `}
                id="buttonLogin"
                variant="danger"
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
                {loading ? 'Logowanie...' : 'Zaloguj'}
              </Button>
              <p className={'mt-1 text-light'}>
                <span>Nie masz konta?</span>{' '}
                <a id={'register-a'} href={'/'}>
                  Zresetuj się
                </a>
              </p>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export { UserLogin };
