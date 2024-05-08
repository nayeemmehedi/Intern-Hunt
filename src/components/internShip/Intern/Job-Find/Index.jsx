import React, { useState } from 'react';
import SpecificJob from '../SpecificJob/Index';
import { Pagination } from 'antd';
import { useQuery } from '@tanstack/react-query';
import {totalJob} from "../../../../api/intern/"

const JobFind = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, error ,isError } = useQuery({
    queryKey: ['totalJob', page],
    queryFn: () => totalJob({ page }),
    enabled: true, // or remove this line
  });
console.log("data", data);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  if (isLoading ) {
    return <div className="h-96">Loading...</div>;
  }

  return (
    <div>
      {/* <div>
        <small>Type Job Name</small>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Searching..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {data?.data?.value.map((value) => (
          <SpecificJob key={value._id} valuename={value}></SpecificJob>
        ))}
      </div>
      <div className="text-center my-4">
        <Pagination
          current={data?.data?.currentPage}
          total={data?.data?.totalDocs}
          pageSize={data?.data?.limit}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default JobFind;