
import Banner from '../components/Banner'
import BestSelling from '../components/BestSelling'
import Category from '../components/Category'
import FlashSales from '../components/FlashSales'
// import { useUser } from '../context/UserContext'
// import { useNavigate } from 'react-router'

const Home = () => {
  
  
  return (
    <>
    <Banner />
    <FlashSales />
    <Category />
    <BestSelling />
    </>
  )
}

export default Home
