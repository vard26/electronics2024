import "./App.css";
import './responsive.css';
import Footer from "./actualcomponents/footer/Footer";
import Header from "./actualcomponents/header/Header";
import Navbar from "./actualcomponents/header/Navbar";
import Home from "./components/home/Home";
import { Context } from "./Context";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { homedeal, shoppart } from "./lists";
import Single from "./Single";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Cart from './actualcomponents/Cart';
import Favorite from './actualcomponents/Favorite';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Settings from "./actualcomponents/Settings";

export default function App() {
  const [singleIndex, setSingleIndex] = useState(0);
  const [favorite,setFavorite] = useState([]);
  const [cart,setCart] = useState([]);
  const [count,setCount] = useState(0);
  const [total,setTotal] = useState(0);
  const [filtered,setFiltered] = useState(shoppart);
  const [loader,setLoader] = useState(false);

  const adding = (arrayname, addElementname, setElementName) => setElementName([...arrayname, addElementname]); 
  
  const removeing = (arrayname, id, setElementName) => setElementName([...arrayname.filter(rem => rem.id !== id)]); 

 const scrollToTop = () =>  window.scrollTo({top : 0, behavior: 'smooth'});

 const filtering = item => {
    setFiltered(shoppart.filter(shop => shop.category.toLowerCase() == item.toLowerCase()))  
 }

 useEffect(() => {
      AOS.init({
        duration : 500
      });
 },[]);

  const values = {
    singleIndex,
    setSingleIndex,
    adding,cart,favorite,
    setFavorite,setCart,
    scrollToTop,setCount,
    total,setTotal,
    removeing,
    filtered,setFiltered,
    filtering,loader,setLoader
  };

  useEffect(() => {
    if(localStorage.getItem('single') !== null) {
      setSingleIndex(localStorage.getItem("single"));
    }
  });

  useEffect(() => {
      document.querySelector('.load').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.load').style.display = 'none';
      }, Math.round(Math.random() * 4000));
  },[loader]);


  return (
    <Context.Provider value={values}>
      <div className="App">
        <div className="to_top_block" onClick={scrollToTop}>
            <MdKeyboardDoubleArrowUp />
        </div>
        <div className="load">
            <div className="load_frame_1"></div>
            <div className="load_frame_2"></div>
            <div className="load_frame_3"></div>
        </div>
        <Header />
        <Navbar />
        <Settings />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={`/${homedeal[singleIndex].name.replace(/\s/g, '-')}`} element={<Single />} />
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Favorite" element={<Favorite />}></Route>
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}
