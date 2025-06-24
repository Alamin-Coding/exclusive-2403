
import SectionHeading from './SectionHeading'
import Section from './Section'
import ProductCard from './ProductCard'
import Button from './Button'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

const BestSelling = () => {
const [products, setProducts] = useState([]);



useEffect(()=> {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products));
}, [])


  return (
    <Section className="pt-[140px] pb-[60px]" id="best-selling">
        <SectionHeading subHeading="This Month" heading="Best Selling Products"/>

        <div className=' pt-10 grid grid-cols-4 gap-6'>
          {products?.map((item, i) => (
              <div className='px-3' key={i}>
                <ProductCard image={item.thumbnail} title={item.title} price={item.price} discountPercentage={item.discountPercentage} rating={item.rating}/>
              </div>
            ))}
        </div>
        <div className='pt-10 text-center'>
          <Button TagName={Link} to="/products" >View All Products</Button>
        </div>
    </Section>
  )
}

export default BestSelling
