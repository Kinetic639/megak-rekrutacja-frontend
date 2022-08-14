import React, {useState} from "react";

import './InformationModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface Props {
    message: string;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    show: boolean;
    setChangeStudentStatus: React.Dispatch<React.SetStateAction<boolean>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InformationModal = (props: Props) => {
    return (
        <>
            <Modal
                show={props.show}
                onHide={() => {
                    props.setShow(false);
                }}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title className={`text-white`}>{props.message}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={`text-white`}>
                    Proszę wcisnąć przycisk "Dalej" aby kontynuować.
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        id={`button-next`}
                        variant="danger"
                        onClick={(event) => {
                            event.stopPropagation();
                            props.setShow(false)
                            props.setChangeStudentStatus(true);
                            props.setSearch('');
                        }}
                    >
                        Dalej
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
}

export {
    InformationModal,
}
