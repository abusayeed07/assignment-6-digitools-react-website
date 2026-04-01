import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HowItWorks from './components/GetStartedSteps'
import PricingPlans from './components/PricingPlans'
import TransformWorkflow from './components/TransformWorkflow'
import Footer from './components/Footer'
import Products from './Products'
import Cart from './components/Cart'
import { useState, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getProducts = async() => {
  try {
    const res = await fetch("/products.json")
    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([])

  const handleCartClick = () => {
    setActiveTab("cart");
  };

  return (
    <>
      <Navbar cartCount={cart.length} onCartClick={handleCartClick} />
      
      {activeTab === "products" ? (
        <>
          <Banner />
          
          <div className='text-center py-12 px-4'>
            <h2 className='text-4xl md:text-5xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent mb-4'>
              Premium Digital Tools
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
          </div>

          <div className="tabs tabs-box justify-center bg-transparent mb-8">
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full w-40 transition-all duration-300 cursor-pointer ${
                activeTab === "products" 
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label="Products"
              onClick={() => setActiveTab("products")}
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab rounded-full w-40 transition-all duration-300 cursor-pointer ${
                activeTab === "cart" 
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              aria-label={`Cart (${cart.length})`}
              onClick={() => setActiveTab("cart")}
            />
          </div>

          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4F39F6] mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading products...</p>
              </div>
            </div>
          }>
            <Products productsPromise={productsPromise} cart={cart} setCart={setCart} />
          </Suspense>
          
          <HowItWorks />
          <PricingPlans />
          <TransformWorkflow />
          <Footer />
        </>
      ) : (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Shopping Cart
                </h1>
                <button
                  onClick={() => setActiveTab("products")}
                  className="btn rounded-4xl text-[#4F39F6] hover:text-[#9514FA] font-semibold"
                >
                  ← Continue Shopping
                </button>
              </div>
            </div>
          </div>
          <Cart cart={cart} setCart={setCart} />
        </div>
      )}
      
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App