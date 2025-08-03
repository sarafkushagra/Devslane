import React, { useEffect, useState, useMemo } from 'react';
import ItemsList from './ItemsList';
import NoMatching from './NoMatchingItems';
import { getProductList } from './api';
import Loading from './Loading';

function ItemListPage() {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('default');

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(function () {
        const token = getProductList();
        token.then(function (products) {
            setProductList(products);
            setLoading(false);
        });
    }, []);

    const filteredData = useMemo(function () {
        let data = productList.filter(function (item) {
            const lowerCaseTitle = item.title.toLowerCase();
            const lowerCaseQuery = query.toLowerCase();
            return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
        });
        if (sort == 'name') {
            data = [...data].sort(function (x, y) {
                return (x.title < y.title ? -1 : 1);
            });
        } else if (sort == "pricelh") {
            data = [...data].sort(function (x, y) {
                return x.price - y.price;
            });
        }
        else if (sort == "pricehl") {
            data = [...data].sort(function (x, y) {
                return y.price - x.price;
            });
        }
        return data;
    }, [productList, query, sort]);

    function handleQueryChange(event) {
        const newQuery = event.target.value;
        setQuery(newQuery);
    };
    function handleSortChange(event) {
        setSort(event.target.value);
    };

    if (loading) {
        return (<Loading />);
    }

    return (
        <>
            <div className="bg-white mt-12 max-w-6xl mx-auto flex items-center justify-end  py-12">
                <input
                    type="text"
                    value={query}
                    placeholder='Search'
                    className='border-2 border-gray-500 rounded-md p-1 mr-8'
                    onChange={handleQueryChange} />
                <label htmlFor="sort" className=" text-black font-semibold"></label>
                <select onChange={handleSortChange} name="sort" id="sort" className='mr-8 border-2 p-1 rounded-md' value={sort} >
                    <option value="default">Default sort</option>
                    <option value="name">Sort by name</option>
                    <option value="pricelh">Sort by price: Low to High</option>
                    <option value="pricehl">Sort by price: High to Low</option>
                </select>
            </div>
            <div className="bg-white max-w-6xl mx-auto">
                {filteredData.length > 0 && <ItemsList products={filteredData} />}
                {filteredData.length == 0 && <NoMatching>No Matching Results Found</NoMatching>}
            </div>
            <div className="flex mx-auto py-16 bg-white  gap-2 max-w-6xl">
                <div className='gap-2 flex' >
                    <button className="ml-10 border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">1</button>
                    <button className="border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">2</button>
                    <button className="border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">3</button>
                </div>
            </div>
        </>
    );
}
export default ItemListPage;