import "./static/css/bootstrap.css";
import "./static/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/auth/Signin";
import { Signup } from "./pages/auth/Signup";
import { Account } from "./pages/account/Account";
import { Address } from "./pages/account/address/Address";
import { Addaddress } from "./pages/account/address/Addaddress";
import { Orders } from "./pages/account/orders/Orders";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ap/signin" element={<Signin />} />
          <Route path="/ap/register" element={<Signup />} />
          <Route path="/gp/account" element={<Account />} />
          <Route path="/gp/account/address" element={<Address />} />
          <Route path="/gp/account/address/add" element={<Addaddress />} />
          <Route path="/gp/account/orders" element={<Orders />} />
          <Route path="/gp/cart" element={<Cart />} />
          <Route path="/gp/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
