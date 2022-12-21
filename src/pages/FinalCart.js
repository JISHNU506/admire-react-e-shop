import React from 'react'
import Cartpg from '../components/Cartpg'
import Main from '../components/Main'

export default function FinalCart(props) {
  // const {crt}=props
  return (
    <>
    <Main/>
    <Cartpg crt={props.crt}dlt={props.dtdata} />
    </>
  )
}
