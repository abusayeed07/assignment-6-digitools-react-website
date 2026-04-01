import { IoCartOutline } from 'react-icons/io5';
import { Menu } from 'lucide-react';

const NavBar = ({ cartCount = 0, onCartClick }) => {
  return (
    <div className='sticky top-0 z-50 bg-base-100 shadow-sm'>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle sm:hidden">
              <Menu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-1 font-bold text-3xl">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </span>
          </div>
        </div>
        
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-5">
          {/* Cart Button with Badge */}
          <div className="relative">
            <button onClick={onCartClick} className='btn btn-circle text-2xl text-red-500'>
              <IoCartOutline />
            </button>
            {/* Notification Badge - shows only when cart has items */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>
          <button className='btn rounded-full'>Login</button>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;