import { Search } from "lucide-react";
import React, { useState } from "react";

const ingredientsList = [
    "Avocado",
    "Tomato",
    "Cheese",
    "Egg",
    "Bread",
    "Chicken",
    "Onion",
    "Garlic",
];

const SearchInput = () => {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [filtered, setFiltered] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            setFiltered(
                ingredientsList.filter(
                    (item) =>
                        item.toLowerCase().includes(value.toLowerCase()) &&
                        !selected.includes(item)
                )
            );
        } else {
            setFiltered([]);
        }
    };

    const handleSelect = (item: string) => {
        setSelected([...selected, item]);
        setQuery("");
        setFiltered([]);
    };

    const handleRemove = (item: string) => {
        setSelected(selected.filter((i) => i !== item));
    };

    return (
        <div className="w-full">
            {/* Search input */}
            <div className="relative">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-2 rounded-xl">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Enter your ingredients"
                        className="flex-1 bg-transparent outline-none text-sm"
                    />
                </div>
                {/* Dropdown */}
                {filtered.length > 0 && (
                    <ul className="z-10 absolute bg-white dark:bg-neutral-700 shadow-md mt-1 border rounded-xl w-full">
                        {filtered.map((item, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSelect(item)}
                                className="hover:bg-gray-100 dark:hover:bg-neutral-600 px-4 py-2 dark:text-white cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Selected chips */}
            <div className="flex flex-col flex-wrap gap-2 mt-2">
                <h2 className="mb-3 font-bold text-lg">Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                    {selected.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-full text-white"
                        >
                            <span>{item}</span>
                            <button
                                onClick={() => handleRemove(item)}
                                className="font-bold text-white"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
