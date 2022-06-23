import classes from './OTPField.module.css';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(classes);

type OTPFieldProps = {
    value: string;
    onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const OTPField = React.forwardRef<HTMLInputElement, OTPFieldProps>((props, ref) => {
    const {value, onKeyUp, onPaste} = props

    return (
        <input  type="text" 
                value={value}
                inputMode="decimal"
                onChange={()=>{}}
                onPaste={onPaste}
                maxLength={1} 
                ref={ref}
                onKeyUp={onKeyUp}
                className={cx({
                    otpField: true,
                    active: value.length === 1
                })} 
        />
    )
})