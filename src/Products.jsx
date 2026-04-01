import { Check } from 'lucide-react';
import React from 'react';

const Products = ({ productsPromise }) => {
  const products = React.use(productsPromise);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Card Content */}
              <div className="relative p-6 flex-1">
                {product.tag && (
                  <div className="absolute top-3 right-3 z-10 text-[#4F39F6] bg-[#E1E7FF] py-2 px-4 rounded-4xl">
                    {product.tag}
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-3xl shadow-inner">
                    {product.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>/
                    <span className="text-sm font-medium text-gray-500 ml-1">{product.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-1.5">
                  {(Array.isArray(product.features) ? product.features : [product.features]).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="px-6 pb-6 pt-2">
                <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-3 px-4 shadow-sm rounded-4xl">
                  Get Started
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;