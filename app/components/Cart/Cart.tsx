import { FC } from 'react';


const Cart:FC = () => {
  
  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
};

export default Cart;