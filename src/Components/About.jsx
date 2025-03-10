import React from 'react';

const Task = () => {
  return (
    <div id="about" className="flex justify-center items-center min-h-[300px] md:min-h-[250px] 
     bg-gray-100 px-5 py-8">
      
      {/* Main Container */}
      <div className="bg-black text-white p-6 rounded-xl flex flex-col md:flex-row 
       max-w-5xl shadow-lg w-full">
        
        {/* Left Text Section */}
        <div className="flex-1 md:pr-5 border-b md:border-b-0 md:border-r border-gray-600 pb-4 md:pb-0">
          <p className="text-lg font-light leading-relaxed text-center md:text-left">
            Organize your daily tasks efficiently with our simple yet powerful To-Do List.  
            Stay on top of your priorities by seamlessly adding, managing, and completing tasks.  
            <span className="text-orange-500 font-semibold">
              {" "}Boost your productivity by keeping track of what matters most
            </span>, all in one convenient place.
          </p>
        </div>

        {/* Right Logo Section */}
        <div className="flex-1 flex flex-col items-center justify-center pt-4 md:pt-0 md:pl-5">
          <h1 className="text-3xl font-bold text-white uppercase leading-tight text-center">
            The <br className="hidden md:block" /> Ultimate <br className="hidden md:block" /> To-Do List
          </h1>
          <p className="text-orange-500 text-xs uppercase tracking-widest mt-3 text-center">
            Plan • Organize • Achieve
          </p>
        </div>

      </div>
    </div>
  );
};

export default Task;
