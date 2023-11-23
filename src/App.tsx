import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
