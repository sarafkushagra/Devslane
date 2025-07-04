import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Items from './components/Items';
import Details from './components/Details';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleShowDetails = (item) => {
    setSelectedItem(item);
  };

  const handleGoBack = () => {
    setSelectedItem(null);
  };
  return (

    <div className='bg-gray-300 min-h-screen'>
      <Navbar />
      {selectedItem ? (
        <Details item={selectedItem} goBack={handleGoBack} />
      ) : (
        <>
          <div className="bg-white m-12 mb-0 flex justify-end ">
            <label for="category" className=" text-black font-semibold "></label>
            <select name="category" id="category" className='mr-12 mt-4 border-4' >
              <option value="all">All</option>
              <option value="footwear">Footwear</option>
              <option value="cups">Cups</option>
              <option value="shirts">Shirts</option>
              <option value="headphones">Headphones</option>
            </select>
          </div>
          <div className="bg-white m-12 mt-0 mb-0  p-4 flex flex-wrap justify-center gap-z">
            <Items
              image="https://images.unsplash.com/photo-1570784332176-fdd73da66f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fHww"
              name="Stylish Cups"
              category="Cups"
              price="79.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1579446565308-427218a2c60e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
              name="Stylish Sneakers"
              category="Footwear"
              price="109.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
              name="Stylish Sneakers"
              category="Footwear"
              price="99.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1570784332176-fdd73da66f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fHww"
              name="Stylish Cups"
              category="Cups"
              price="79.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1561909848-977d0617f275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3R3ZWFyfGVufDB8fDB8fHww"
              name="Stylish Sneakers"
              category="Footwear"
              price="59.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9uJTIwJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              name="Amazon Product"
              category="Speaker"
              price="49.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1hem9uJTIwJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              name="Stylish Headphones"
              category="Headphones"
              price="49.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnRzfGVufDB8fDB8fHww"
              name="Stylish Shirts"
              category="Shirt"
              price="99.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
              name="Stylish Shirts"
              category="Shirt"
              price="59.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1570784332176-fdd73da66f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fHww"
              name="Stylish Cups"
              category="Cups"
              price="79.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
              name="Stylish Sneakers"
              category="Footwear"
              price="99.99"
              showDetails={handleShowDetails}
            />
            <Items
              image="https://images.unsplash.com/photo-1570784332176-fdd73da66f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwfGVufDB8fDB8fHww"
              name="Stylish Cups"
              category="Cups"
              price="79.99"
              showDetails={handleShowDetails}
            />

          </div>
          <div className="bg-white flex m-12 pb-20  p-4 mt-0  gap-2">

            <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">1</button>
            <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">2</button>
            <button className="border-red-500 border-4 bg-red-300 text-white px-6 py-2 rounded">3</button>
          </div>
          <Footer />
          </>
      )}
        </div>

  )
}

export default App
