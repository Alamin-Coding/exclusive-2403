import { useUser } from "../context/UserContext"

const Footer = () => {
  const {currentUser} = useUser()
  console.log(currentUser);
  
  return (
    <div>Footer </div>
  )
}

export default Footer