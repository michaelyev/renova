'use client'

import Discounts from '@/components/Discounts/Discounts'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'
import Video from '@/components/Video/Video'
import Image from 'next/image'
import Manufacturers from '@/components/Manufacturers/Manufacturers'
import Portfolio from '@/components/Portfolio/Portfolio'
import Ratings from '@/components/Ratings/Ratings'
import Blog from '@/components/Blog/Blog'
import Faq from '@/components/FAQ/Faq'
import Contact from '@/components/ContactMain/ContactMain'
import Reviews from '@/components/Reviews/Reviews'


export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Discounts />
      <Video />
      <Manufacturers />
      <Portfolio />
      <Reviews />
      <Ratings />
      <Blog />
      <Faq />
      <Contact />
    </main>
  )
}
