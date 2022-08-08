const postReducer = (state = {posts:[], loading:false, uploading:false, error:false}, action)=>{
    switch(action.type)
    {
        case "UPLOAD_START":
            return {...state, uploading:true, error:false};
        case "UPLOAD_SUCCESS":
            return {...state, uploading:false, error:false, posts: [action.data,...state.posts]};
        case "UPLOAD_FAIL":
            return {...state, uploading:false, error:true};
        case "RETRIEVING_START":
            return {...state, loading:true, error:false};
        case "RETRIEVING_SUCCESS":
            return {...state, loading:false, error:false, posts: action.data};
        case "RETRIEVING_FAIL":
            return {...state, loading:false, error:true};
        default:
            return state;
    }
}

export default postReducer;