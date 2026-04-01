
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HowItWorks from './components/GetStartedSteps'
import PricingPlans from './components/PricingPlans'
import TransformWorkflow from './components/TransformWorkflow'
import Footer from './components/Footer'
import Products from './Products'

const getProducts = async() => {
  const res = await fetch("/products.json")
  return res.json()
}

const productsPromise = getProducts()

function App() {

  return (
    <>
     
     <Navbar />
     <Banner />
     <Products productsPromise={productsPromise} />
     <HowItWorks />
     <PricingPlans />
     <TransformWorkflow />
     <Footer />
    </>
  )
}

export default App
