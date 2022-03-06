import Header from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
