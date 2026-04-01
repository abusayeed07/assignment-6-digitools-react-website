import { Trash } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCart([]);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = cart.filter((c) => c.id !== item.id);
    setCart(filteredArray);
    toast.success("Item deleted!");
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div>
        hello
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-2xl p-5">Cart is empty</p>
      ) : (
        <div className="border border-gray-200 rounded-2xl bg-white shadow-md overflow-hidden">
          {/* Products Container */}
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon/Image */}
                    <div className="h-20 w-20 bg-gray-100 flex items-center justify-center rounded-2xl">
                      {item.icon ? (
                        typeof item.icon === 'string' ? (
                          <div className="text-4xl">{item.icon}</div>
                        ) : (
                          <div className="text-3xl">{item.icon}</div>
                        )
                      ) : (
                        <div className="text-3xl">📦</div>
                      )}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{item.name || item.title}</h2>
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      )}
                      <div className="text-lg font-bold text-[#4F39F6] mt-2">
                        ${item.price}/month
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item)}
                    className="btn p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Checkout Section */}
          <div className="border-t border-gray-200 bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">Total</span>
              <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePayment}
              className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-red-600 text-white font-semibold py-6 px-4 rounded-4xl transition-colors text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;