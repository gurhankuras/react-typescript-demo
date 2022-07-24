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
      subreddit: {name: 'r/ProgrammerHumor', image: 'https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png?width=256&s=291ef0574ce6193e7093c9a9bc1a3f80e1e69631', link: ''},
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
      subreddit: {name: 'r/ProgrammerHumor', image: 'https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png?width=256&s=291ef0574ce6193e7093c9a9bc1a3f80e1e69631', link: ''},
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
