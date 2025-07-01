import { useEffect, useState } from "react";
import Bin from "../assets/Bin.svg";
import SectionHeading from "../components/SectionHeading";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { removeToWishist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const wishList = useSelector((state) => state.wishList);
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.products));
  //   }, []);

  return (
    <section className="pt-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <p>Wishlist ({wishList.length})</p>
          <button className="py-4 px-12 rounded-[4px] border border-black/50">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-4 gap-[30px] pt-[60px]">
          {wishList.map((item) => (
            <Wishlist_items
              image={item.images}
              disCount={item.discountPercentage}
              title={item.title}
              price={item.price}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
        <div className="pt-20">
          <div className="flex items-center justify-between">
            <SectionHeading heading={"Just For You"} />
            <Link
              to={"/productPage"}
              className="rounded-[4px] py-4 px-12 border border-black/50 font-medium leading-[24px]"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-4 items-center gap-[30px]">
            {/* {wishList.map((item) => (
              <ProductCard product={item} />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Wishlist_items = ({ id, image, price, oldPrice, disCount, title }) => {
      const dispatch = useDispatch()
  return (
    <div className="w-[270px] rounded-[4px] overflow-hidden">
      <div className="relative group bg-[#F5F5F5] rounded-[4px] overflow-hidden">
        <img src={image} alt="image" />
        <div className="bg-[#DB4444] py-2 px-3 rounded-[4px] absolute top-3 left-3 text-white text-[12px] leading-[18px]">
          {disCount}%
        </div>
        <div className="absolute top-3 right-3 rounded-full size-[34px] bg-white flex items-center justify-center">
          <button onClick={()=> dispatch(removeToWishist(id))}>
            <img src={Bin} alt="" />
          </button>
        </div>
        <div className="absolute w-full left-0 bottom-0 bg-black opacity-0 group-hover:opacity-100 flex items-center justify-center py-2 transition-all duration-300">
          <div>
            <img src="/cart-2.svg" alt="icon" />
          </div>
          <p className="text-white text-[12px] leading-[18px]">Add To Cart</p>
        </div>
      </div>
      <p className="text-[16px] leading-[18px] font-medium pt-4 pb-2">
        {title}
      </p>
      <p className="text-[#DB4444] text-[16px] leading-[24px] font-medium">
        ${price}
      </p>
    </div>
  );
};

export default Wishlist;
