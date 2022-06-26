import React from 'react'
import { TbChevronUp, TbChevronDown } from 'react-icons/tb'
import { AppButton2 } from '../../../Shared/components/AppButton2/AppButton2';
import './TopChart.scss';

enum Trend {
    up = 'up',
    down = 'down',
    stable = 'stable'
}

interface TopChartCommunity {
    name: string;
    place: number;
    trend: Trend;
    image: string;
}

export default function TopChart() {
  return (
    <div className='top-chart'>
       <div className='top-chart__image'>
            <span className='top-chart__image-text'>Top News Communities</span>
        </div>
        <ul className='top-chart__list'>
            
            {[1, 2, 3, 4, 5].map(place => {
                return (
                <li key={place} className='top-chart__item'>
                    <span className='item-place'>{place}.</span>
                    <TbChevronUp className='item-trend'/>
                    <div className='item__avatar'/>
                    <span className='item__name'>r/deadbydeadlightdeadbydeadlight</span>
                    <div style={{flex: '1'}} />
                    <AppButton2 variant='filled' style={{fontWeight: 'bold', backgroundColor:'#d7dadc', fontSize:'0.7em'}} title='Join'/>
                </li>
                );
            })}
            
        </ul>
        <div style={{textAlign: 'center', padding: '0.8em 0'}}>
            <AppButton2 variant='filled' style={{width: '90%', fontWeight: 'bold', fontSize: '0.8em'}} title='View All'/>
        </div>
        
    </div>
  )
}

/*
 <div className='top-chart__image'>
            <span className='top-chart__image-text'>Top News Communities</span>
        </div>
        <ul className='top-chart__list'>
            
            {[1, 2, 3, 4, 5].map(place => {
                return (
                <li key={place} className='top-chart__item'>
                    <span className='item-place'>{place}.</span>
                    <TbChevronUp className='item-trend'/>
                    <div className='item__avatar'/>
                    <span className='item__name'>r/deadbydeadlight</span>
                </li>
                );
            })}
            
        </ul>
        <button>View All</button>
*/
