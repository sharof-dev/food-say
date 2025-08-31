
import SearchInput from '../search/Search';

const Header = () => {
    return (
        <div>
            <div className="flex justify-center items-center p-4">
                <h1 className="font-bold text-xl text-center">Recipes for You</h1>
            </div>
            <div className="px-4">
                    <SearchInput />
            </div>
        </div>
    )
}

export default Header
