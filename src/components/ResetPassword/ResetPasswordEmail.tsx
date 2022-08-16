import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {apiUrl} from "../../config/api";
import {LoadingSuccess} from "../common/Modals/LoadingSuccess/LoadingSuccess";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";

interface FormRegisterType {
    email: string;
}

const ResetPasswordEmail = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<FormRegisterType>();
    const [loading, setLoading] = useState(false);
    const [resError, setResError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit: SubmitHandler<FormRegisterType> = async (data) => {
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/auth/send-reset-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                }),
            });

            const dataFormRes = await res.json();
            if (dataFormRes.message !== 'Email do resetowania hasła wysłany') {
                if (dataFormRes.message === 'Internal server error') {
                    setResError('Podałeś nieistniejące dane');
                }
                setResError(dataFormRes.message);
            }
            if (dataFormRes.message === 'Email do resetowania hasła wysłany') {
                setSuccess(dataFormRes.message);
            }
        } finally {
            setLoading(false);
        }
    };

    if (success !== '') {
        return <LoadingSuccess message={success} navigate={'/login'}/>;
    }

    return (
        <>
            <Container
                fluid
                className={`position-absolute top-50 start-50 translate-middle container-form-password`}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={'mt-3 mb-4 text-white'}>Podaj e-mail aby zmienić hasło: </h2>

                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formHorizontalPassword"
                    >
                        <Form.Label className={`text-white`}>Adres E-mail:</Form.Label>
                        <Col sm={12}>
                            <Form.Control
                                className={`input-password text-white`}
                                type="email"
                                placeholder="Email"
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className={`errorP mt-1`}>{errors.email.message}</p>
                            )}
                            {resError !== '' && (
                                <p className={`errorP mt-1`}>{`${resError}`}</p>
                            )}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className=" mb-3 mt-4">
                        <Col sm={{ span: 12 }}>
                            <Button
                                className={'float-end '}
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
                                {loading ? 'Trwa Wysyłanie' : 'Wyślij'}
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export {
    ResetPasswordEmail,
}
