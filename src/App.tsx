import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ApiRequests from "./components/ApiRequests";
import {MainPage} from "./components/MainPage.jsx";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import UsersList from "./components/UsersList";

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="*" element={<Navigate replace to="/" />}/>
        <Route path="requests" element={<ApiRequests/>}/>
        <Route path="users" element={<UsersList page={2}/>}/>
        <Route path="products" element={<ProductList/>}/>
        <Route path="products/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;