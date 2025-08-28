import React from 'react'
import Slider from '../components/Slider'
import FlashSale from '../components/FlashSale'

function Home() {
  return (
    <div className=" flex flex-col items-center ">
      <Slider/>
      <FlashSale/>
    </div>
  )
}

export default Home