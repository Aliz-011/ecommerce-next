import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-4 gap-5">
      <div className="col-span-2">
        <div className="w-full h-96 rounded-md bg-blue-500"></div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-5">
        <div className="w-full h-auto rounded-md bg-yellow-500"></div>
        <div className="w-full h-auto rounded-md bg-red-500"></div>
        <div className="w-full h-auto rounded-md bg-red-500"></div>
        <div className="w-full h-auto rounded-md bg-yellow-500"></div>
      </div>
    </section>
  );
};

export default Hero;
