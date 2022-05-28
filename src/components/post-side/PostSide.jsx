import React from 'react'
import "./PostSide.css"
import PostShare from '../post-share/PostShare'
import Feed from '../feed/Feed'

const PostSide = () => {
  return (
    <div className='post-side'>
        <PostShare />
        <Feed />
    </div>
  )
}

export default PostSide