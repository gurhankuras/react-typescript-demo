import React from 'react'
import './Home.scss';
import SideContent from './SideContent/SideContent';
import Wall from './Wall/Wall';

export default function Home() {
  return (
    <div className='home'>
        <Wall />
        <SideContent />
    </div>
  )
}
