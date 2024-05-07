import { create } from "zustand";
import { CompanyInfoSignUp } from "../../api/Auth";
import {  QueryClient } from "@tanstack/react-query";


export const useCompanyInfoStore = create((set) => ({
  companyInfo: null, // Initial state
  
  fetchCompanyInfo: async () => {
    try {
      const data = await CompanyInfoSignUp(); // Call the API function
      set({ companyInfo: data }); // Update state with the received data
    } catch (error) {
      console.error("Error fetching company info:", error);
      // Optionally handle error or set an error state
    }
  },
}));
