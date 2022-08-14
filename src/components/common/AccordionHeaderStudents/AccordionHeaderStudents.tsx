import React, {useState} from "react";
import {Accordion, Button} from "react-bootstrap";
import {apiUrl} from "../../../config/api";
import {InformationModal} from "../Modals/InformationModal/InformationModal";

interface Props {
    firstName: string;
    lastName: string;
    idStudent: string;
    status: string;
    hrID: string;
    setChangeStudentStatus: React.Dispatch<React.SetStateAction<boolean>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
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
            body: JSON.stringify({
                hrID: props.hrID
            }),
        });
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
                    onClick={async (event) => {
                        event.stopPropagation();
                        await reservedUserHandler(props.idStudent);
                        setShow(true);
                    }}

                >
                    {`${props.status === 'available' ? 'Zarezerwuj rozmowę' : 'Osoba zarezerwowana'}`}
                </Button>
            </div>
            {show && <InformationModal message={dataFromRes.message} show={show} setShow={setShow} setChangeStudentStatus={props.setChangeStudentStatus} setSearch={props.setSearch}/>}
        </Accordion.Header>
    );
}

export {
    AccordionHeaderStudents,
}
