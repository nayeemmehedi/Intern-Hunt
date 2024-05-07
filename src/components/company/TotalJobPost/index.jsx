import React, { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteJobPost, jobList } from "../../../api/Company";
import ClipLoader from "react-spinners/ClipLoader";


const TotalJobPost = () => {

   const [idCheck, setidCheck] = useState("")


  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
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
    setidCheck(itemId)
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
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Salary
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Vacancies
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
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.data?.value?.JobPost?.map((item) => (
              <tr key={item?.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item?.job_title ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item?.money ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item?.vacancies ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item?.deadtime ?? "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="bg-blue-800 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(item?._id)}
                    disabled={isLoadings || isPendings}
                  >
                    {((isLoadings || isPendings) && (idCheck == item?._id)) ? (
                      <div className="flex items-center justify-center">
                        <ClipLoader className="mr-2" color="white" size={20} />
                        <span className="text-white">Loading ..</span>
                      </div>
                    ) : (
                      "DELETE"
                    )}
                  </button>
                </td>
              </tr>
            )) ?? null}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TotalJobPost;

{
  /* 
 useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Simulate an asynchronous API call
  //       const response = await new Promise((resolve) =>
  //         setTimeout(() => {
  //           const fetchedData = [
  //             { id: 1, position: 'Web Developer', salary: 80000, vacancies: 3, deadline: '2023-06-30' },
  //             { id: 2, position: 'C# Developer', salary: 90000, vacancies: 2, deadline: '2023-07-15' },
  //             { id: 3, position: 'Front-end Engineer', salary: 75000, vacancies: 1, deadline: '2023-06-20' },
  //           ];
  //           resolve(fetchedData);
  //         }, 1000)
  //       );

  //       // Sort data based on the deadline and sortOrder
  //       const sortedData = response.sort((a, b) => {
  //         if (sortOrder === 'desc') {
  //           return new Date(b.deadline) - new Date(a.deadline);
  //         } else {
  //           return new Date(a.deadline) - new Date(b.deadline);
  //         }
  //       });

  //       setData(sortedData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [sortOrder]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  // }; */
}
