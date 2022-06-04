// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// component
import temp from "./components/temp";

// Pages
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Home} />
    </>
  );
}

export default App;
