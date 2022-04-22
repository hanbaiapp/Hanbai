import { Routes, Route } from 'react-router-dom';
import Header from "./component/header/Header";
import Home from "./component/Home/Home";
import Description from "./component/Description/Description";
import About from "./component/About/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
