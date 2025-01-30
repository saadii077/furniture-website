"use client";
import { useShipping } from "@/context/ShippingContext";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

function Checkout() {
  const { cartDetails, totalPrice } = useShoppingCart();
  const { shippingCost } = useShipping(); // Get shipping cost

  console.log("cartDetails", cartDetails);
  console.log("Shipping Cost:", shippingCost);

  // Calculate final total (items total + shipping cost)
  const finalTotal = (totalPrice || 0) + (shippingCost || 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {Object.values(cartDetails ?? {}).map((item, i) => (
          <div key={i}>
            <div className="w-full flex md:gap-4 gap-2 mb-4 items-center">
              <div className="w-[70px]">
                <Image src={item?.image || ""} height={1000} width={1000} alt="" />
              </div>
              <div className="flex w-full items-center md:justify-between">
                <div>
                  <h4 className="text-[14px] font-semibold">{item.name}</h4>
                  <h5 className="text-tertiary pt-3">Quantity: {item.quantity}</h5>
                </div>
                <div className="w-[160px] text-right">
                  <h4>${item.price}</h4>
                </div>
              </div>
            </div>
            <div className="border-[1px] mb-4"></div>
          </div>
        ))}

        {/* Shipping Cost */}
        <div className="flex justify-between items-center py-4">
          <h3 className="text-lg font-semibold">Shipping Cost:</h3>
          <span className="text-lg font-bold">${shippingCost.toFixed(2)}</span>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center py-4 border-t">
          <h3 className="text-xl font-semibold">Total:</h3>
          <span className="text-xl font-bold">${finalTotal.toFixed(2)}</span>
        </div>

        {/* Payment Button */}
        <Link href={"/Pages/Ordercomplete"}>
          <button className="w-full bg-blue-600 text-white py-3 mt-4 rounded-md hover:bg-blue-700 transition">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
