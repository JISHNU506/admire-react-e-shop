import React from 'react'
import Contents from '../components/Contents'
import Footer from '../components/Footer'
import Main from '../components/Main'
import { useEffect, useState } from 'react';
import { useParams ,useLocation} from 'react-router-dom'
import Load from '../components/Load';


export default function Selectedpage() {
   
    let CatName = useParams();
   console.log(CatName.Catname);

  const [Cname,setCname]=useState({
    loading:true
  });
  
     useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/category/${CatName.Catname}`)
       .then((re)=>re.json())
       .then((dtas)=> {
     console.log("datas=====>",dtas);
         setCname({
          dtas,
          loading:false,

         });
         console.log("after data====>",Cname);
       })
      },[]);
     


  return (
    <> 
    {Cname.loading==true?<Load/>:<> <Main/>
    <Contents d={Cname.dtas} ca={CatName.CatName}/>
    <Footer/></>} 
   

    </>
  )
}
