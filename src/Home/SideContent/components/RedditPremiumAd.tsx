import React from 'react'
import './RedditPremiumAd.scss'
import { GiCheckedShield } from 'react-icons/gi'
import { AppButton2 } from '../../../Shared/components/AppButton2/AppButton2'
export default function RedditPremiumAd() {
  return (
    <div className='premium-ad'>
        <div className='premium-ad-body'>
            <GiCheckedShield className='premium-ad__icon'/>
            <div className='premium-ad-info'>
                <div className='premium-ad__title'>
                    Reddit Premium
                </div>
                <div className='premium-ad__description'>
                    The best Reddit experience, with monthly Coins
                </div>
            </div>
        </div>
        <AppButton2 title='Try Now' style={{
            fontWeight: 'bold',
            fontSize: '0.9em'
            }} backgroundColor='orangered'/>
    </div>
  )
}
