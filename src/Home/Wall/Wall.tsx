import React from 'react'
import { Avatar } from '../../Shared/components/NavBar/components/Avatar'
import { NavSearchBar } from '../../Shared/components/NavBar/components/Search/NavSearchBar'
import PostCreator from './components/PostCreator'
import { PostList } from './components/PostList/PostList'
import { Post, PostType } from './models/Post'
import './Wall.scss'

// Flying with an Emirates A380
export default function Wall() {
  const posts: Post[] = [
    {
      id: '1',
      title: 'Don\'t threaten me with a good time😈😈😈',
      downvoted: false,
      upvoted: false,
      postedBy: {username: 'u/Brilliant_Program', profileLink: ''},
      postMethod: 'normal',
      subreddit: {name: 'r/Suddenlygay', image: 'https://b.thumbs.redditmedia.com/Zb0wasror0ZgkhX_eZ6TztwTv_1UzUQ7HOnx_2wOJvA.png', link: ''},
      upvoteCount: 1,
      commentCount: 10,
      createdAt: new Date(),
      link: '',
      type: PostType.image,
      body: { image: 'https://i.redd.it/timj2oh3s3891.jpg'}
    },

    {
      id: '2',
      title: 'Being finished?',
      downvoted: false,
      upvoted: false,
      postedBy: {username: 'u/Brilliant_Program', profileLink: ''},
      postMethod: 'normal',
      subreddit: {name: 'r/Suddenlygay', image: 'https://b.thumbs.redditmedia.com/Zb0wasror0ZgkhX_eZ6TztwTv_1UzUQ7HOnx_2wOJvA.png', link: ''},
      upvoteCount: 1,
      commentCount: 10,
      createdAt: new Date(),
      link: '',
      type: PostType.text,
      body: { description: 'Hello!\n\n\n\nI would like to translate a sentence that my Dr said to English.\n\nHe said something like "You should take Vitamin B6 2 weeks prior to your Isoniazide therapy cycle ( which is 6 months) being completed."\n\nWill it sound correct to write it likethe following?\n\n"Take Vitamin B6 2 weeks prior to your isoniazide therapy being finished."'}
    }
  ]
  return (
    <main className='wall'>
      <PostCreator />
      <PostList posts={posts}/>
    </main>
  )
}
