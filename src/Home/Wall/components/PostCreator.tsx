import './PostCreator.scss'
import React from 'react'
import { Avatar } from '../../../Shared/components/NavBar/components/Avatar'
import { NavSearchBar } from '../../../Shared/components/NavBar/components/Search/NavSearchBar'
import { PostCreatorSearch } from './PostCreatorSearch'

export default function PostCreator() {
  return (

    <div className='post-creation'>
        <Avatar width={3.5} height={3.5} image={'https://styles.redditmedia.com/t5_3roz2q/styles/profileIcon_snoo16a6ac4e-84c8-45e1-8930-f1b06266fa7a-headshot.png?width=256&height=256&frame=1&crop=256:256,smart&s=cee2d970ea12024092a4b14f358fdb3e61e08fc4'} />
        <PostCreatorSearch placeholder='Create Post' 
                    style={{padding: '0.7em'}}
                    onClick={() => {console.log('clicked')}}/>
    </div>
  )
}
