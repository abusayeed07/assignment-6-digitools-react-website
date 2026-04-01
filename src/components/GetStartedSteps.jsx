import React from 'react';
import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const GetStartedSteps = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center bg-base-200">
      <div className="max-w-7xl mx-auto w-full">
        {/* header area with tagline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Step 1 */}
          <div className="group relative bg-white rounded-3xl w-full  h-[300px] mx-auto p-7 shadow-lg  hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:-translate-y-2">
            <div className="absolute top-5 right-5 z-10">
              <div className=" text-white font-bold text-sm w-9 h-9 flex items-center justify-center rounded-full shadow-md bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                01
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-base-300 shadow group-hover:scale-110 transition-transform duration-300">
              <img src={userImg} alt="" />
            </div>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight">Create Account</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white rounded-3xl w-full  h-[300px] mx-auto p-7 shadow-lg  hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:-translate-y-2">
            <div className="absolute top-5 right-5 z-10">
              <div className="bg-linear-to-r from-[#8B5CF6] to-[#EC489A] text-white font-bold text-sm w-9 h-9 flex items-center justify-center rounded-full shadow-md">
                02
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-base-300 shadow group-hover:scale-110 transition-transform duration-300">
              <img src={packageImg} alt="" />
            </div>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight">Choose Products</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white rounded-3xl w-full  h-[300px] mx-auto p-7 shadow-lg  hover:shadow-xl transition-all duration-300 border border-gray-100/80 hover:-translate-y-2">
            <div className="absolute top-5 right-5 z-10">
              <div className="bg-linear-to-r from-[#F43F5E] to-[#EF4444] text-white font-bold text-sm w-9 h-9 flex items-center justify-center rounded-full shadow-md">
                03
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-base-300 shadow group-hover:scale-110 transition-transform duration-300">
              <img src={rocketImg}/>
            </div>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight">Start Creating</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;