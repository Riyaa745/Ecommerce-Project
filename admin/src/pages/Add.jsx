import React, { useEffect, useState, useSyncExternalStore } from "react";
import { assets } from "../assets/admin_assets/assets";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [best, setBest] = useState(false);
  const printing = async (e) => {
    e.preventDefault();

    console.log(sizes);
    console.log(title);
    console.log(des);
    console.log(best);
    console.log(image1);
    console.log(price);
    console.log(category);
    console.log(subcategory);

    const formData = new FormData();

    formData.append("sizes", JSON.stringify(sizes));
    formData.append("title", title);
    formData.append("des", des);
    formData.append("best", best);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subcategory", subcategory);

    image1 && formData.append("image1", image1);
    image2 && formData.append("image2", image2);
    image3 && formData.append("image3", image3);
    image4 && formData.append("image4", image4);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/product/add",
        formData,
        {
          headers: {
            token,
          },
        }
      );
      toast.success("Product added successfully!");
      console.log(response);
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      console.log("error ", error);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add New Product
      </h2>
      <form onSubmit={printing} className="flex flex-col gap-6">
        {/* Upload Images */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Upload Images
          </label>
          <div className="flex flex-wrap gap-4">
            <div className="w-24 h-24 border border-dashed border-gray-400 rounded-md overflow-hidden">
              <label htmlFor="img1">
                <img
                  src={
                    image1 ? URL.createObjectURL(image1) : assets.upload_area
                  }
                  alt="Upload"
                  className="w-full h-full object-cover cursor-pointer"
                />.

              </label>
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                className="hidden"
                id="img1"
              />
            </div>
            <div className="w-24 h-24 border border-dashed border-gray-400 rounded-md overflow-hidden">
              <label htmlFor="img2">
                <img
                  src={image2 || assets.upload_area}
                  alt="Upload"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </label>
              <input
                type="file"
                className="hidden"
                id="img2"
                onChange={(e) =>
                  setImage2(URL.createObjectURL(e.target.files[0]))
                }
              />
            </div>
            <div className="w-24 h-24 border border-dashed border-gray-400 rounded-md overflow-hidden">
              <label htmlFor="img3">
                <img
                  src={image3 || assets.upload_area}
                  alt="Upload"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </label>
              <input
                type="file"
                className="hidden"
                id="img3"
                onChange={(e) => {
                  setImage3(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
            <div className="w-24 h-24 border border-dashed border-gray-400 rounded-md overflow-hidden">
              <label htmlFor="img4">
                <img
                  src={image4 || assets.upload_area}
                  alt="Upload"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </label>
              <input
                type="file"
                className="hidden"
                id="img4"
                onChange={(e) => {
                  setImage4(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
          </div>
        </div>

        {/* Product Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Product Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter product title"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Product Description
          </label>
          <textarea
            onChange={(e) => setDes(e.target.value)}
            className="w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Enter product description"
          />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select--</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Sub Category
            </label>
            <select
              onChange={(e) => setSubcategory(e.target.value)}
              className="border border-gray-300 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select--</option>
              <option value="top">Top</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="winterwear">Winterwear</option>
            </select>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Available Sizes
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2">
              <input
                onChange={(e) =>
                  !e.target.checked
                    ? setSizes((prev) => prev.filter((sizes) => sizes !== "XS"))
                    : setSizes((pre) => [...pre, "XS"])
                }
                type="checkbox"
                value="XS"
                className="form-checkbox text-blue-600"
              />
              <span>XS</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                onChange={(e) =>
                  !e.target.checked
                    ? setSizes((prev) => prev.filter((sizes) => sizes !== "S"))
                    : setSizes((pre) => [...pre, "S"])
                }
                type="checkbox"
                value="S"
                className="form-checkbox text-blue-600"
              />
              <span>S</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  !e.target.checked
                    ? setSizes((prev) => prev.filter((sizes) => sizes !== "M"))
                    : setSizes((pre) => [...pre, "M"])
                }
                value="M"
                className="form-checkbox text-blue-600"
              />
              <span>M</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  !e.target.checked
                    ? setSizes((prev) => prev.filter((sizes) => sizes !== "L"))
                    : setSizes((pre) => [...pre, "L"])
                }
                value="L"
                className="form-checkbox text-blue-600"
              />
              <span>L</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  !e.target.checked
                    ? setSizes((prev) => prev.filter((sizes) => sizes !== "XL"))
                    : setSizes((pre) => [...pre, "XL"])
                }
                value="XL"
                className="form-checkbox text-blue-600"
              />
              <span>XL</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) =>
                  !e.target.checked
                    ? setSizes((prev) =>
                      prev.filter((sizes) => sizes !== "XXL")
                    )
                    : setSizes((pre) => [...pre, "XXL"])
                }
                value="XXL"
                className="form-checkbox text-blue-600"
              />
              <span>XXL</span>
            </label>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Enter price"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Best Seller Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            onChange={() => setBest(!best)}
            checked={best}
            type="checkbox"
            className="form-checkbox text-blue-600"
          />
          <label className="text-gray-700">Add to BestSeller</label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200"
          >
            Submit Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;