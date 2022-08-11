import React from 'react';
import { Header } from '../components/Header/Header';
import { AvailableStudents } from '../components/AvailableStudents/AvailableStudents';

const ConversationStudentsSite = () => {
  return (
    <>
      <Header />
      <AvailableStudents conversationSite={true} />
    </>
  );
};

export { ConversationStudentsSite };
