import React from 'react'
import Slider from '../components/Slider'
import FlashSale from '../components/FlashSale'
import BestSale from '../components/BestSale'
import Banner from '../components/Banner'

function Home() {
  return (
    <div className=" flex flex-col  items-center ">
      <Slider/>
      <FlashSale/>
      <Banner/>
      <BestSale/>
    </div>
  )
}

export default Home