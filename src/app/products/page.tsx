import React from 'react'
import Banner from '../../components/Pages/Products/components/Banner/Banner'
import NavTabs from '@/components/common/navtabs/NavTabs'
import Selection from './Selection/Selection' 
import ProductList from '@/components/Pages/Products/components/ProductList/ProductList'
import SelectionFaq from './Selection/SelectionFaq/SelectionFaq'
import ProductSearch from '@/components/ProductSearch/ProductSearch'
import ContactForm from '@/components/ContactForm/ContactForm'

const Products = () => {
  return (
    <main>
      <Banner />
      <NavTabs tabName={"products"} />
      <div className="container flex gap-[20px] ">
        <div>
          <Selection />
          <SelectionFaq />
        </div>
        <div className='flex flex-col'>
        <ProductSearch />
        <ProductList />
        </div>
 
      </div>
      <ContactForm />
    </main>
  );
}

export default Products