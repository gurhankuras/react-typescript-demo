import { useState } from "react";
import { AppButton } from "./components/AppButton/AppButton";
import { OtpBox } from "./components/OtpBox/OtpBox";
import { useNavigate } from 'react-router-dom'

import classes from './Otp.module.css';

export function Otp() {
    const CODE_LENGTH = 4
    const [buttonIsActive, setButtonActive] = useState(false);
    const navigate = useNavigate()
    

    const navigateToMain = () => {
        if (!buttonIsActive) {
            return;
        }
        // TODO: connect with backend
        navigate('/');
    }

    const onOTPChangeHandler = (otp: string) => {
        setButtonActive(otp.length === CODE_LENGTH)
        console.log(otp)
    }

    return (
    <div className={classes.otpContainer}>
        <p className={classes.otpTitle}>
            Enter the code we've sent to your email
        </p>
        <OtpBox onChange={onOTPChangeHandler}/>
        <AppButton 
            title="Submit"
            onClick={navigateToMain} 
            active={buttonIsActive}/>
    </div>)


}