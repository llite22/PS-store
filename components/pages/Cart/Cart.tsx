"use client";
import { FC } from "react";
import { Game } from "@/interfaces/IGame";
import { removeItem } from "@/redux/slices/cartSlice";
import { updateTotalPrice } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "./Cart.module.scss";
const Cart: FC = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (id: number): void => {
    dispatch(removeItem(id));
    dispatch(updateTotalPrice());
    localStorage.removeItem(`addedToCart-${id}`);
  };

  return (
    <section className={styles.cart}>
      <div className="container">
        <div className={styles.cart__title}>
          <h2>Корзина</h2>
          <p>{totalPrice !== 0 ? `Итого: ${totalPrice}$` : "Итого: 0$"}</p>
        </div>
        <div className={styles.cart__total}></div>
        <ul>
          {items.map((game: Game) => (
            <li key={game.id}>
              <Image
                className={styles.cart__image}
                width={100}
                height={100}
                src={game.image}
                alt={game.title}
              />
              <div className={styles.cart__text}>
                <div className={styles.title}>{game.title}</div>
                <div>{game.description}</div>
                <div>{game.playstation}</div>
                <div>
                  {game.imageDev && (
                    <Image
                      className={styles.cart__imagePS}
                      width={20}
                      height={20}
                      src={game.imageDev}
                      alt={game.title}
                    />
                  )}
                </div>
              </div>
              <div className={styles.cart__price}>
                {game.newPrice
                  ? game.newPrice === "FREE"
                    ? game.newPrice
                    : `$${game.newPrice}`
                  : game.price === "FREE"
                  ? game.price
                  : `$${game.price}`}
              </div>
              <button onClick={() => handleRemoveItem(game.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cart;
