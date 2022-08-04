import React from 'react';
import '../../button.css'
import {useNavigate} from 'react-router-dom'

export const LogOut = () => {
    const nav = useNavigate();

    const logOut = async () => {
        const res = await fetch('http://localhost:3001/auth/logout',{
            method: 'GET',
        });
        const resJson = await res.json()
        if(resJson.message === 'Logout successful'){
        nav("/auth/login");
        }
        console.log("log out");
    };

    return <>
        <button
            className="button"
            onClick={logOut}
        >
            Wyloguj
        </button>


    </>;
};
