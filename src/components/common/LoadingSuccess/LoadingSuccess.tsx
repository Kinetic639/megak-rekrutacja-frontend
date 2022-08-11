import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import './LoadingSuccess.css';

interface Props {
  message: string;
  navigate: string;
}

const LoadingSuccess = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={true}
        backdrop="static"
        keyboard={false}
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
            onClick={() => navigate(`${props.navigate}`, { replace: true })}
          >
            Dalej
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { LoadingSuccess };
