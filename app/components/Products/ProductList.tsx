import Link from 'next/link'
import { FC } from 'react'


import styles from './ProductList.module.scss'
import ProductCard from '../ui/ProductCard';
import { GameData } from '@/app/interfaces/IGame';



const ProductsList:FC<GameData> = ({ games }) => {
  return (
    <section className={styles.product}>
      <div className="container">
        <div className={styles.product__title}>
          <h1>New Releases</h1>
          <Link href="/catalog">VIEW ALL +</Link>
        </div>
        <div className={styles.product__item}>        
          {games && games.slice(0, 12).map((game) => (
            <ProductCard
              key={game.id}
              id={game.id}
              title={game.title}
              description={game.description}
              playstation={game.playstation}
              imageDev={game.imageDev}
              image={game.image}
              price={game.price}
              newPrice={game.newPrice}
              imageDevColor={game.imageDevColor}
              addOn={game.addOn}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsList