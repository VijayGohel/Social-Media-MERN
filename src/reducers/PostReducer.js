const postReducer = (state = {posts:[], loading:false, uploading:false, error:false}, action)=>{
    switch(action.type)
    {
        case "UPLOAD_START":
            return {...state, uploading:true, error:false};
        case "UPLOAD_SUCCESS":
            return {...state, uploading:false, error:false, posts: [...state.posts, action.data]};
        case "UPLOAD_FAIL":
            return {...state, uploading:false, error:true}
        default:
            return state;
    }
}

export default postReducer;