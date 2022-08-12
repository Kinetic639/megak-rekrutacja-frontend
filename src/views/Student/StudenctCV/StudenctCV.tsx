import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import './StudenctCV.css';
import { useAppSelector } from '../../../redux/hooks/hooks';
import React, { useEffect, useState } from 'react';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';

interface ResGitHub {
  name?: string;
  avatar_url?: string;
}

export const StudentCV = () => {
  const currUser = useAppSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);
  const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${currUser?.githubUsername}`,
        );
        const resDataGitHub = await res.json();
        setResDataGitHub(resDataGitHub);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !currUser) {
    return <CustomSpinner />;
  }
  return (
    <div className="cv-container d-flex">
      <div className="cv-sidebar__wrapper">
        <div className="cv-sidebar__container">
          <img
            src={
              resDataGitHub?.avatar_url === undefined
                ? 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
                : resDataGitHub.avatar_url
            }
            className="d-inline-block align-top cv-sidebar__avatar"
            alt={
              resDataGitHub?.name === undefined
                ? 'avatar-domyślny'
                : 'avatar' + resDataGitHub.avatar_url
            }
            key={'user-avatar-key'}
          />
          <div className="cv-sidebar__credentials">
            <div className="cv-sidebar__names">{`${currUser.firstName} ${currUser.lastName}`}</div>
            <div className="cv-sidebar__github">
              <a
                href={`https://github.com/${currUser.githubUsername}`}
                target="_blank"
                className="cv-sidebar__url"
              >
                <FaGithub className="cv-sidebar__icon" />
                {currUser.githubUsername}
              </a>
            </div>
          </div>
          <div className="cv-sidebar__contact">
            <p className="cv-sidebar__p cv-sidebar__phone-number">
              <FaPhoneAlt className="cv-sidebar__icon cv-sidebar__icon--grey" />{' '}
              {currUser.tel}
            </p>
            <p className="cv-sidebar__p cv-sidebar__email">
              <GrMail className="cv-sidebar__icon cv-sidebar__icon--grey" />{' '}
              {currUser.email}
            </p>
          </div>
          <div className="cv-sidebar__bio">
            <p className="cv-sidebar__p cv-sidebar__bio--title">O mnie</p>
            <p className="cv-sidebar__p cv-sidebar__bio--content">
              {currUser.bio}
            </p>
          </div>
        </div>
      </div>
      <main className="cv-main__wrapper">Main </main>
    </div>
  );
};
