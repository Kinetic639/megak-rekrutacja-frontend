import React, {useState} from "react";

import './InformationModal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface Props {
    message: string;
}

const InformationModal = (props: Props) => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
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
                            setShow(false)
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
