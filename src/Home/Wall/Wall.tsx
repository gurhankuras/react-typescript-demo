import React from 'react'
import { Avatar } from '../../Shared/components/NavBar/components/Avatar'
import { NavSearchBar } from '../../Shared/components/NavBar/components/NavSearchBar'
import PostCreator from './components/PostCreator'
import './Wall.scss'

export default function Wall() {
  return (
    <main className='wall'>
      <PostCreator />

    </main>
  )
}
