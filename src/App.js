import "./App.css"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth"

function App() {
  return (
    <div className="app">

       <div className="blur"> </div>
       <div className="blur"> </div>

      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
