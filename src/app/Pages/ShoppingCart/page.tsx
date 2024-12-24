'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Data Type
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
};

// Data
const initialCartProducts: CartItem[] = [
  {
    id: 1,
    name: "Ut diam consequat",
    price: 32,
    quantity: 2,
    color: "Brown",
    size: "XL",
    image: "/pages-images/cartone.png",
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    price: 32,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/pages-images/carttwo.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    price: 32,
    quantity: 1,
    color: "Brown",
    size: "XL",
    image: "/pages-images/cartthree.png",
  },
  {
    id: 4,
    name: "Elit massa diam",
    price: 32,
    quantity: 2,
    color: "Brown",
    size: "XL",
    image: "/pages-images/cartfour.png",
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    price: 32,
    quantity: 3,
    color: "Brown",
    size: "XL",
    image: "/pages-images/cartfive.png",
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartProducts);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const resetCart = () => {
    setCartItems(initialCartProducts);
  };

  return (
    <>
      <section className="bg-[#F6F5FF] py-8 mt-8">
        <div className="container mx-auto flex flex-col items-center md:items-start justify-center gap-4 px-4 md:px-8">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold text-center md:text-left">
            Shopping Cart
          </h1>
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-center md:text-left">
            <Link href="/" className="hover:text-[#FB2E86]">
              Home
            </Link>
            <span className="text-gray-400">.</span>
            <p>Pages</p>
            <span className="text-gray-400">.</span>
            <p className="text-[#FB2E86]">Shopping Cart</p>
          </div>
        </div>
      </section>

      <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="hidden lg:flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-[#1D3178] w-2/5">Product</h2>
            <h2 className="text-lg font-bold text-[#1D3178] w-1/3 text-center">
              Price
            </h2>
            <h2 className="text-lg font-bold text-[#1D3178] w-1/7 text-center">
              Quantity
            </h2>
            <h2 className="text-lg font-bold text-[#1D3178] w-1/4 text-right">
              Total
            </h2>
          </div>

          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <div className="text-sm text-slate-400">
                        <p>Color: {item.color}</p>
                        <p>Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full sm:w-1/2 mt-4 sm:mt-0">
                    <p className="text-[#1D3178]">${item.price.toFixed(2)}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-12 px-2 py-1 border rounded-md text-center"
                      min="1"
                    />
                    <p className="font-bold text-[#1D3178]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#1D3178] text-center mt-6">
              Your cart is empty. Add some products!
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-between mt-6 gap-4">
            <button
              onClick={resetCart}
              className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-red-600"
            >
              Update Cart
            </button>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>


        {/* Cart Totals Section */}
        <div className="p-4">
          <section className="p-4">
            <h2 className="text-xl font-bold text-center mb-4 text-blue-900">
              Cart Totals
            </h2>
            <div className='bg-slate-200 shadow-md p-10 space-y-4'>
            <p className="flex justify-between text-blue-900 border-b mb-4">
              <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-8 text-blue-900 border-b pb-2">
              <span>Shipping:</span> <span>$15.00</span>
            </p>
            <p className="flex justify-between font-bold text-lg text-blue-900 border-b pb-2 mb-2">
              <span>Total:</span>{" "}
              <span>${(calculateTotal() + 15).toFixed(2)}</span>
            </p>
            <p className="text-center font-bold text-l text-[#8A91AB] mb-2">
              Shipping & taxes calculated at checkout
            </p>
            <div className="text-center">
              <Link href="/checkout">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#19D16F] text-white rounded-md font-semibold hover:bg-green-900"
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
            </div>
          </section>

          {/* Shipping Details Section */}
          <section className="p-4">
            <h2 className="text-xl font-bold text-center mb-4 text-blue-900">
              Shipping Details
            </h2>
            <div className='bg-slate-200 shadow-md p-10 space-y-4'>
            <p className="text-slate-400 font-bold border-b border-slate-400 pb-4">Bangladesh</p>
            <p className="text-slate-400 font-bold border-b border-slate-400 pb-4">Mirpur Dhaka - 1200</p>
            <p className="text-slate-400 font-bold border-b border-slate-400 pb-4">Postal Code</p>
            <div className="text-center mt-4 flex justify-start">
              <Link href="/checkout">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-red-600"
                >
                  Calculate Shipping
                </button>
              </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
