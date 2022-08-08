import React from 'react'
import Post from '../post/Post'
import "./Feed.css"
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';
import { getTimelinePosts } from '../../actions/PostAction';

const Feed = () => {

    const {user} = useSelector(state=>state.authReducer.authData);
    const {posts, loading} = useSelector(state=>state.postReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTimelinePosts(user._id));
    },[]);

    return (
        <div className="feed">
            {
                loading ? "Fetching posts..." :
                posts.map((post,index)=>{
                    return(
                        <Post key={index} post={post}/>
                    )
                })
            }
        </div>
    )
}

export default Feed