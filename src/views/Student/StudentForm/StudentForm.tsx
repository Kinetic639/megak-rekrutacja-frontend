import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";

import './StudentForm.css'

interface FormRegisterType {
    id: string;
    firstName: string;
    lastName: string;
    tel: number;
    bio: string;
    githubUsername: string;
    expectedTypeWork: string;
    targetWorkCity: string;
    expectedContractType: string;
    canTakeApprenticeship: string | boolean;
    canTakeApprenticeship2: boolean;
    expectedSalary: number;
    monthsOfCommercialExp: number;
    education: string;
    workExperience: string;
    courses: string;
    portfolioUrls: string;
    teamProjectUrls: string;
}


const StudentForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormRegisterType>();
    const [loading, setLoading] = useState(false);
    const [resError, setResError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit: SubmitHandler<FormRegisterType> = data  => console.log(data);
    return (
        <>
            <Container
                fluid
                className={` container-form-user`}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={'mt-3 mb-4 text-white'}>Dane Użytkownika: </h2>
                    <Row >
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalFirstName" md={12} lg >
                            <Form.Label className={`text-white`}>Imię:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('firstName', {
                                required: "To pole nie może być puste!",
                                maxLength: 100,
                                minLength: 3
                            })}/>
                            {errors.firstName && (
                                <p className={`errorP mt-1`}>{errors.firstName.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalLastName" md={12} lg>
                            <Form.Label className={`text-white`}>Nazwisko:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('lastName', {
                                required: "To pole nie może być puste!",
                                maxLength: 100,
                                minLength: 3
                            })}/>
                            {errors.lastName && (
                                <p className={`errorP mt-1`}>{errors.lastName.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalGitHub" md={12} lg>
                            <Form.Label className={`text-white`}>Nazwa Użytkonika GitHub:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('githubUsername', {
                                    required: "To pole nie może być puste!",
                                    maxLength: 39,
                                    minLength: 3
                                })}/>
                            {errors.githubUsername && (
                                <p className={`errorP mt-1`}>{errors.githubUsername.message}</p>
                            )}
                        </Form.Group>
                    </Row>

                    <Row >
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalTargetCity" md={12} lg>
                            <Form.Label className={`text-white`}>Docelowe miasto, gdzie chce pracować kandydat:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('targetWorkCity', {
                                    maxLength: 100,
                                    minLength: 2
                                })}/>
                            {errors.targetWorkCity && (
                                <p className={`errorP mt-1`}>{errors.targetWorkCity.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalTypeWork" md={12} lg>
                            <Form.Label className={`text-white`}>Wybór preferowanego miejsca pracy:</Form.Label>
                            <Form.Select defaultValue="Dowolne" {...register('expectedTypeWork')}>
                                <option>Dowolne</option>
                                <option>Zdalnie</option>
                                <option>Biuro</option>
                                <option>Gotowość do przeprowadzki</option>
                                <option>Hybrydowo</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalContractType" md={12} lg>
                            <Form.Label className={`text-white`}>Oczekiwany typ kontraktu:</Form.Label>
                            <Form.Select defaultValue="Dowolny" {...register('expectedContractType')}>
                                <option>Dowolny</option>
                                <option>UoP</option>
                                <option>B2B</option>
                                <option>UZ</option>
                                <option>UoD</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="red-line pb-3">
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalSalary" md={12} lg>
                            <Form.Label className={`text-white mt-4`}>Oczekiwane wynagrodzenie miesięczne netto:</Form.Label>
                            <Form.Control
                                type="number"
                                className={`input-password text-white`}
                                {...register('expectedSalary', {
                                    max: 6,
                                    min: 0
                                })}/>
                            {errors.expectedSalary && (
                                <p className={`errorP mt-1`}>{errors.expectedSalary.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalExp" md={12} lg>
                            <Form.Label className={`text-white `}>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu:</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={0}
                                className={`input-password text-white`}
                                {...register('monthsOfCommercialExp', {
                                    required: "To pole nie może być puste!",
                                    min: 0,
                                    max: 11,
                                })}/>
                            {errors.monthsOfCommercialExp && (
                                <p className={`errorP mt-1`}>{errors.monthsOfCommercialExp.message}</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalNumber" md={12} lg>
                            <Form.Label className={`text-white mt-4`}>Numer telefonu:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('tel', {
                                    maxLength: 14,
                                    minLength: 9
                                })}/>
                            {errors.tel && (
                                <p className={`errorP mt-1`}>{errors.tel.message}</p>
                            )}
                        </Form.Group>
                    </Row>
                    <Row className="mt-4">
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalProject" md={12} lg>
                            <Form.Label className={`text-white`}>Project URL:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('teamProjectUrls', {
                                    required: "To pole nie może być puste!",
                                    maxLength: 255,
                                    minLength: 2
                                })}/>
                            <Form.Text className="text-muted">
                                Jeśli chcesz dodać więcej niż jeden link, proszimmy oddzielić go przecinkiem:<br/>
                                https://www.ex1.pl,https://www.ex2.pl
                            </Form.Text>
                            {errors.teamProjectUrls && (
                                <p className={`errorP mt-1`}>{errors.teamProjectUrls.message}</p>
                            )}
                        </Form.Group>
                    </Row>
                    <Row className="red-line pb-2">
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalPortfolio" md={12} lg>
                            <Form.Label className={`text-white`}>Portfolio URL:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                {...register('portfolioUrls', {
                                    maxLength: 45,
                                    minLength: 2
                                })}/>
                            <Form.Text className="text-muted">
                                Jeśli chcesz dodać więcej niż jeden link, proszimmy oddzielić go przecinkiem:<br/>
                                https://www.ex1.pl,https://www.ex2.pl
                            </Form.Text>
                            {errors.portfolioUrls && (
                                <p className={`errorP mt-1`}>{errors.portfolioUrls.message}</p>
                            )}
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mt-4">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation1" >
                            <Form.Label>Przebieg edukacji:</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Jakie były Twoje kroki by wejść do świata programowania..." {...register('education')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation2" >
                            <Form.Label>Przebieg doświadczenia zawodowego:</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Jeśli pracowałaś/ałeś w firmie związaną z programwoaniem, pochwal się..." {...register('workExperience')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation3" >
                            <Form.Label>Kursy i certyfikaty związane z programowaniem:</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Jakie certyfikaty oraz kursy ukończyłeś, wymień tylko te związane z programowaniem..." {...register('courses')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 red-line pb-2">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation4" >
                            <Form.Label>Biografia:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Napisz coś o sobie..." {...register('bio')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 red-line pb-2" >
                        <Form.Label className={`text-white`}>Czy kandydat wyraża zgodę na odbycie bezpłatnych praktyk/stażu na początek ?</Form.Label>
                        <Form.Group className="" controlId="formRadioCheck1" >
                            <Form.Check defaultChecked={false}  defaultValue={1} type="radio" label="Tak" {...register('canTakeApprenticeship')}/>
                        </Form.Group>
                        <Form.Group  className="mb-3 " controlId="formRadioCheck2">
                            <Form.Check defaultChecked={true}  defaultValue={0} type="radio" label="Nie" {...register('canTakeApprenticeship')}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-1 mt-2">
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
                                {loading ? 'Trwa zapisywanie danych...' : 'Zapisz swoje dane personalne'}
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export {
    StudentForm,
}
