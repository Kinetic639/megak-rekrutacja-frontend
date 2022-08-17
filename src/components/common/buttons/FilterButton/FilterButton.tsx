import { Button } from 'react-bootstrap';
import { FiFilter } from 'react-icons/fi';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FiltersPanel } from '../../../FiltersPanel/FiltersPanel';

export const FilterButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <FiltersPanel />
        {/*<Modal.Header closeButton>*/}
        {/*  <Modal.Title>Modal heading</Modal.Title>*/}
        {/*</Modal.Header>*/}
        {/*<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>*/}
        {/*<Modal.Footer>*/}
        {/*  <Button variant="secondary" onClick={handleClose}>*/}
        {/*    Close*/}
        {/*  </Button>*/}
        {/*  <Button variant="primary" onClick={handleClose}>*/}
        {/*    Save Changes*/}
        {/*  </Button>*/}
        {/*</Modal.Footer>*/}
      </Modal>
      <Button onClick={handleShow} variant="dark" className="btn-filter">
        <FiFilter className="icon-filter" />
        Filtrowanie
      </Button>
    </>
  );
};
