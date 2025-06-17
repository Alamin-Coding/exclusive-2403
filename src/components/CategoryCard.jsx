
const CategoryCard = ({icon, text}) => {
  return (
    <div className="border rounded-[4px] flex items-center justify-center flex-col p-3 cursor-pointer hover:bg-secondary-2 hover:text-white w-[170px] h-[145px] gap-4 group">
      <span>

      <img className="grayscale-100" src={icon} alt="icon" />


      </span>
      <span>{text}</span>
    </div>
  )
}

export default CategoryCard
