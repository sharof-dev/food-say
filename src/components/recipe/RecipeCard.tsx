import React from "react";

interface RecipeCardProps {
  title: string;
  description: string;
  image?: string; 
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex items-center bg-gray-50 shadow-sm p-3 rounded-xl">
      {/* Image placeholder */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="rounded-lg w-20 h-20 object-cover"
        />
      ) : (
        <div className="bg-gray-200 rounded-lg w-20 h-20" />
      )}

      {/* Text */}
      <div className="ml-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
