import React from 'react';
import '../../button.css'
import{Router} from 'react-router-dom'

export const LogOut = () => {

            const logOut = async () => {
                await fetch('http://localhost:3001/auth/logout');

            };

        return <>
            <button
            className="button"
            onClick={() => logOut}
        >
            Wyloguj
        </button>


        </>;
    };
