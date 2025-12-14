import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

import Nav from './layout/nav/Nav';
import Notice from './pages/notice/Notice';
import FreeBoard from './pages/freeboard/FreeBoard';
import Post from './pages/Category';
import Main from './pages/main/Main';
import Gallery from './pages/Gallery';
import ReHome from './pages/ReHome';  
import Category from './pages/category/Category';

import MainPage from './pages/main/Main';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
      
      <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='notice' element={<Notice/>}/>
          <Route path='petstory' element={<FreeBoard/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path="Gallery" element={<Gallery />} />
          <Route path="ReHome" element={<ReHome />} />
          <Route path='Post' element={<Post/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
