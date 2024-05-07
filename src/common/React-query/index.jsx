// customHooks.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useCustomQuery = (options) => {
    const queryClient = useQueryClient();
  
    return useQuery({
      ...options,
      queryClient,
    });
  };

  export const useCustomMutation = (options) => {
    const queryClient = useQueryClient();
  
    return useMutation({
      ...options,
      queryClient,
      onSuccess: (...args) => {
        if (options.onSuccess) {
          options.onSuccess(...args);
        }
        queryClient.invalidateQueries(options.invalidateQueryKey || "all");
      },
    });
  };