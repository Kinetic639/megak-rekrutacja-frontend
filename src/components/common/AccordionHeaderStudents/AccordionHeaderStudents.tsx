import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {apiUrl} from "../../../config/api";
import {LoadingSuccess} from "../LoadingSuccess/LoadingSuccess";

interface Props {
    firstName: string;
    lastName: string;
    idStudent: string;
}

interface DataDeactivationRes{
    message: string;
    status: boolean
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
                    disabled={dataFromRes.status}
                    className={`custom-button`}
                    as={'div'}
                    variant="danger"
                    onClick={(event) => {
                        event.stopPropagation();
                        reservedUserHandler(props.idStudent);
                        setShow(true);
                    }}
                >
                    Zarezerwuj rozmowę
                </Button>
            </div>
            {/* @TODO Create new modal */}
            {show && <LoadingSuccess message={dataFromRes.message} navigate={'/'} />}
        </Accordion.Header>
    );
}

export {
    AccordionHeaderStudents,
}
