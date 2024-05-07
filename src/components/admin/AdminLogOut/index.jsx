import React from "react";
import { logOut } from "../../../api/intern";
import { FiLogOut, FiUserCheck } from "react-icons/fi";

function AdminLogOut() {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <FiUserCheck className="text-4xl text-indigo-600" />
          <h1 className="text-2xl font-bold ml-3 text-gray-800">Admin Log Out</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out from your admin account?
        </p>
        <div className="flex justify-between">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            onClick={handleLogout}
          >
            <FiLogOut className="inline-block mr-2" /> Log Out
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogOut;