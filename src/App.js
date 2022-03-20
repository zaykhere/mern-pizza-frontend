import Header from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminScreen from "./screens/AdminScreen";
import AdminRoute from "./components/AdminRoute";

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
        <Route path="/admin/*" element={
          <AdminRoute>
            <AdminScreen />
          </AdminRoute>
        } />
       
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
