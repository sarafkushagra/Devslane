// import { useState, useEffect } from 'react';
// import ItemsList from './ItemsList';
// import axios from 'axios';

// export default function Filter() {
//     const [query, setQuery] = useState("");
//     const [sort, setSort] = useState("default");
//     const [data, setData] = useState([]);
//     const [originalData, setOriginalData] = useState([]);

//     useEffect(() => {
//         axios.get("https://dummyjson.com/products")
//             .then((response) => {
//                 setData(response.data.products);
//                 setOriginalData(response.data.products);
//             });
//     }, []);

//     function handleChange(event) {
//         const newQuery = event.target.value.toLowerCase();
//         const filtered = originalData.filter(item =>
//             item.title.toLowerCase().includes(newQuery)
//         );
//         setQuery(event.target.value);
//         setData(filtered);
//     }

//     function handleSort(event) {
//         const sortValue = event.target.value;
//         setSort(sortValue);

//         let sortedData = [...data];

//         if (sortValue === "name") {
//             sortedData.sort((a, b) => a.title.localeCompare(b.title));
//         } else if (sortValue === "pricelh") {
//             sortedData.sort((a, b) => a.price - b.price);
//         } else if (sortValue === "pricehl") {
//             sortedData.sort((a, b) => b.price - a.price);
//         }

//         setData(sortedData);
//     }

//     return (
//         <>
//             <div className="bg-white m-12 mb-0 flex justify-end ">
//                 <input type="text" placeholder='Search' value={query} onChange={handleChange} className='border-4 border-gray-300 rounded p-2 mr-4 mt-4 ' />
//                 <select onChange={handleSort} value={sort} className='mr-12 mt-4 border-4 border-gray-300' >
//                     <option value="default">Default</option>
//                     <option value="name">Sort By Name</option>
//                     <option value="pricelh">Sort By Price Low to High</option>
//                     <option value="pricehl">Sort By Price High to Low</option>
//                 </select>
//             </div>

//             <ItemsList items={data} />
//         </>
//     )
// }
