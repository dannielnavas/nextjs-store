"use client";

// import { useState } from "react";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCart.module.sass";

export const ShoppingCart = () => {
  // const [countItems, setCountItems] = useState(0);
  const { cart } = useShoppingCart();

  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      <FaShoppingCart />
    </button>
  );
};
