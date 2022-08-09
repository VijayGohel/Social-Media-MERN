import "./App.css"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth"
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {

  const user = useSelector(state=>state.authReducer.authData);

  return (
    <div className="app">

       <div className="blur"> </div>
       <div className="blur"> </div>

      <Routes>
        <Route path="/" element={user? <Navigate to="home"/> : <Navigate to="auth"/>}/>  
        <Route path="/auth" element={user? <Navigate to="../home"/> : <Auth />}/>
        <Route path="/home" element={user? <Home /> : <Navigate to="../auth"/>}/>  
        <Route path="/profile/:id" element={user? <Profile /> : <Navigate to="../auth"/>}/>  
      </Routes>

    </div>
  );
}

export default App;
