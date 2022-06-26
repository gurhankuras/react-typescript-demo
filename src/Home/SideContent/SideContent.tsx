/*
https://styles.redditmedia.com/t5_2r9ei/styles/bannerBackgroundImage_ztds9b6k0pg01.png
*/

import React from 'react'
import './SideContent.scss'
import TopChart from './components/TopChart'
import RedditPremiumAd from './components/RedditPremiumAd'
import HomeActionCard from './components/HomeActionCard'
import Footer from './components/Footer'

export default function SideContent() {
  return (
    <aside className='side-content'>
       <TopChart />
       <RedditPremiumAd />
       <HomeActionCard />
       <Footer />
    </aside>
    
  )
}
