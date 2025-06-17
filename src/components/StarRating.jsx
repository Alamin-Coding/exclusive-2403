
import { FaStar } from 'react-icons/fa';


const StarRating = ({ 
  rating = 0, 
  maxStars = 5, 
  size = 20,
  className = "" 
}) => {
  const renderStar = (index) => {
    const starValue = index + 1;
    const isFilled = starValue <= rating;
    const isPartial = !isFilled && starValue - 0.5 <= rating;

    return (
      <div key={index} className="relative inline-block">
        {/* Background star (empty) */}
        <FaStar 
          size={size} 
          className="text-gray-300"
        />
        
        {/* Filled star overlay */}
        {(isFilled || isPartial) && (
          <FaStar 
            size={size} 
            className="absolute top-0 left-0 text-red-500"
            fill="currentColor"
            style={isPartial ? { clipPath: 'inset(0 50% 0 0)' } : {}}
          />
        )}
      </div>
    );
  };

  return (
    <div className={`flex ${className}`}>
      {[...Array(maxStars)].map((_, index) => renderStar(index))}
    </div>
  );
};

export default StarRating;