import React, { useState } from "react";

const ProductsDescriptions = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="my-20 py-20 bg-[#F9F8FE]">
      <div className="max-w-[84%] mx-auto">
        {/* Tab List */}
        <div className="flex mb-6 ml-6 space-x-4">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 rounded-lg ${
              activeTab === "description"
                ? "bg-purple-800 text-white"
                : "bg-white text-slate-600 border border-[#3F509E]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 rounded-lg ${
              activeTab === "reviews"
                ? "bg-purple-800 text-white"
                : "bg-white text-blue-900 border border-[#3F509E]"
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`py-2 px-4 rounded-lg ${
              activeTab === "details"
                ? "bg-purple-800 text-white"
                : "bg-white text-slate-700 border border-[#3F509E]"
            }`}
          >
            Details
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full flex flex-col gap-4">
          {activeTab === "description" && (
            <>
              <span className="text-lg font-bold text-blue-900 underline">Varius tempor.</span>
              <p className="text-sm font-semibold text-gray-900">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                Velit consectetur neque, elit, aliquet. Non varius proin sed
                urna, egestas consequat laoreet diam tincidunt. Magna eget
                faucibus cras justo, tortor sed donec tempus. Imperdiet
                consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
              <span className="underline font-bold text-blue-900">More details</span>
              <ul className="flex flex-col gap-2 text-sm text-pink-600">
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
                <li>
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </li>
              </ul>
            </>
          )}

          {activeTab === "reviews" && (
            <p className="text-sm text-gray-700">
              No reviews yet. Be the first to leave a review for this product!
            </p>
          )}

          {activeTab === "details" && (
            <ul className="list-disc pl-6 text-sm text-slate-800">
              <li>Product Weight: 1.2 kg</li>
              <li>Dimensions: 20 x 10 x 5 cm</li>
              <li>Material: High-quality plastic</li>
              <li>Color Options: Blue, Red, Green</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsDescriptions;
