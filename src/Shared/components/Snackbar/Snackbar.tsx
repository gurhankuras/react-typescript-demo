import React, { useContext, useEffect } from 'react'
import './Snackbar.scss'
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import { SnackbarContext, SnackbarContextProviderState } from './SnackbarContextProvider';


export type SnackbarOptions = {
    visible: boolean;
    message: string;
    actionName: string;
    action?: () => void;
    close?: () => void;
}

type SnackbarProps = {
   // options: SnackbarOptions
}

export const Snackbar: React.FC<SnackbarProps> = () => {
    const options = useContext<SnackbarContextProviderState>(SnackbarContext);
    const { show, close, visible, message, action, actionName } = options;

    const snackbarStyles: string = classNames({
        'snackbar': true,
        'snackbar--visible': visible
    });


    return (
        <div className={snackbarStyles}>
            <div className='snackbar__band'>
                <IoMdClose 
                    style={{color: 'white'}} 
                    className='snackbar__close-button'
                    onClick={() => {
                        close?.();
                        console.log('onClick')
                    }}/>
            </div>
            <div className='snackbar__content'>
                <div className='snackbar__text'>{message}</div>
                <button className='snackbar__action' onClick={action}>{actionName}</button>
            </div>
        </div>
    )
}
