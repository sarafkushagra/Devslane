import { useState } from 'react';
import alldata from './allData';
import ItemsList from './ItemsList';

export default function Filter() {
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");
    let [data, setData] = useState(alldata);
    function handleChange(event) {
        const newQuery = event.target.value;
        data = alldata.filter(function (item) {
            const lowerCaseName = item.name.toLowerCase();
            const lowerCaseQuery = newQuery.toLowerCase();
            return lowerCaseName.indexOf(lowerCaseQuery) !== -1;
        });
        setQuery(newQuery);
        setData(data);
    }
    function handleSort(event) {
        setSort(event.target.value);
    }
    if (sort === "name") {
        data = data.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    }
    else if (sort === "pricelh") {
        data = data.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    else if (sort === "pricehl") {
        data = data.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    return (
        <>
            <div className="bg-white m-12 mb-0 flex justify-end ">
                <input type="text" placeholder='Search' value={query} onChange={handleChange} className='border-4 border-gray-300 rounded p-2 mr-4 mt-4 ' />
                <label for="sorting" className=" text-black font-semibold "></label>
                <select onChange={handleSort} value={sort} name="sorting" id="sorting" className='mr-12 mt-4 border-4 border-gray-300' >
                    <option value="default">Default</option>
                    <option value="name">Sort By Name</option>
                    <option value="pricelh">Sort By Price Low to High</option>
                    <option value="pricehl">Sort By Price High to Low</option>
                </select>
            </div>

            <ItemsList items={data} />
        </>

    )
}
