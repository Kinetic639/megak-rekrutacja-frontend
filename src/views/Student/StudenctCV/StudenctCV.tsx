import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaPhoneAlt, FaEdit } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import './StudenctCV.css';
import React, { useEffect, useState } from 'react';
import { CustomSpinner } from '../../../components/common/CustomSpinner/CustomSpinner';
import { CvSection } from '../../../components/common/CvSection/CvSection';
import { GradeTable } from '../../../components/common/GradeTable/GradeTable';
import { CvSectionParagraph } from '../../../components/common/CvSectionParagraph/CvSectionParagraph';
import { CvLinksList } from '../../../components/common/CvLinksList/CvLinksList';
import { User } from '../../../../../megak-rekrutacja-backend/src/user/user.entity';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';

interface ResGitHub {
  name?: string;
  avatar_url?: string;
}

interface Props {
  user?: User | null;
}

export const StudentCV = ({
  user = useAppSelector((state) => state.user.user),
}: Props) => {
  const [loading, setLoading] = useState(true);
  const [resDataGitHub, setResDataGitHub] = useState<ResGitHub>();
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${user?.githubUsername}`,
        );
        const resDataGitHub = await res.json();
        setResDataGitHub(resDataGitHub);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !user) {
    return <CustomSpinner />;
  }
  const cvGrades = [
    { name: 'Ocena przejścia kursu', grade: Number(user.courseCompletion) },
    {
      name: 'Ocena aktywności i zaangażowania na kursie',
      grade: Number(user.courseEngagement),
    },
    {
      name: 'Ocena kodu w projekcie własnym',
      grade: Number(user.projectDegree),
    },
    {
      name: 'Ocena pracy w zespole w Scrum',
      grade: Number(user.teamProjectDegree),
    },
  ];
  const userExpectations = [
    { name: 'Preferowane miejsce pracy', grade: user.expectedTypeWork },
    {
      name: 'Docelowe miasto, gdzie chce pracować kandydat',
      grade: user.targetWorkCity,
    },
    { name: 'Oczekiwany typ kontraktu', grade: user.expectedContractType },
    {
      name: 'Oczekiwane wynagrodzenie miesięczne netto',
      grade: `${user.expectedSalary} zł`,
    },
    {
      name: 'Zgoda na odbycie bezpłatnych praktyk/stażu na początek',
      grade: user.canTakeApprenticeship ? 'Tak' : 'Nie',
    },
    {
      name: 'Komercyjne doświadczenie w programowaniu',
      grade: user.monthsOfCommercialExp
        ? `${user.monthsOfCommercialExp} miesięcy`
        : 'Brak',
    },
  ];
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
            <div className="cv-sidebar__names">{`${user.firstName} ${user.lastName}`}</div>
            <div className="cv__link">
              <a
                href={`https://github.com/${user.githubUsername}`}
                target="_blank"
                className="cv-link__url"
              >
                <FaGithub className="cv-sidebar__icon" />
                {user.githubUsername}
              </a>
            </div>
          </div>
          <div className="cv-sidebar__contact">
            <p className="cv-sidebar__p cv-sidebar__phone-number">
              <FaPhoneAlt className="cv-sidebar__icon cv-sidebar__icon--grey" />
              {user.tel}
            </p>
            <p className="cv-sidebar__p cv-sidebar__email">
              <GrMail className="cv-sidebar__icon cv-sidebar__icon--grey" />
              {user.email}
            </p>
          </div>
          <div className="cv-sidebar__bio">
            <p className="cv-sidebar__p cv-sidebar__bio--title">O mnie</p>
            <p className="cv-sidebar__p cv-sidebar__bio--content">{user.bio}</p>
          </div>
        </div>
      </div>
      <main className="cv-main__wrapper">
        <CvSection title="Oceny">
          <GradeTable showStars grades={cvGrades} />
        </CvSection>
        <CvSection title="Oczekiwanie w stosunku do zatrudnienia">
          <GradeTable grades={userExpectations} />
        </CvSection>
        <CvSection title="Edukacja">
          <CvSectionParagraph>{user.education}</CvSectionParagraph>
        </CvSection>
        <CvSection title="Kursy">
          <CvSectionParagraph>{user.courses}</CvSectionParagraph>
        </CvSection>
        <CvSection title="Doświadczenie zawodowe">
          <CvSectionParagraph>{user.workExperience}</CvSectionParagraph>
        </CvSection>
        <CvSection title="Portfolio">
          <CvLinksList links={user.portfolioUrls} />
        </CvSection>
        <CvSection title="Projekt w zespole Scrumowym">
          <CvLinksList links={user.teamProjectUrls} />
        </CvSection>
        <CvSection title="Projekt na zaliczenie">
          <CvLinksList links={user.bonusProjectUrls} />
        </CvSection>
      </main>
    </div>
  );
};
