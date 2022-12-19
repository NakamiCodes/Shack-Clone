import "./css/App.css";
import NavBar from "./components/Nav-Bar";
import { useSelector, useDispatch } from "react-redux";
import PageWrapper from "./components/Page-Wrapper";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <PageWrapper></PageWrapper>
    </div>
  );
}

export default App;
