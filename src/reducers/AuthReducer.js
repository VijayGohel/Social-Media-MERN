const authReducer = ( state = {authData: null, loading: false, error: false}, action)=>{
    switch (action.type) {
        case "AUTH_START":
            return {...state, loading: true};
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({...action?.date}));
            return {...state, loading: false, authData: action.data};
        case "AUTH_FAIL":
            return {...state, loading: false, error: true};
        default:
            return state;
    }
}

export default authReducer;