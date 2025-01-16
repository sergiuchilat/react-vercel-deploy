"use client";
import { useState } from "react";
import Product from "../components/products/product";
import styles from "../page.module.css";

export default function Home() {

  const products = [
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
  ]

  return (
    <>
      <h1>About page</h1>
      <Product product={products[2]} key={products[2].id} styles={styles} />
    </>
  );
}
