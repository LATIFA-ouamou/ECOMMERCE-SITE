import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedProducts from './../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import { Products } from '../components/home/Products';
import { Subscribe } from './../components/home/Subscribe';

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />

      <Products />
      <Subscribe />
    </div>
  )
}

export default Home
