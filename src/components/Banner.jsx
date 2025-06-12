import { FaArrowRight, FaChevronRight } from "react-icons/fa"
import Section from "./Section"
import Slider from "react-slick";

import image_1 from "../assets/banner-1.jpg"
import brand_icon_1 from "../assets/brand-icon-1.png"
import { Link } from "react-router";
import { useEffect, useState } from "react";



const Banner = () => {
  // const [state, setState] = useState(0)
  //     useEffect(()=>{
  //       // console.log("Call useEffect ..");

  //         const timer =  setInterval(()=> {
  //           setState(state+1)
  //           console.log(state);
            
  //         }, 1000)

  //         return ()=> clearInterval(timer)
        
  //   }, [state])



   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Section Tagname="section" className={""}>
      <div className="grid grid-cols-[233px_1fr]">
        <div className="border-r border-r-gray-500 pt-10 pr-4 bg-slate-100">
          <ul className="grid grid-cols-1 gap-4">
            <ListItem text={"Woman’s Fashion"} icon={true}/>
            <ListItem text={"Men’s Fashion"} icon={true}/>
            <ListItem text={"Electronics"} />
          </ul>
        </div>

        {/* rightside-slider */}
        <div className="w-[937px] ml-auto pt-10 pl-10">
           <Slider {...settings}>
            <div className="pl-5">
              <SliderItem 
                image={image_1}
                brandTitle={"iPhone 14 Series"}
                discount={"10%"}
                brandLogo={brand_icon_1}
              />
            </div>
            <div className="pl-5">
              <SliderItem 
                image={image_1}
                brandTitle={"iPhone 12 Pro"}
                discount={"24%"}
                brandLogo={brand_icon_1}
              />
            </div>
            <div className="pl-5">
              <SliderItem 
                image={image_1}
                brandTitle={"iPhone 12 Pro"}
                discount={"24%"}
                brandLogo={brand_icon_1}
              />
            </div>
            <div className="pl-5">
              <SliderItem 
                image={image_1}
                brandTitle={"iPhone 12 Pro"}
                discount={"24%"}
                brandLogo={brand_icon_1}
              />
            </div>
            <div className="pl-5">
              <SliderItem 
                image={image_1}
                brandTitle={"iPhone 12 Pro"}
                discount={"24%"}
                brandLogo={brand_icon_1}
              />
            </div>
          </Slider>
        </div>
      </div>
    </Section>
  )
}

export default Banner

function ListItem({icon=false, text}) {
  return <li className="grid grid-cols-[1fr_24px] items-center gap-2">
      <a className="text-base text-black" href="/">{text}</a>
      {icon && <FaChevronRight />}
    </li>
}
function SliderItem({image, brandLogo, brandTitle, discount}) {
  return (
    <div style={{background: `url(${image})`}} className="h-[344px]  bg-center bg-no-repeat bg-cover text-white py-[58px] px-[64px]">
      <div className="max-w-[294px]">
        <p className="flex items-center gap-3 xl:text-red-600">
          <img src={brandLogo} alt="brand logo" />
          {brandTitle}
        </p>
        <h2 className="text-[48px] leading-[1.2] font-semibold pt-2 pb-3">Up to {discount} off Voucher</h2>
        <Link to={"/shop"} className="flex gap-2 items-center text-white p-1 cursor-pointer relative button_after">
          Shop Now
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}
