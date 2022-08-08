import React from 'react';
import { FormPassword } from '../components/FormPassword/FormPassword';
import { useSearchParams } from 'react-router-dom';

const FormPasswordSite = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <>
      <FormPassword token={token} />
    </>
  );
};

export { FormPasswordSite };
