import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  const right = [
    'About',
    'Careers',
    'Press',
    'Advertise',
    'Blog',
    'Terms',
    'Content Policy',
    'Mod Policy'
  ]

  const left = [
    'Help',
    'Reddit Coins',
    'Reddit Premium',
    'Communities',
    'Rereddit',
    'Topics',
  ]

  const languages = [
    'English', 'Deutsch', 'Français', 'Espanol', 'Italiano', 'Portugues' 
  ]

  const toLink = (names: string[]) => {
    return names.map(name => {
        return <Link key={name} className='link' to={''}>{name}</Link>
    })
  }


  return (
    <div className='footer'>
        <div className='general-links'>
            <div className='col'>{toLink(left)}</div>
            {false && <div style={{flex: 1}}/>}
            <div className='col'>{toLink(right)}</div>
        </div>
        <div className="divider"></div>
        <div className='languages'>
            {toLink(languages)}
        </div>
        <div className="divider"></div>
        <p className='copyright'>RedditClone © 2022. All rights reserved</p>
    </div>
  )
}
