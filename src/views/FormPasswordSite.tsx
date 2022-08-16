import React from 'react';
import { FormPassword } from '../components/FormPassword/FormPassword';
import { useSearchParams } from 'react-router-dom';

interface Props {
  activateOrReset?: string;
}

const FormPasswordSite = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <>
      <FormPassword token={token} activateOrReset={props.activateOrReset}/>
    </>
  );
};

export { FormPasswordSite };
