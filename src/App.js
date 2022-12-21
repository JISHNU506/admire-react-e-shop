import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, json, useNavigate } from "react-router-dom";

import { useEffect, useState } from 'react';
import Contact from './pages/Contact';
import Mainpage from './pages/Mainpage';
import Selectedpage from './pages/Selectedpage';
import Item from './components/Item';
import Loginpg from './components/Loginpg';
import Cartpg from './components/Cartpg';
import FinalCart from './pages/FinalCart';
import Login from './components/Login';
import Profilepage from './pages/Profilepage';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { loginCon } from './Context/LoginDetailsCon';




function App() {
const [contextstate,SetContextstate]=useState({})
  const [data,setData]=useState([])
const [cartdata,setCartdata]=useState(JSON.parse(localStorage.getItem("cartvalue")) ||[])
  
useEffect(()=>{
  AOS.init();
},[])


useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then((res)=>res.json())
  .then((datas)=> {
console.log("datas=====>",datas);
    setData(datas);
    console.log("after data====>",data);
  
  })
console.log("dataa=====>",data);

 
},[]);
 

const AddCart=(Cartitem)=>{
  console.log("Cartitem======>",Cartitem);

  // localStorage.setItem("cartvalue",JSON.stringify(Cartitem) )
  setCartdata([...cartdata,
    {...Cartitem}
  ])
  
}
useEffect(() => {
  localStorage.setItem("cartvalue",JSON.stringify(cartdata))
  
  }, [cartdata])


const dlt=(detdata)=>{
  console.log("deleteitem======>",detdata);
  const dot=cartdata.filter(item=>{
    return item.id!=detdata
  })
  console.log("dltdataaaaafinal======>",dot);
  setCartdata(dot)
}



  return (
 <>
 <loginCon.Provider value={{contextstate,SetContextstate}}>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainpage  d={data}/>}/>
      <Route path="/contact" element={<Contact  d={data}/>}/>
      <Route path="/catagory/:Catname" element={<Selectedpage/>}/>
      <Route path="/singleitem/:Items" element={<Item itc={AddCart}/>}/>
       <Route path="/cart" element={<FinalCart crt={cartdata}  dtdata={dlt} />}/>
       <Route path="/signin" element={<Loginpg/>}/>
       <Route path="/signup" element={ <Login/>}/>
       <Route path="/profile" element={ <Profilepage/>}/>
      </Routes>
    </BrowserRouter>
    </loginCon.Provider>


 </>
  );
}

export default App;
