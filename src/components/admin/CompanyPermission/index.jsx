import React, { useEffect, useState } from "react";
import { useCompanyInfoStore } from "../../../state-management/admin/store";
import { companyPermissionChange } from "../../../api/Company";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CompanyInfoSignUp } from "../../../api/Auth";
import { useCustomMutation, useCustomQuery } from "../../../common/React-query";

const CompanyPermission = () => {

  //react query Hook
 
  const { data, isLoading: isLoadings, isPending: isPendings } = useCustomQuery({
    queryKey: ["company"],
    queryFn: CompanyInfoSignUp,
  });

  const { mutateAsync, isLoading, isPending } = useCustomMutation({
    mutationFn: companyPermissionChange,
    invalidateQueryKey: "company",
  });

  

  const togglePending = async (value) => {
    await mutateAsync(value);
  };

  //react query Hook

  if (isLoading || isPending || isLoadings || isPendings) {
    <div className="text-center text-red-900">Loading......</div>;
  }

  return (
    <div className="overflow-x-auto m-7">
      <div>
        <p className="font-bold text-2xl my-4">Company Permission :</p>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Company Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Company Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pending
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.data?.value.map((company, index) => (
            <tr key={company._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {company?.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {company?.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {company?.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className={`${
                    company.pending
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-red-500 hover:bg-red-700"
                  } relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  onClick={() =>
                    togglePending({
                      id: company._id,
                      pending: !company.pending,
                    })
                  }
                >
                  {company.pending ? `True` : "False"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs my-4">
        N.B. Pending False means this company have permission to Access.
        
      </p>
    </div>
  );
};

export default CompanyPermission;
