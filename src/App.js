import Header from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import OrdersScreen from "./screens/OrdersScreen";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/orders" element={<OrdersScreen />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
