import React, { useState } from 'react'
import './css/Home.css'
import Header from './Header'
import Exploremenu from './Exploremenu'
import Fooddisplay from './Fooddisplay'
import Appdownload from './Appdownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
