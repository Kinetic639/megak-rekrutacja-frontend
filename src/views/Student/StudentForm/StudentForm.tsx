import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";

import './StudentForm.css'
import {apiUrl} from "../../../config/api";
import {useAppSelector} from "../../../redux/hooks/hooks";
import {useNavigate} from "react-router-dom";

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

interface Props {
    correctData?: boolean;
}

const StudentForm = (props: Props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<FormRegisterType>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [resError, setResError] = useState('');
    const [success, setSuccess] = useState('');

    const currUser = useAppSelector((state) => state.user.user);
    if (currUser?.githubUsername === null) {
        currUser.githubUsername = '';
    }
    if (currUser?.targetWorkCity === null) {
        currUser.targetWorkCity = '';
    }
    if (currUser?.expectedSalary === null) {
        currUser.expectedSalary = 0;
    }
    if (currUser?.monthsOfCommercialExp === null) {
        currUser.monthsOfCommercialExp = 0;
    }
    if (currUser?.tel === null) {
        currUser.tel = '';
    }
    if (currUser?.education === null) {
        currUser.education = '';
    }
    if (currUser?.workExperience === null) {
        currUser.workExperience = '';
    }
    if (currUser?.courses === null) {
        currUser.courses = '';
    }
    if (currUser?.bio === null) {
        currUser.bio = '';
    }
    const onSubmit: SubmitHandler<FormRegisterType> = async (data ) => {
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/student/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    id: currUser?.id,
                }),
            });
            // @TODO waiting for backend validation
            const dataFormRes = await res.json();
            if (dataFormRes.message !== '') {
                setResError(dataFormRes.message);
            }
            if (dataFormRes.message === '') {
                setSuccess(dataFormRes.message);
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <Container
                fluid
                className={` container-form-user mt-5 mb-3`}
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={'mt-3 mb-4 text-white'}>Dane Użytkownika: </h2>
                    <Row >
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalFirstName" md={12} lg >
                            <Form.Label className={`text-white`}>Imię:</Form.Label>
                            <Form.Control
                                type="text"
                                className={`input-password text-white`}
                                defaultValue={props.correctData ? currUser?.firstName : ''}
                                {...register('firstName', {
                                required: "To pole nie może być puste!",
                                maxLength: {
                                    value: 100,
                                    message: "Imię nie może być dłuższe niz 100 znaków."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Imię nie może być krótsze niż 3 znaki"
                                }
                            })}/>
                            {errors.firstName && (
                                <p className={`errorP mt-1`}>{errors.firstName.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalLastName" md={12} lg>
                            <Form.Label className={`text-white`}>Nazwisko:</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.correctData ? currUser?.lastName : ''}
                                className={`input-password text-white`}
                                {...register('lastName', {
                                required: "To pole nie może być puste!",
                                maxLength: {
                                    value: 100,
                                    message: "Nazwisko nie może być dłuższe niz 100 znaków."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Nazwisko nie może być krótsze niż 3 znaki"
                                }
                            })}/>
                            {errors.lastName && (
                                <p className={`errorP mt-1`}>{errors.lastName.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalGitHub" md={12} lg>
                            <Form.Label className={`text-white`}>Nazwa Użytkonika GitHub:</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.correctData ? currUser?.githubUsername : ''}
                                className={`input-password text-white`}
                                {...register('githubUsername', {
                                    required: "To pole nie może być puste!",
                                    maxLength: {
                                        value: 39,
                                        message: "Nazwa nie może być dłuższa niz 100 znaków."
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Nazwa nie może być krótsza niz 3 znaków."
                                    },
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
                                defaultValue={props.correctData ? currUser?.targetWorkCity : ''}
                                className={`input-password text-white`}
                                {...register('targetWorkCity', {
                                    maxLength: {
                                        value: 100,
                                        message: "Nazwa nie może być dłuższa niz 100 znaków."
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Nazwa nie może być krótsza niz 3 znaków."
                                    },
                                })}/>
                            {errors.targetWorkCity && (
                                <p className={`errorP mt-1`}>{errors.targetWorkCity.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalTypeWork" md={12} lg>
                            <Form.Label className={`text-white`}>Wybór preferowanego miejsca pracy:</Form.Label>
                            <Form.Select defaultValue={props.correctData ? currUser?.expectedTypeWork : 'Dowolne'} {...register('expectedTypeWork')}>
                                <option>Dowolne</option>
                                <option>Zdalnie</option>
                                <option>Biuro</option>
                                <option>Gotowość do przeprowadzki</option>
                                <option>Hybrydowo</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalContractType" md={12} lg>
                            <Form.Label className={`text-white`}>Oczekiwany typ kontraktu:</Form.Label>
                            <Form.Select defaultValue='Dowolny' {...register('expectedContractType')}>
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
                                defaultValue={props.correctData ? currUser?.expectedSalary : ''}
                                className={`input-password text-white`}
                                {...register('expectedSalary', {
                                    max: {
                                        value: 999999,
                                        message: "Liczba jest ograniczona do 999999"
                                    },
                                    min: {
                                        value: 0,
                                        message: "Liczba nie może być ujemna"
                                    },
                                })}/>
                            {errors.expectedSalary && (
                                <p className={`errorP mt-1`}>{errors.expectedSalary.message}</p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalExp" md={12} lg>
                            <Form.Label className={`text-white `}>Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu:</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={props.correctData ? currUser?.monthsOfCommercialExp : 0}
                                className={`input-password text-white`}
                                {...register('monthsOfCommercialExp', {
                                    required: "To pole nie może być puste!",
                                    min: {
                                        value: 0,
                                        message: "Liczba nie może być ujemna"
                                    },
                                    max: {
                                        value: 999,
                                        message: "Liczba jest ograniczona do 999"
                                    },
                                })}/>
                            {errors.monthsOfCommercialExp && (
                                <p className={`errorP mt-1`}>{errors.monthsOfCommercialExp.message}</p>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-4" as={Col} controlId="formHorizontalNumber" md={12} lg>
                            <Form.Label className={`text-white mt-4`}>Numer telefonu:</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={props.correctData ? currUser?.tel : ''}
                                className={`input-password text-white`}
                                {...register('tel', {
                                    maxLength: {
                                        value: 14,
                                        message: "Numer telefonu nie może przekraczać 14 cyfr."
                                    },
                                    minLength: {
                                        value: 9,
                                        message: "Numer telefonu musi mieć minimmalnie 9 cyfr"
                                    },
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
                                defaultValue={props.correctData ? currUser?.teamProjectUrls : ''}
                                className={`input-password text-white`}
                                {...register('teamProjectUrls', {
                                    required: "To pole nie może być puste!",
                                    maxLength: {
                                        value: 255,
                                        message: "To pole nie może przekraczać 255 znaków."
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "To pole nie może być mniejsze niż 2 znaki."
                                    },
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
                                defaultValue={props.correctData ? currUser?.portfolioUrls : ''}
                                className={`input-password text-white`}
                                {...register('portfolioUrls', {
                                    maxLength: {
                                        value: 255,
                                        message: "To pole nie może przekraczać 255 znaków."
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "To pole nie może być mniejsze niż 2 znaki."
                                    },
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
                            <Form.Control defaultValue={props.correctData ? currUser?.education : ''} as="textarea" rows={2} placeholder="Jakie były Twoje kroki by wejść do świata programowania..." {...register('education')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation2" defaultValue={props.correctData ? currUser?.workExperience : ''}>
                            <Form.Label>Przebieg doświadczenia zawodowego:</Form.Label>
                            <Form.Control defaultValue={props.correctData ? currUser?.workExperience : ''} as="textarea" rows={2} placeholder="Jeśli pracowałaś/ałeś w firmie związaną z programwoaniem, pochwal się..." {...register('workExperience')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation3" >
                            <Form.Label>Kursy i certyfikaty związane z programowaniem:</Form.Label>
                            <Form.Control defaultValue={props.correctData ? currUser?.courses : ''} as="textarea" rows={2} placeholder="Jakie certyfikaty oraz kursy ukończyłeś, wymień tylko te związane z programowaniem..." {...register('courses')}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 red-line pb-2">
                        <Form.Group className="mb-3" controlId="formTextAreaInformation4" >
                            <Form.Label>Biografia:</Form.Label>
                            <Form.Control defaultValue={props.correctData ? currUser?.bio : ''} as="textarea" rows={3} placeholder="Napisz coś o sobie..." {...register('bio')}/>
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
                            {props.correctData && <Button className={'float-end'} id={'button-change-password'} variant="secondary" onClick={() => navigate('/dashboard')}>Anuluj</Button>}
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
