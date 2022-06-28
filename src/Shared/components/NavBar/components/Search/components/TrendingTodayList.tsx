import React from 'react'
import './TrendingTodayList.scss';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

type Props = {
    results: number[];
    loading: boolean;
}

export const TrendingToday: React.FC<Props> = ({ results, loading }) => {
  
    const renderTile = (e: number): React.ReactNode => {
        return (
            <li key={e} className='trending__item'>
                <div className='title-wrapper'>
                    <BsArrowUpRightCircleFill className='icon-popular'/>
                    <span className='title'>Stanley Cup</span>
                </div>
                <div className='summary-wrapper'>
                    <p className="summary">
                        What winning the Stanley Cup looks like
                    </p>
                    <img className='event-img' src="https://static.ukrinform.com/photos/2022_06/thumb_files/630_360_1656320280-525.jpg" alt="" />
                </div>
                <div className='more-subreddit'>
                    <img className='subreddit-img' src="https://styles.redditmedia.com/t5_2qqcn/styles/communityIcon_de3pi2i14o551.png?width=256&s=f1250c8ea9e7881e56056826cf383fae7d1b45e4" alt="" />
                    <span className='subreddit-text'>r/ukraine and more</span>
                </div>
            </li>
        )
    }
  
  
    const renderSkeletonComponents = (): React.ReactNode => {
        return [1, 2, 3, 4, 5].map(i => {
            return (<li key={i} className='dropdown-item event skeleton-wrapper'>
                <div className='skeleton'></div>
            </li>)
        })
    } 
    return (
        <ul className='trending'>
        {loading ? renderSkeletonComponents() : results
            .map(i => {
                return renderTile(i);
            })}
        </ul>
  )
}
