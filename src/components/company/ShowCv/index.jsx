import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteJobPost, jobList } from "../../../api/Company";
import { Button, Form, Input, Upload } from "antd";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

// https://www.youtube.com/watch?v=eiC58R16hb8

const ShowCv = () => {
  const [idCheck, setidCheck] = useState("");

  const queryClient = useQueryClient();

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["todos"],
    queryFn: jobList,
  });

  const {
    mutate,
    isLoading: isLoadings,
    isPending: isPendings,
  } = useMutation({
    mutationFn: (itemId) => deleteJobPost(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleDelete = (itemId) => {
    setidCheck(itemId);
    if (itemId) {
      mutate(itemId);
    } else {
      console.error("Invalid item ID");
    }
  };

  return (
    // <div>dd</div>
    <div className="overflow-x-auto p-5">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Job Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center cursor-pointer"
                // onClick={toggleSortOrder}
              >
                Deadline
                {/* {sortOrder === 'desc' ? <FaArrowDown className="ml-2" /> : <FaArrowUp className="ml-2" />}  */}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Applied Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Go To See Cndidate Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.data?.value?.JobPost?.map((item) => (
              <tr key={item?._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item?.job_title ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item?.deadtime ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="text-red-500 text-center">{item?.candidate_info.length ?? "N/A"}</span>
                </td> 

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/company/showCv/${item._id}`}>
                    <button
                      className="bg-blue-800 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                      // onClick={() => handleDelete(item?._id)}
                    >
                      Click to See Applied
                    </button>
                  </Link>
                </td>
              </tr>
            )) ?? null}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowCv;
