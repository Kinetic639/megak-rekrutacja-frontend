import React, {useEffect} from "react";
import {Header} from "../../components/Header/Header";
import {StudentForm} from "../Student/StudentForm/StudentForm";
import {useAppSelector} from "../../redux/hooks/hooks";
import {useNavigate} from "react-router-dom";

const ChangePersonDataSite = () => {
    const navigate = useNavigate();
    const currUser = useAppSelector((state) => state.user.user);
    if (!currUser?.id) {
        useEffect(() => {
            navigate('/login', {replace: true});
        }, [])
    }
    return (
        <>
            <Header />
            <StudentForm correctData={true}/>
        </>
    )
}

export {
    ChangePersonDataSite
}
