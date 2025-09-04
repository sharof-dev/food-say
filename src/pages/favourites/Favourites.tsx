import { type FC } from 'react'
import FavouriteCard from '../../components/Favourite/FavouriteCard'

const favouriteData = [
  {
    image: "https://picsum.photos/200",
    title: "Tomato soup",
  },
  {
    image: "https://picsum.photos/200",
    title: "Chicken",
  },
  {
    image: "https://picsum.photos/200",
    title: "Carrot",
  },
  {
    image: "https://picsum.photos/200",
    title: "Carrot",
  },
  {
    image: "https://picsum.photos/200",
    title: "Carrot",
  },
  {
    image: "https://picsum.photos/200",
    title: "Carrot",
  },
]

const Favourites: FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      {
        favouriteData.map((item,i) => (
          <FavouriteCard title={item.title} key={i} image={item.image} />
        ))
      }
    </div>
  )
}

export default Favourites
