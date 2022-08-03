import {
  Routes,
  Route,
} from "react-router-dom";

import SideNav from "./components/side-nav/SideNav";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

function App() {
  return (
    <main className="grid-container">
      <Header />
      <SideNav />
      <div className="app-contents-grid">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
