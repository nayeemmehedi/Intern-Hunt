import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-blue-800 border-t-4 border-t-white animate-spin"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-800 animate-bounce"></div>
          </div>
        </div>
        <p className="mt-4 text-lg text-white animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;