import React from 'react'
import { Post } from '../../models/Post';
import { PostComponent } from '../PostComponent/PostComponent';
import './PostList.scss'

type Props = {
    posts: Post[];
}
export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className='list'>{posts.map(post => {
        return <PostComponent key={post.id} post={post}/>
    })}</div>
  )
}
