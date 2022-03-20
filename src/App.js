import Header from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Homescreen />} />
        <Route exact path="/cart" element={<CartScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route path="/orders" element={
          <ProtectedRoute> 
            <OrdersScreen />
          </ProtectedRoute>
        }  />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
