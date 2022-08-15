import React, { useState } from 'react';

import './ShowCvButton.css';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { StudentCV } from '../../../../views/Student/StudenctCV/StudenctCV';
import { apiUrl } from '../../../../config/api';
import { User } from '../../../../../../megak-rekrutacja-backend/src/user/user.entity';

interface Props {
  userId: string;
}

export const ShowCvButton = ({ userId }: Props) => {
  const currUser = useAppSelector((state) => state.user.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleClose = () => setShow(false);
  const handleShowCv = async () => {
    console.log(userId);
    if (currUser?.userType === 'hr' || currUser?.userType === 'admin') {
      const res = await fetch(`${apiUrl}/user/find-by/id/${userId}`, {
        credentials: 'include',
      });
      const data = await res.json();
      await setUser(data);
    }
    setShow(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <StudentCV user={user} />
      </Modal>
      <Button
        as={'div'}
        variant="danger"
        className={`custom-button btn btn-danger`}
        onClick={async (e) => {
          e.stopPropagation();
          await handleShowCv();
        }}
      >
        {loading ? <Spinner variant="light" animation="border" /> : 'Pokaż CV'}
      </Button>
    </>
  );
};
