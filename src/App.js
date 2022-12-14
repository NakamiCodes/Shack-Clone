import "./css/App.css";
import NavBar from "./components/Nav-Bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/Page-Wrapper";
import MainPage from "./components/Pages/Main-Page";
import HotFood from "./components/Pages/Hot-Food";
import Custard from "./components/Pages/Custard";
import Bevs from "./components/Pages/Bevs";
import BeerLocalRetail from "./components/Pages/Beer-Local-Retail";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      {/* <h1>Hello  {appState[0].first_name}!</h1> */}
      <Routes>
        <Route path="/" exact component={MainPage} />
        <Route path="/hotfood" component={HotFood} />
        <Route path="/custard" render={Custard} />
        <Route path="/bevs" render={Bevs} />
        <Route path="/beer" render={BeerLocalRetail} />
        {/* <Route path="/about" render={renderErrorPage} /> */}
      </Routes>
      <PageWrapper></PageWrapper>
    </div>
  );
}

export default App;
