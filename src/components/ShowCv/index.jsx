import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ShowCv = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an asynchronous API call
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            const fetchedData = [
              {
                id: 1,
                position: "Web Developer",
                salary: 80000,
                vacancies: 3,
                deadline: "2023-06-30",
              },
              {
                id: 2,
                position: "C# Developer",
                salary: 90000,
                vacancies: 2,
                deadline: "2023-07-15",
              },
              {
                id: 3,
                position: "Front-end Engineer",
                salary: 75000,
                vacancies: 1,
                deadline: "2023-06-20",
              },
            ];
            resolve(fetchedData);
          }, 1000)
        );

        // Sort data based on the deadline and sortOrder
        const sortedData = response.sort((a, b) => {
          if (sortOrder === "desc") {
            return new Date(b.deadline) - new Date(a.deadline);
          } else {
            return new Date(a.deadline) - new Date(b.deadline);
          }
        });

        setData(sortedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sortOrder]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const [values, setValues] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleAddValue = () => {
    if (selectedValue) {
      setValues(selectedValue);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">

        <div className="">
            <p className="font-bold text-2xl text-black">Select Which position Job candidate You want to see : </p>
        </div>


      <div className="flex items-center ">
        <select
          value={selectedValue}
          onChange={handleChange}
          className="w-1/2 mr-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Value Type</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="sex">Sex</option>
        </select>
        <button
          onClick={handleAddValue}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Value
        </button>
      </div>
      <ul className="mt-4">
        <li className="py-2 border-b border-gray-200">{values}</li>
      </ul>

      <div>
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
                    onClick={toggleSortOrder}
                  >
                    Deadline
                    {sortOrder === "desc" ? (
                      <FaArrowDown className="ml-2" />
                    ) : (
                      <FaArrowUp className="ml-2" />
                    )}
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
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.salary.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.vacancies}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.deadline}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(item.id)}
                      >
                            Select
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className=" bg-slate-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCv;
