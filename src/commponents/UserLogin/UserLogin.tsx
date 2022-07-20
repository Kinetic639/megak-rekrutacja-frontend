import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

import './UserLogin.css';

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
  return (
    <>
      <Container
        className={`position-absolute top-50 start-50 translate-middle container`}
      >
        <Form>
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
                type="email"
                placeholder="E-mail"
                {...register('email', {
                  required: `To pole nie może być puste!`,
                  maxLength: 255,
                  minLength: 3,
                })}
              />
              {errors.email && (
                <p className={`errorP`}>{errors.email.message}</p>
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
                  maxLength: 36,
                  minLength: 8,
                })}
              />
              {errors.password && (
                <p className={`errorP`}>{errors.password.message}</p>
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
