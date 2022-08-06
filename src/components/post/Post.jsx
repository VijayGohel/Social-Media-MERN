import React from 'react'
import "./Post.css"
import Comment from "../../img/comment.png"
import Like from "../../img/like.png"
import Notlike from "../../img/notlike.png"
import Share from "../../img/share.png"

const Post = ({post}) => {
  console.log(process.env.REACT_APP_PUBLIC_FOLDER + post.img);

  return (
    <div className='post'>
        <img className='post-img' src={post.image ? process.env.REACT_APP_PUBLIC_FOLDER+ "/" + post.image : null} alt="" />

        <div className='icons'>
            <img src={post.liked? Like : Notlike } alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <div className='post-likes'>{post.likes} likes</div>

        <div className='detail'>
            <span>{post.name} </span>
            <span>{post.desc}</span>
        </div>
    </div>
  )
}

export default Post