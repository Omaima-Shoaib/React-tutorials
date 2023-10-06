import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./context-and-reducer/StoreContext";
function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <Navbar></Navbar>
          <div className="bg-slate-200 min-h-screen">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/basket" element={<Basket></Basket>}></Route>
            </Routes>
          </div>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
