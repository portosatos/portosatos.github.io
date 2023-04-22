import "./styles/style.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import Home from "./pages/home"
import Me from "./pages/me";
import MyWork from "./pages/mywork"

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/me" element={<Me/>} />
                  <Route path="/mywork" element={<MyWork/>} />
              </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;