import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import BannersPage from "./BannersPage/BannersPage";
import Cart from "./components/shopping/Cart";
import Blog from "./components/Blogs/Blog";
import Info from "./Info";
import Login from "./components/Login/Login";
import firebase from "firebase/app";
import Admin from "./AdminPanel/Admin";
import Post from "./AdminPanel/Post"; 
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Main user={user} /> : <Login />} />
        <Route path="/:id" element={<Info />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bannersPage" element={<BannersPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
