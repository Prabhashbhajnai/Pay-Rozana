// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import LoginLayoutHOC from "./HOC/Login.Hoc";

// component
import temp from "./components/temp";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Home} />
      <LoginLayoutHOC path="/login" exact component={Login} />
      <LoginLayoutHOC path="/signup" exact component={SignUp} />
    </>
  );
}

export default App;
