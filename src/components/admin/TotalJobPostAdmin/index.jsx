import { totalJob } from "../../../api/intern";
import { useCustomMutation, useCustomQuery } from "../../../common/React-query";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { deleteJobPost } from "../../../api/Company";

const ListItem = [
  "Company Name",
  "Job Title",
  "Sallery",
  "Vacancies",
  "Delete",
];

export default function TotalJobPostAdmin() {
  const {
    data,
    isLoading: isLoadings,
    isPending: isPendings,
  } = useCustomQuery({
    queryKey: ["totalJob"],
    queryFn: totalJob,
  });

  const { mutateAsync, isLoading, isPending } = useCustomMutation({
    mutationFn: deleteJobPost,
    invalidateQueryKey: "totalJob",
  });


  // totalJob

  const deleleItem = async (itemId) => {
    const value = await mutateAsync(itemId);
  };

  if (isLoadings || isPendings || isLoading || isPending) {
    <div className="text-center">Loading..</div>;
  }

  return (
    <div className="w-[90%] mx-auto ">
      <div className="flex justify-end">
        <div className="mt-7 lg:mt-0"></div>

        <div className="mt-10 ms-3 lg:mt-3"></div>
      </div>

      <div className="my-8">
        {/* <SearchBar onSearch={handleSearch}></SearchBar> */}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {ListItem.map((v, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.data?.value?.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.company_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.job_title}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {" "}
                  {item.money}{" "}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.vacancies}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Button onClick={() => deleleItem(item._id)}>
                    <MdDeleteSweep className="text-lg text-red-500"></MdDeleteSweep>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
