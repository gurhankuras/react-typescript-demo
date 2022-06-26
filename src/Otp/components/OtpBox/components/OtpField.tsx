import './OTPField.scss';
import classNames from 'classnames';
import React from 'react';


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
                className={classNames({
                    'otp-field': true,
                    'active': value.length === 1
                })} 
        />
    )
})