import eye from "../assets/icons/eye-icon.svg";
import wishlist from "../assets/icons/wishlist-icon.svg";
import star from "../assets/icons/star.svg";
import star_half from "../assets/icons/star-half.svg";
import cardImage_2 from "../assets/keyboard.png";
import StarRating from "./StarRating";

const ProductCard = ({image,title , price, oldPrice, discount, discountPercentage, rating}) => {
  console.log(rating);
  
  return (
    <div className="grid grid-cols-1">
        {/* Image */}
      <div className="relative flex items-center justify-center p-10 bg-[#F5F5F5] h-[250px] rounded-[4px] overflow-hidden group">
        <span className="absolute top-2 left-2 z-10 rounded-[4px] bg-secondary-2 text-white py-1 px-3">{discountPercentage}%</span>
        <span className="absolute top-2 right-2 z-10 grid grid-cols-1 gap-2">
            <span className="cursor-pointer p-1 size-[34px] rounded-full flex items-center justify-center bg-white">
                <img className="w-[21px]" src={wishlist} alt="icon" />
            </span>
            <span className="cursor-pointer p-1 size-[34px] rounded-full flex items-center justify-center bg-white">
                <img className="w-[21px]" src={eye} alt="icon" />
            </span>
        </span>
        <img className="w-full " src={image} alt="image" />
        <button className="flex justify-center items-center cursor-pointer bg-black py-2 px-4 text-white absolute bottom-0 left-0 w-full z-10 transition-all invisible group-hover:visible">Add To Cart</button>
      </div>
{/* Text */}
      <div className="pt-4">
        <h3>{title}</h3>
        <p>$<span>{price}</span> $<del>1160</del> </p>
        {/* <div className="flex gap-4 items-center">
            <ul className="flex gap-2 items-center">
                <li><img src={star} alt="icon" /></li>
                <li><img src={star} alt="icon" /></li>
                <li><img src={star} alt="icon" /></li>
                <li><img src={star} alt="icon" /></li>
                <li><img src={star_half} alt="icon" /></li>
            </ul>
            <p>(<span>99</span>)</p>
        </div> */}
        <StarRating rating={rating}  />
      </div>
    </div>
  )
}

export default ProductCard
