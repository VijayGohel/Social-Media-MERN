import React, { useState } from 'react'
import "./Post.css"
import Comment from "../../img/comment.png"
import Like from "../../img/like.png"
import Notlike from "../../img/notlike.png"
import Share from "../../img/share.png"
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'

const Post = ({post}) => {

  const user = useSelector(state=>state.authReducer.authData.user);
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);

  const handleLike = ()=>{
    likePost(post._id, user._id);
    setLiked(prev=>!prev);
    liked? setLikes(prev=>prev-1) : setLikes(prev=>prev+1);
  }

  return (
    <div className='post'>
        <img className='post-img' src={post.image ? process.env.REACT_APP_PUBLIC_FOLDER+ "/" + post.image : null} alt="" />

        <div className='icons'>
            <img src={liked? Like : Notlike} onClick={handleLike} alt="" style={{cursor:"pointer"}}/>
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <div className='post-likes'>{likes} likes</div>

        <div className='detail'>
            <span>{post.name} </span>
            <span>{post.desc}</span>
        </div>
    </div>
  )
}

export default Post