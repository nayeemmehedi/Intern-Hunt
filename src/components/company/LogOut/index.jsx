import React from "react";
import { logOut } from "../../../api/intern";
import { FiLogOut } from "react-icons/fi";

function LogOut() {
  const handleLogout = () => {
    logOut()
      .then((response) => {
        
          // Clear localStorage
          localStorage.clear();
          // Redirect to login page
          window.location.href = "/login";
        
      })
      .catch((error) => {
         // Clear localStorage
         localStorage.clear();
         // Redirect to login page
         window.location.href = "/login";
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <FiLogOut className="text-4xl text-blue-500" />
          <h1 className="text-2xl font-bold ml-3">Log Out</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out from your account?
        </p>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Log Out
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogOut;