import React from 'react'
import './PostComponent.scss'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Post, PostType } from '../../models/Post'
import { postBodyFactory } from './PostBodyFactory'

type Props = {
    post: Post;
}

export const PostComponent: React.FC<Props> = ({ post }) => {
  return (
    <section className='post'>
        <div className="voting">
            <AiOutlineArrowUp />
            <span className='upcount'>{post.upvoteCount}</span>
            <AiOutlineArrowDown />
        </div> 
        <div className='body'>
            <header>
                <img src={post.subreddit.image} alt={post.subreddit.name} />
                <Link to={post.subreddit.link} className='subreddit-name'>
                    {post.subreddit.name}
                </Link>
                <span>•</span>
                <span className='info'>
                    Posted by <Link to={''} className='username'>{post.postedBy.username}</Link>
                </span>
                <span className='timestamp tooltip'>
                    {true && <span className="tooltiptext">{post.createdAt.toString()}</span>}
                    6 hours ago
                </span>
            </header>
            <p className='title'>{post.title}</p>
            
           
            <div className='content' data-type={post.type}>
                {postBodyFactory.createPostBody(post)}  
            </div>
        </div>
    </section>
    )
}
