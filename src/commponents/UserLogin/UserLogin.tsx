import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

import './UserLogin.css';
import { apiUrl } from '../../config/api';

interface FormLoginType {
  email: string;
  password: string;
}

const UserLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormLoginType>();
  const [loading, setLoading] = useState(false);
  const [resError, setResError] = useState('');
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
      console.log(dataLoginRes);

      if (dataLoginRes.message !== 'Login successful') {
        setResError(dataLoginRes.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        className={`position-absolute top-50 start-50 translate-middle container`}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Image
            className={`mx-auto d-block mb-5`}
            src={'https://platforma.megak.pl/public/ui/logo.png'}
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
                <p
                  className={`errorP mt-1`}
                >{`${resError}`}</p>
              )}
              {/*TODO Error label if password from database don't mach or other.*/}
            </Col>
          </Form.Group>
          <p className={'mb-4 text-light'}>
            Nie pamiętasz hasła? <a href={'/'}>Zresetuj</a>{' '}
          </p>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 12 }}>
              <Button
                className={`float-end`}
                id="buttonLogin"
                variant="danger"
                type="submit"
              >
                Zaloguj
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export { UserLogin };
