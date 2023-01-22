import React from 'react'
import Post from '../post/Post'
import "./Feed.css"
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';
import { getTimelinePosts } from '../../actions/PostAction';
import { useParams } from 'react-router-dom';

const Feed = () => {

    const {user} = useSelector(state=>state.authReducer.authData);
    let {posts, loading} = useSelector(state=>state.postReducer);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(getTimelinePosts(user._id));
    },[]);

    if(params.id) 
        posts = posts.filter((post)=>post.userId==params.id);

    return (
        <div className="feed">
            {
                posts.length == 0 ? <div>No posts available</div> : 
                loading ? "Fetching posts..." :
                posts.map((post)=>{
                    return(
                        <Post key={post._id} post={post}/>
                    )
                })
            }
        </div>
    )
}

export default Feed