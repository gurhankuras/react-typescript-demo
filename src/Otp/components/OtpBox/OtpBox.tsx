
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import './OtpBox.scss';
import { OTPField } from './components/OtpField';
import { isDigit } from '../../../Shared/utils/isDigit';

function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>,
                     current: string,
                     set: React.Dispatch<SetStateAction<string>>,
                     prevRef: React.MutableRefObject<HTMLInputElement | null> | null,
                     nextRef: React.MutableRefObject<HTMLInputElement | null> | null): any {
    if (isDigit(e.keyCode)) {
        if (current.length === 0) {
            set(e.key)
        }
        nextRef?.current?.focus()
        return;
    }
    else if (e.key === 'Backspace') {
        set('')
        prevRef?.current?.focus()
        return;
    }
}

const concatenate = (fields: Array<string>) => {
    return fields.reduce((prev: string, current: string) => {
        return prev + current
    }, '');
}


type OtpBoxProps = {
    onChange: (otpCode: string) => void
}



export const OtpBox: React.FC<OtpBoxProps> = ({ onChange }) =>  {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');
    const [field4, setField4] = useState('');

    const field1Ref = useRef<HTMLInputElement | null>(null);
    const field2Ref = useRef<HTMLInputElement | null>(null);
    const field3Ref = useRef<HTMLInputElement | null>(null);
    const field4Ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        onChange(concatenate([field1, field2, field3, field4]))
    }, [field1, field2, field3, field4, onChange])

    
    const onPasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.stopPropagation()
        e.preventDefault();

        const clipboardData = e.clipboardData;
        const pastedData = clipboardData.getData('Text');
        const trimmedPastedData = pastedData.trim();

        const containsOnlyNumbers = /^\d+$/.test(trimmedPastedData);
        if (containsOnlyNumbers) {
            setField1(trimmedPastedData[0] ?? '')
            setField2(trimmedPastedData[1] ?? '')
            setField3(trimmedPastedData[2] ?? '')
            setField4(trimmedPastedData[3] ?? '')
            field4Ref.current?.focus()
        }
        
        console.log(pastedData);
    }
    
    const onChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>,
        current: string,
        set: React.Dispatch<SetStateAction<string>>,
        prevRef: React.MutableRefObject<HTMLInputElement | null> | null,
        nextRef: React.MutableRefObject<HTMLInputElement | null> | null): any => {
        handleKeyUp(e, current, set, prevRef, nextRef)
    } 

    return (
        <div className='otp-box'>
       

        <OTPField 
            value={field1}
            onKeyUp={(e) => onChangeHandler(e, field1, setField1, null, field2Ref)}
            onPaste={onPasteHandler}
            ref={field1Ref}
        />

        <OTPField 
            value={field2}
            onKeyUp={(e) => onChangeHandler(e, field2, setField2, field1Ref, field3Ref)}
            onPaste={onPasteHandler}
            ref={field2Ref}
        />

        <OTPField 
            value={field3}
            onKeyUp={(e) => onChangeHandler(e, field3, setField3, field2Ref, field4Ref)}
            onPaste={onPasteHandler}
            ref={field3Ref}
        />

        <OTPField 
            value={field4}
            onKeyUp={(e) => onChangeHandler(e, field4, setField4, field3Ref, null)}
            onPaste={onPasteHandler}
            ref={field4Ref}
        />
        </div>
    )
}