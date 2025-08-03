import React, { useEffect, useState,useCallback } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { getProductData } from './api';
import Loading from './Loading';
import NotFound from './NotFound';

function Details({onAddToCart}) {
    const params = useParams();
    const id = +(params.id);
    const [product, setProduct] = useState();
    const [loading,setLoading] = useState(true);
    const [count,setCount] = useState(1);

    useEffect(function () {
        const promise = getProductData(id);
        promise.then(function (product) {
            setProduct(product);
            setLoading(false);
        }).catch(function(){
            setLoading(false);
        });
    }, [id]);

    const handleCountChange = useCallback(function (event){
        setCount(+event.target.value);
    },[]);
    const navigate = useNavigate();
    const handleButtonClick=useCallback(function (){
        setCount(1);
        onAddToCart(id,count);
        navigate(`/details/${id+1}`);
        setLoading(true);
    },[id,count,navigate,onAddToCart]);

    const handleCartCount = useCallback(function (){
        setLoading(true);
        setCount(1);
    },[]);

    if(loading){
        return <Loading />
    }
    if(!product){
        return <NotFound/>;
    }


    return (
    <>
    <div className="flex justify-center my-8  items-center bg-stone-100">
  {id > 1 && (
    <Link
      className="text-red-500 text-2xl mx-4"
      onClick={handleCartCount}
      to={`/details/${id - 1}`}
    >
      <IoMdArrowRoundBack />
    </Link>
  )}

  <div className="flex bg-white w-[80%] min-h-[500px] shadow-xl rounded-lg overflow-hidden">
    <div className="w-1/2 flex items-center justify-center bg-gray-50 p-6">
      <img
        className="object-contain h-[400px] w-full max-w-full"
        src={product.thumbnail}
        alt={product.title}
      />
    </div>

    <div className="w-1/2 p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <p className="text-gray-600 mb-6 line-clamp-4">{product.description}</p>
      </div>

      <div>
        <div className="flex items-center mb-4">
          <input
            type="number"
            min="1"
            value={count}
            onChange={handleCountChange}
            className="border border-gray-300 w-16 p-2 rounded"
          />
          <button
            onClick={handleButtonClick}
            className="ml-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
        <Link to="/" className="inline-block">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  </div>

  <Link
    className="text-red-500 text-2xl mx-4"
    onClick={handleCartCount}
    to={`/details/${id + 1}`}
  >
    <IoMdArrowRoundForward />
  </Link>
</div>
</>
    );
}

export default Details;