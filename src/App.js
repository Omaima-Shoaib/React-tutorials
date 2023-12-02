import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductLisiting from "./components/ProductLisiting";
// import ProductComponent from "./components/ProductComponent";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className="App App-header bg-gray-800 text-white min-h-screen">
      {/* <Router> */}
        <Header></Header>
        <Routes>
          <Route path="/" element={<ProductLisiting></ProductLisiting>}></Route>
          <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
          {/* <Route><div className="text-red-600">404 page not found</div></Route> */}
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
