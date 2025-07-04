
import Slider from 'react-slick'
import ProductCard from './ProductCard'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import nextArrow from "../assets/icons/next-arrow.svg"
import Button from './Button'
import { Link } from 'react-router'



const FlashSales = () => {
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
  }

  return (
    <Section className="pt-[140px] pb-[60px]" id="flash-sale">
        <SectionHeading subHeading="Today’s" heading="Flash Sale" countDown={true}/>

        <div className=' pt-10 w-[1170px]'>
          <Slider {...settings}>
            {[1,2,3,4,5,6].map((item, i) => (
              <div className='px-3' key={i}>
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
        </div>
        <div className='pt-10 text-center'>
          <Button TagName={Link} to="/products" >View All Products</Button>
        </div>
    </Section>
  )
}

export default FlashSales


const PrevArrow = (props)=> {
   const { className, style, onClick } = props;
  return (
    <button className='arrow prev-arrow' onClick={onClick}>
      <FaChevronLeft />
    </button>
  );
}
const NextArrow = (props)=> {
   const { className, style, onClick } = props;
  return (
    <button className='arrow next-arrow' onClick={onClick}>
      <img src={nextArrow} alt="icon" />
    </button>
  );
}