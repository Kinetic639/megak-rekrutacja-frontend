import React, {useEffect, useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {LoadingSuccess} from "../LoadingSuccess/LoadingSuccess";

interface ResGitHub {
    name?: string;
    avatar_url?: string;
}

interface Props {
    firstName: string;
    lastName: string;
}

const AccordingHeaderConversation = (props: Props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const res = await fetch(
                    `https://api.github.com/users/FrostKiller666`,
                );
                const resDataGitHub = await res.json();
                setResDataGitHub(resDataGitHub);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <Accordion.Header className="accordion-header">
            <div>
                {props.firstName} {props.lastName}
            </div>
            <div className="spacer"></div>
            <div>
                <Button
                    className={`custom-button`}
                    as={'div'}
                    variant="danger"
                    onClick={(event) => {
                        event.stopPropagation();
                        navigate('/user-cv')
                    }}
                >
                    Pokaż CV
                </Button>
                <Button
                    className={`custom-button`}
                    as={'div'}
                    variant="danger"
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Brak zainteresowania
                </Button>
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
        </Accordion.Header>
    );
}

export {
    AccordingHeaderConversation
}
