import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";

const List = () => {

  const token = localStorage.getItem("token");
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/product/list", {
        headers: {
          token,
        },
      });
      console.log(response.data); // for debugging
      setProductData(response.data.products); // ✅ fixed key
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }else{
      navigate("/login");
    }
  }, [token]);

  const handleDelete = async (id) => {

    try {
      await axios.get("http://localhost:4000/api/product/remove", {
        headers: { token },
        params: { id },
      });
      fetchData();
    }
    catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Items List</h2>
      <table className="min-w-full border border-gray-300 text-center ">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">image</th>
            <th className="border px-4 py-2">Delete</th>


          </tr>
        </thead>
        <tbody>
          {productData.length > 0 ? (
            productData.map((product) => (
              <tr key={product._id}>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2"><img src={product.image[0]} className='w-48 h-48' /></td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleDelete(product._id)} className='px-3 py-2 bg-red-700 text-white'>Remove</button>
                </td>


              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
