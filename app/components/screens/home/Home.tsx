import { FC } from 'react'
import ProductsList from '../../Products/ProductList'
import SpiderManHeroSection from '../../SpiderManHeroSection/SpiderManHeroSection'
import { GameData } from '@/app/interfaces/IGame'



const Home:FC<GameData> = ({ games }) => {
  return (
    <>
      <SpiderManHeroSection />
      <ProductsList games={games}/>
    </>
  )
}

export default Home