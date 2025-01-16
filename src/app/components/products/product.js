import Image from "next/image";
import { useState, useEffect } from "react";


export default function Product({ product, styles }) {

  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    if (addedToCart) {
      console.log('Product added to cart  ', product.name)
    } else {
      console.log('Product removed from cart  ', product.name)
    }
  }, [addedToCart])
  
  const addToCart = (id) => {
    setAddedToCart(true)
  }

  const removeFromCart = (id) => {
    setAddedToCart(false)
  }

  return (
    <div className={styles.product}>
      <Image src="/product-1.jpg" width={300} height={300} />
      <div className={styles.description}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <div className={styles.price}>
        <div>{product.price} MDL</div>
        {!addedToCart && (
          <button
            className={styles.buyBtn}
            onClick={() => addToCart(product.id)}
          >Add to cart</button>
        )}
        {addedToCart && (
          <button
            className={styles.buyBtn}
            onClick={() => removeFromCart(product.id)}
          >Remove from cart</button>
        )}
      </div>
    </div>
  )
}