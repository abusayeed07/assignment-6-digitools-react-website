import BannerImage from "../assets/banner.png";
import playButton from "../assets/Play.png"

const Banner = () => {
  return (
   <>
    <div className="relative min-h-162.5 flex items-center overflow-hidden mb-15">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-red-500/30 text-[#9514FA] border-none text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-5xl font-bold leading-tight tracking-tighter">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="text-lg text-gray-500 max-w-lg">
            Experience the full spectrum of frontier intelligence — all the most
            advanced AI models, unified under a single, powerful subscription.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn px-5 py-8 rounded-full font-bold text-xl shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Explore Products</button>
            <button className="btn btn-outline btn-primary border border-[#4F39F6] px-5 py-8 rounded-full text-2xl"><span><img src={playButton}/></span>  Watch Demo</button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>

{/* second banner  */}
   <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
  <div className="max-w-[1200px]  mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-[200px]">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">50K+</h2>
        <p className="text-white/80 mt-2">Active Users</p>
      </div>
      
      <div className="divider md:divider-horizontal text-white/30 before:bg-white/30 after:bg-white/30"></div>
      
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">200+</h2>
        <p className="text-white/80 mt-2">Premium Tools</p>
      </div>
      
      <div className="divider md:divider-horizontal text-white/30 before:bg-white/30 after:bg-white/30"></div>
      
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">4.9</h2>
        <p className="text-white/80 mt-2">Rating</p>
      </div>
    </div>
  </div>
</div>
   </>
  );
};

export default Banner;