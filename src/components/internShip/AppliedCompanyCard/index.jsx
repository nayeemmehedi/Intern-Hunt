import React, { useState } from "react";
import { Table, Modal, Form, Input, DatePicker } from "antd";

const AppliedCompanyCard = () => {
  const [applications, setApplications] = useState([
    {
        key: "1",
        name: "John Doe",
        companyEmail: "johndoe@company.com",
        status: "pending",
        appliedDate: "2023-04-10",
        details: "Software Engineer",
      },
    
    // ... rest of the applications data
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Company Email",
      dataIndex: "companyEmail",
      key: "companyEmail",
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
      key: "appliedDate",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h4 className="my-4 font-bold text-center text-lg sm:text-xl md:text-2xl">
        Which Company You applied:
      </h4>

      {applications.length == 0 ? (
        <p className="font-extralight">Apply more </p>
      ) : (
        <div className="overflow-x-auto">
          <Table
            dataSource={applications}
            columns={columns}
            responsive={{
              breakpoint: "sm",
            }}
            className="min-w-full"
          />
        </div>
      )}
    </div>
  );
};

export default AppliedCompanyCard;
