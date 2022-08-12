import { BsPaperclip } from 'react-icons/bs';
import React from 'react';

interface Props {
  links: string;
}

export const CvLinksList = ({ links }: Props) => {
  const linksArr: string[] = links.split(',');
  return (
    <>
      {linksArr.map((link: string) => (
        <div className="cv__link cv__link--main">
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
