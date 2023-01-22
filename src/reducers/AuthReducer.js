const authReducer = ( state = {authData: null, loading: false, updating: false, error: false}, action)=>{
    switch (action.type) {
        case "AUTH_START":
            return {...state, loading: true, error:false};
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {...state, loading: false, error:false, authData: action.data};
        case "AUTH_FAIL":
            return {...state, loading: false, error: true};

        case "UPDATING_START":
            return {...state, updating: true, error: false};
        case "UPDATING_SUCCESS":
            return {...state, updating: false, error: false, authData: action.data};
        case "UPDATING_FAIL":
            return {...state, updating: false, error: true};

        case "FOLLOW_USER":
            return {...state, authData: {...state.authData, user: {...state.authData.user, following: [...state.authData.user.following, action.data]}}};
        case "UNFOLLOW_USER":
            return {...state, authData: {...state.authData, user: {...state.authData.user, following: state.authData.user.following.filter(userId=>userId!==action.data)}}};

        case "LOG_OUT":
            localStorage.clear();
            return {...state, loading: false, error: false, authData: null};
        default:
            return state;
    }
}

export default authReducer;