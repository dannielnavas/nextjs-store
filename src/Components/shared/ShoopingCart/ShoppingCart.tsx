"use client";

import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCart.module.sass";

export const ShoppingCart = () => {
  // const [countItems, setCountItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useShoppingCart();

  const handleOpenCart = () => setIsOpen(!isOpen);

  return (
    <button className={styles.ShoppingCart} onClick={handleOpenCart}>
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      <FaShoppingCart />

      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {cart.map((cartItem) => (
            <p key={cartItem?.id}>
              {cartItem?.title} - {cartItem?.quantity}
            </p>
          ))}
        </div>
      )}
    </button>
  );
};
