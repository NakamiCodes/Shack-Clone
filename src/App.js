import "./css/App.css";
import NavBar from "./components/Nav-Bar";

import PageWrapper from "./components/Page-Wrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>

      <PageWrapper></PageWrapper>
    </div>
  );
}

export default App;
