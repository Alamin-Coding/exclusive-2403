import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [showProduct, setShowProduct] = useState([]);
    const [number, setNumebr] = useState(30);


    


    const categoryMenu =   [...new Set(allProducts.map(cat => cat.category))];
    



    function filterData(p) {
        const categories =  allProducts.filter((item)=> {
            return item.category === p
        })

        setShowProduct(categories)
    }

    function showNumberOfProduct(event) {
        setNumebr(event.target.value)
        setShowProduct(allProducts.slice(0, Number(event.target.value)))
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
                    {/* <input onChange={(e)=> showNumberOfProduct(e)} className="border border-gray-600 p-2" type="number" placeholder="0" /> */}
                    <label htmlFor="">Show :</label>
                    <select name="" id="" onChange={(e)=> showNumberOfProduct(e)}>
                        <option value={allProducts.length} selected>All</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                    </select>
                </div>
                {number <= 0 && <div className="w-full p-20 flex items-center justify-center">
                        
                        <p className="font-bold text-2xl">No Product Found!</p>
                    </div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {showProduct?.map((item)=> (
                    <ProductCard
                     key={item.id} product={item}/>
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
