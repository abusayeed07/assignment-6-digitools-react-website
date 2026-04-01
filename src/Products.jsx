import { use, Suspense } from "react";
import ProductCards from "./components/ProductCards";

const Products = ({ productsPromise, cart, setCart }) => {
  const products = use(productsPromise);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCards 
              key={product.id} 
              product={product} 
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;