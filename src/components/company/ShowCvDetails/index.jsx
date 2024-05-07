import React from "react";
import { Link, useParams } from "react-router-dom";
import { showcvDetails } from "../../../api/Company";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Document, Page, pdfjs } from "react-pdf";
import { FaFilePdf } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// import {ShowCvDetails} from "../../../api/Company.jsx"

function ShowCvDetails() {
  let { id } = useParams();
  const { isLoading, isSuccess, data, error, isPending } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => showcvDetails(id),
  });
  if (isLoading || isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
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
                  Candidate Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center cursor-pointer"
                  // onClick={toggleSortOrder}
                >
                  Email
                  {/* {sortOrder === 'desc' ? <FaArrowDown className="ml-2" /> : <FaArrowUp className="ml-2" />}  */}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                   GitHub Link
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Pdf
                </th>
                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Confirm/Delete
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data &&
                data?.data?.value?.candidate_info?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item?.candidate_name ?? "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                      {item?.candidate_email ?? "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate ">
                     <a className="text-gray-700" href={item?.github}>
                     {item?.github
                        ? `${item.github.substring(0, 20)}...`
                        : "N/A"}
                     </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={item?.candidate_cv}>
                        <FaFilePdf className="text-red-400 text-3xl" />
                      </a>
                      {/* <Document file={item?.candidate_cv}>
                        <Page pageNumber={1} />
                      </Document> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>
                        <button className="border-1 border-red-400 p-1 rounded-sm hover:bg-slate-500 hover:text-white">Confirm</button>
                        <button className="border-1 border-red-400 p-1 ms-1 rounded-sm hover:bg-slate-500 hover:text-white">Delete</button>

                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ShowCvDetails;
