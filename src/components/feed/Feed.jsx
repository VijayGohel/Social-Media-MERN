import React from 'react'
import {PostsData} from '../../data/PostsData'
import Post from '../post/Post'
import "./Feed.css"

const Feed = () => {
  return (
        <div className="feed">
            {
                PostsData.map((post,index)=>{
                    return(
                        <Post key={index} post={post}/>
                    )
                })
            }
        </div>
    )
}

export default Feed