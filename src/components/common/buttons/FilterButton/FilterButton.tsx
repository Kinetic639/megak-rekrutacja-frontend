import { Button } from 'react-bootstrap';
import { FiFilter } from 'react-icons/fi';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FiltersPanel } from '../../../FiltersPanel/FiltersPanel';

import './FilterButton.css';

export const FilterButton = () => {
  const [show, setShow] = useState(false);
  const handleHideModal = () => {
    setShow(!show);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal dialogClassName="filters-modal" show={show} onHide={handleClose}>
        <FiltersPanel hideModal={handleHideModal} />
      </Modal>
      <Button onClick={handleShow} variant="dark" className="btn-filter">
        <FiFilter className="icon-filter" />
        Filtrowanie
      </Button>
    </>
  );
};
