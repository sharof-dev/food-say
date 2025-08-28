import type { FC } from "react"
import DeleteIcon from "../../assets/icons/delete.svg"

interface FavouriteCardProps{
    image?: string;
    title: string;
}

const FavouriteCard:FC<FavouriteCardProps> = ({image, title}) => {
  return (
    <div className="flex items-center bg-gray-50 shadow-sm p-4 rounded-xl">
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
    <div className="flex justify-between ml-3 w-[70%]">
      <h3 className="font-semibold text-lg">{title}</h3>
      <img src={DeleteIcon} alt={title} className="w-6" />
    </div>
  </div>
  )
}

export default FavouriteCard
