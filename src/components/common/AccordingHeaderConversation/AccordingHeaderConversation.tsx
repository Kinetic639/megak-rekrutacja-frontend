import React, { useEffect, useState } from 'react';
import { Accordion, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoadingSuccess } from '../Modals/LoadingSuccess/LoadingSuccess';
import { ShowCvButton } from '../buttons/ShowCvButton/ShowCvButton';

interface ResGitHub {
  name?: string;
  avatar_url?: string;
}

interface Props {
  firstName: string;
  lastName: string;
  idStudent: string;
  githubUsername: string;
}

const AccordingHeaderConversation = (props: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();

  if (props.githubUsername !== undefined) {
    useEffect(() => {
      setLoading(true);
      (async () => {
        try {
          const res = await fetch(
            `https://api.github.com/users/${props.githubUsername}`,
          );
          const resDataGitHub = await res.json();
          setResDataGitHub(resDataGitHub);
        } finally {
          setLoading(false);
        }
      })();
    }, []);
  }

  const avatar = (
    <img
      src={
        resDataGitHub?.avatar_url === undefined
          ? 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
          : resDataGitHub.avatar_url
      }
      width="40"
      height="40"
      className="d-inline-block align-top navbar-color avatar"
      alt={
        resDataGitHub?.name === undefined
          ? 'avatar-domyślny'
          : 'avatar' + resDataGitHub.avatar_url
      }
      key={`${props.idStudent}`}
    />
  );

  return (
    <Accordion.Header className="accordion-header">
      <div className={'me-5'}>
        <div>Rezerwacja do</div>
        <div>11.07.2022 r.</div>
      </div>
      {loading ? (
        <Spinner animation="border" variant="danger" className={'me-2 ms-5'} />
      ) : (
        <div className={'me-2 ms-5'}>{avatar}</div>
      )}
      <div>
        {props.firstName} {props.lastName}
      </div>
      <div className="spacer"></div>
      <div>
        <ShowCvButton userId={props.idStudent} />
        <Button
          className={`custom-button`}
          as={'div'}
          variant="danger"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          Brak zainteresowania
        </Button>
        <Button
          className={`custom-button`}
          as={'div'}
          variant="danger"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          Zatrudniony
        </Button>
      </div>
    </Accordion.Header>
  );
};

export { AccordingHeaderConversation };
