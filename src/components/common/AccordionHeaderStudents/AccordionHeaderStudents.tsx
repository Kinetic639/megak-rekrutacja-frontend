import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {apiUrl} from "../../../config/api";
import {LoadingSuccess} from "../Modals/LoadingSuccess/LoadingSuccess";
import {InformationModal} from "../Modals/InformationModal/InformationModal";

interface Props {
    firstName: string;
    lastName: string;
    idStudent: string;
    status: string;
}

interface DataDeactivationRes{
    message: string;
    status: boolean;
}

const AccordionHeaderStudents = (props: Props) => {
    const [show, setShow] = useState(false);
    const [dataFromRes, setDataFromRes] = useState<DataDeactivationRes>({message: '', status: false});
    const reservedUserHandler = async (studentId: string) => {
        const res = await fetch(`${apiUrl}/hr/reserve/${studentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // setChangeStudentStatus(true);
        const dataDeactivationRes = await res.json();

        setDataFromRes(dataDeactivationRes);
    };

    return (
        <Accordion.Header className="accordion-header">
            <div>
                {props.firstName} {props.lastName}
            </div>
            <div className="spacer"></div>
            <div>
                <Button
                    className={`${props.status === 'available' ? 'custom-button' : 'custom-button-disabled'}`}
                    as={'div'}
                    variant="danger"
                    onClick={(event) => {
                        event.stopPropagation();
                        reservedUserHandler(props.idStudent);
                        setShow(true);
                    }}
                    onDragOver={() => setShow(false)}
                >
                    Zarezerwuj rozmowę
                </Button>
            </div>
            {/* @TODO Create new modal */}
            {show && <InformationModal message={dataFromRes.message} />}
        </Accordion.Header>
    );
}

export {
    AccordionHeaderStudents,
}
