import React from 'react';

const TransformWorkflow = () => {
  return (
    <div className="relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex flex-col items-center text-center space-y-8 max-w-[1200px]">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready To Transform Your Workflow?
          </h1>
          {/* Description */}
          <p className="text-xl md:text-sm max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn btn-outline btn-primary items-center justify-center px-8 py-6 text-lg font-semibold text-[#9514FA] rounded-4xl shadow-lg bg-white">
              Explore Products
            </button>
            <button className="btn items-center justify-center border px-12 py-6 text-lg font-semibold text-white rounded-4xl bg-white/0">
              View Pricing</button>
          </div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default TransformWorkflow;
