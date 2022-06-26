import React, { useEffect, useRef } from 'react'
import './Avatar.scss'

type AvatarProps = {
    image: string;
    width?: number;
    height?: number;
}

type AvatarDetailedProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & AvatarProps

export const Avatar: React.FC<AvatarDetailedProps> = ({ image, style, width, height }) => {
    const width2 = width || 2.5
    const height2 = height || 2.5;

    return (
    <>
    {true &&
    <div style={{...style, width: `${width2}em`, height: `${height2}em`}} className='profile__avatar-container'>
        <img src={image} alt="" className='profile__avatar' />
        <div style={{width: `${width2 / 5}em`, height: `${height2 / 5}em`}} className='online-status'/>
        <div className='circle-background' />
    </div>
     }
     {false &&
    <div style={style} className='profile__avatar-container'>
        <img src={image} alt="" className='profile__avatar' />
        <div className='online-status'/>
        <div className='circle-background' />
    </div>
     }
    </>

   
  )
}
