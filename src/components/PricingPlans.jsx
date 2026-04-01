import { Check } from 'lucide-react';

const PricingPlans = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-m text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter Plan */}
          <div className="relative rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
                      
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Access to 10 free tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Basic templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Community support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">1 project per month</span>
                </div>
              </div>
              <button className="btn w-full py-7 font-semibold mb-8 border-2 mt-[80px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-xl auto-rows-fr">
                Get Started Free
              </button>
            </div>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="relative rounded-2xl border border-purple-500 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg transition-all duration-300 hover:shadow-xl scale-105 md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#FEF3C6] to-pink-500 text-[#BB4D00] px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="mb-6">Best for professionals</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span>/Month</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span >Access to all premium tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Unlimited templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Unlimited projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Cloud sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Advanced analytics</span>
                </div>
              </div>
              <button className="btn mt-5 w-full py-6 rounded-full font-semibold text-xl text-[#9514FA] auto-rows-fr">
                Start Pro Trial
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For teams and businesses</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-gray-500">/Month</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Everything in Pro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Team collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Custom integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Dedicated support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">SLA guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-600">Custom branding</span>
                </div>
              </div>
            <button className="btn w-full  py-7 mt-5 rounded-full font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;