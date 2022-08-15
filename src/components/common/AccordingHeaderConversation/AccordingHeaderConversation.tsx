import React, {useEffect, useState} from 'react';
import {Accordion, Button, OverlayTrigger, Popover, Spinner} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {LoadingSuccess} from '../Modals/LoadingSuccess/LoadingSuccess';
import {ShowCvButton} from '../buttons/ShowCvButton/ShowCvButton';
import {apiUrl} from "../../../config/api";
import {InformationModal} from "../Modals/InformationModal/InformationModal";

interface ResGitHub {
    name?: string;
    avatar_url?: string;
}

interface Props {
    firstName: string;
    lastName: string;
    idStudent: string;
    githubUsername: string;
    hrID: string;
    setChangeStudentStatus: React.Dispatch<React.SetStateAction<boolean>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface DataDeactivationRes {
    message: string;
    status: boolean;

}

const AccordingHeaderConversation = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();
    const [dataFromRes, setDataFromRes] = useState<DataDeactivationRes>({message: '', status: false});

    const cancelReservedUserHandler = async (studentId: string) => {
        const res = await fetch(`${apiUrl}/hr/cancel/${studentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hrID: props.hrID
            }),
        });
        const dataDeactivationRes = await res.json();
        setDataFromRes(dataDeactivationRes);
    };

    if (props.githubUsername !== undefined) {
        useEffect(() => {
            setLoading(true);
            (async () => {
                try {
                    const res = await fetch(
                        `https://api.github.com/users/${props.githubUsername}`,
                    );
                    const resDataGitHub = await res.json();
                    setResDataGitHub(resDataGitHub);
                } finally {
                    setLoading(false);
                }
            })();
        }, []);
    }

    const avatar = (
        <img
            src={
                resDataGitHub?.avatar_url === undefined
                    ? 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
                    : resDataGitHub.avatar_url
            }
            width="40"
            height="40"
            className="d-inline-block align-top navbar-color avatar"
            alt={
                resDataGitHub?.name === undefined
                    ? 'avatar-domyślny'
                    : 'avatar' + resDataGitHub.avatar_url
            }
            key={`${props.idStudent}`}
        />
    );

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Czy na pewno chcesz odrzucić kursanta z listy "Do
                rozmowy"</Popover.Header>
            <Popover.Body>
                <div className={'d-flex justify-content-between'}>
                    <Button
                        className={`custom-button ms-0 popover-custom-button `}
                        variant="secondary"
                        onClick={(event) => {
                            event.stopPropagation();
                            setShowPopover(false)
                        }}>
                        Nie
                    </Button>
                    <Button
                        className={`custom-button ms-0 popover-custom-button `}
                        variant="danger"
                        onClick={async (event) => {
                            event.stopPropagation();
                            setShowPopover(false)
                            await cancelReservedUserHandler(props.idStudent);
                            setShow(true);
                        }}>
                        Tak
                    </Button>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <Accordion.Header className="accordion-header">
            <div className={'me-5'}>
                <div>Rezerwacja do</div>
                <div>11.07.2022 r.</div>
            </div>
            {loading ? (
                <Spinner animation="border" variant="danger" className={'me-2 ms-5'}/>
            ) : (
                <div className={'me-2 ms-5'}>{avatar}</div>
            )}
            <div>
                {props.firstName} {props.lastName}
            </div>
            <div className="spacer"></div>
            <div>
                <ShowCvButton userId={props.idStudent}/>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose show={showPopover}
                                onToggle={() => setShowPopover(!showPopover)}>
                    <Button
                        className={`custom-button`}
                        as={'div'}
                        variant="danger"
                        onClick={async (event) => {
                            event.stopPropagation();
                        }}
                    >
                        Brak zainteresowania
                    </Button>
                </OverlayTrigger>
                <Button
                    className={`custom-button`}
                    as={'div'}
                    variant="danger"
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Zatrudniony
                </Button>

            </div>
            {show && <InformationModal message={dataFromRes.message} show={show} setShow={setShow}
                                       setChangeStudentStatus={props.setChangeStudentStatus}
                                       setSearch={props.setSearch}/>}
        </Accordion.Header>
    );
};

export {AccordingHeaderConversation};
