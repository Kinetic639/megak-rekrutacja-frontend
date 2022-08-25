import { BsPaperclip } from 'react-icons/bs';
import React from 'react';

interface Props {
  links: string | null;
}

export const CvLinksList = ({ links }: Props) => {
  if (!links) {
    return (
      <div className="cv__link cv__link--main  cv__link--main-error">
        Brak danych
      </div>
    );
  }
  const linksArr: string[] = links.split(',');
  return (
    <>
      {linksArr.map((link: string, index) => ( // Chyba to `: string` jest zbędne - TS się domyśli.
        <div key={index} className="cv__link cv__link--main">
          <a
            href={link}
            target="_blank"
            className="cv-link__url cv-link__url--main"
          >
            <BsPaperclip className="cv-sidebar__icon fs-5" />
            {link}
          </a>
        </div>
      ))}
    </>
  );
};
