import React from 'react'
import Contents from '../components/Contents'
import Fedpg from '../components/Fedpg'
import Footer from '../components/Footer'
import Main from '../components/Main'

export default function Mainpage(props) {
   
  return (
    <>
    <Main/>
    <Fedpg/>
    <Contents d={props.d}/>

    <Footer/>
    </>
  )
}
