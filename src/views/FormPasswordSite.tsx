import React, {useEffect} from 'react';
import {FormPassword} from '../components/FormPassword/FormPassword';
import {useNavigate, useSearchParams} from 'react-router-dom';

interface Props {
    activateOrReset?: string;
}

const FormPasswordSite = (props: Props) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const token = searchParams.get('token');
    if (token === null) {
        useEffect(() => {
            navigate('/login', {replace: true});
        }, [])
    }
    return (
        <> // Po co? Można od razu zwrócić FormPassword
            <FormPassword token={token} activateOrReset={props.activateOrReset}/>
        </>
    );
};

export {FormPasswordSite};
