"use client";

import styles from "./page.module.css";
import Product from "./components/products/product";
import Offer50 from "./components/offers/offer50";
import Offer20 from "./components/offers/offer20";
import { useState, useEffect } from "react";

export default function Home() {

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)
  

  setTimeout(() => {
    setProducts([
      {
        id: 1,
        name: 'Product 1',
        description: 'Product description',
        price: 100,
        image: '/product-1.jpg'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Product description',
        price: 200,
        image: '/product-2.jpg'
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Product description',
        price: 300,
        image: '/product-3.jpg'
      }
    ])

    console.log('Products loaded')
  }, 5000)


  useEffect(() => {
    console.log('Products updated')
    if (products.length > 0) {
      setLoading(false)
    }
  }, [products])
  
  return (
    <>
      <h1 className={styles.pageTitle}>Products</h1>
      <Offer20 styles={styles} />
      { loading && <div className={styles.loading}>Loading...</div> }
      
      { !loading && <div className={'products'}>
        {products.map(product => (
          <Product product={product} key={product.id} styles={styles} />
        ))}
      </div>}
      <Offer50 styles={styles} />
    </>
  );
}
