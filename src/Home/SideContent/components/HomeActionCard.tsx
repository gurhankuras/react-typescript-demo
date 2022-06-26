import React from 'react'
import { AppButton2 } from '../../../Shared/components/AppButton2/AppButton2'
import './HomeActionCard.scss'

// https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png
// https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png
export default function HomeActionCard() {
  return (
    <div className='card'>
      <div className='image'></div>
      <div className="title">
        <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" alt="" />
        <span>Home</span>
      </div>
      <div className="description">
        Your personal Reddit frontpage. Come here to check in with your favorite communities.
      </div>
      <div className='buttons'>
        <AppButton2 title='Create Post' style={{fontWeight: 'bold', fontSize: '0.9rem'}}/>
        <AppButton2 variant='outlined' 
                    title='Create Community'
                    borderColor='hsl(0, 0%, 80%)'
                    style={{color: 'hsl(0, 0%, 80%)', fontWeight: 'bold', fontSize: '0.9rem'}} />
      </div>
    </div>
  )
}
