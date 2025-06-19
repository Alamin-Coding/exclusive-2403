import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [showProduct, setShowProduct] = useState([]);
    const [number, setNumber] = useState(0);
    console.log(number);
    


    const categoryMenu =   [...new Set(allProducts.map(cat => cat.category))];
    



    function filterData(p) {
        const categories =  allProducts.filter((item)=> {
            return item.category === p
        })

        setShowProduct(categories)
    }

    function showNumberOfProduct(event) {
        setNumber(event.target.value)

        setShowProduct(pre => pre.slice(0, Number(number)))
    }

    
    useEffect(()=> {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            setAllProducts(data.products)
            setShowProduct(data.products)
        });
    }, [])
  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-[200px_1fr] gap-4 py-20">
            {/* Filter Menu */}
            <div>
                <div className="flex gap-5 items-center mb-[50px]">
                    <Link to={"/"} className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to={"/product"} className="text-blue-700 hover:text-blue-600">Product</Link>
                </div>
                <div>
                    <h3 className="text-[20px] font-bold pb-3">Shop by Category</h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {categoryMenu?.map((menu, index) => {
                            return <li className="capitalize cursor-pointer" key={index} onClick={()=> filterData(menu)}>{menu}</li>
                        })}
                    </ul>
                </div>
            </div>

            {/* Products */}
            <div>
                <div className="flex justify-end">
                    <input onChange={(e) => showNumberOfProduct(e)} className="border border-gray-600 p-2" type="number" placeholder="0" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {showProduct?.map(({id, thumbnail, title , price, oldPrice, discount, discountPercentage, rating})=> (
                    <ProductCard
                     key={id} 
                     image={thumbnail}
                     title={title}
                     price={price}
                     oldPrice={oldPrice}
                     discount={discount}
                     discountPercentage={discountPercentage}
                     rating={rating}
                      />
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
