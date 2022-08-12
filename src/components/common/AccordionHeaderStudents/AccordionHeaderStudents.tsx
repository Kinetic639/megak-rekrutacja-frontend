import React from "react";
import {Accordion, Button} from "react-bootstrap";
import {apiUrl} from "../../../config/api";

interface Props {
    firstName: string;
    lastName: string;
    idStudent: string;
}

const AccordionHeaderStudents = (props: Props) => {

    const reservedUserHandler = async (studentId: string) => {
        await fetch(`${apiUrl}/hr/reserve/${studentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // setChangeStudentStatus(true);
        // const dataDeactivationRes = await res.json();
        // console.log(dataDeactivationRes);
    };

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
                        reservedUserHandler(props.idStudent);
                    }}
                >
                    Zarezerwuj rozmowę
                </Button>
            </div>
        </Accordion.Header>
    );
}

export {
    AccordionHeaderStudents,
}
