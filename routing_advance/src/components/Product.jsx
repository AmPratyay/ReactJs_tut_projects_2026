import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="bg-cyan-800 min-h-screen">
      <div className="flex justify-center gap-10 py-10">
        <Link
          className="text-xl font-bold text-white"
          to="/product/men"
        >
          Men
        </Link>

        <Link
          className="text-xl font-bold text-white"
          to="/product/women"
        >
          Women
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;