import React from "react";
import { Button, Form, Input, Upload } from "antd";
import { InboxOutlined, FrownOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { applyForm } from "../../../api/intern";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const { Dragger } = Upload;

const ApplyForm = () => {
  let { id } = useParams();
  const [form] = Form.useForm();
  const { mutate, isLoading, isSuccess, isError, error, isPending } = useMutation({ mutationFn: applyForm });


   const email = localStorage.getItem("email")

  const onFinish = (values) => {
    // Handle form data

    const formData = new FormData();
    formData.append("jobPost_id", id);
    formData.append("candidate_name", values.candidate_name);
    formData.append("candidate_email", email);
    formData.append("github", values.github);
    formData.append("linkedIn", values.linkedIn);
    formData.append("pdfFile", values.pdfFile[0].originFileObj);

    mutate(formData, {
      onSuccess: (response) => {
        // Additional success handling if needed
      },
      onError: (error) => {
        console.error("Error uploading file:", error);
        // Additional error handling if needed
      },
    });

    // You can perform additional actions here, such as sending the data to a server
    // using an API call or storing it in a database.
  };

  const renderFeedbackIcon = (props) => {
    const { status } = props;
    const iconStyle = { color: status === "error" ? "#ff4d4f" : "#52c41a" };
    switch (status) {
      case "success":
        return null;
      case "error":
        return <FrownOutlined style={iconStyle} />;
      default:
        return null;
    }
  };

  const handleFileChange = ({ fileList }) => {
    if (fileList.length > 1) {
      // If more than one file is selected, keep only the latest file
      form.setFields([{ name: "pdfFile", value: fileList.slice(-1) }]);
    } else {
      form.setFields([{ name: "pdfFile", value: fileList }]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    form.validateFields().then((values) => {
      onFinish(values);
    });
  };

  if (isSuccess) {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  return (
    <div className="bg-dark text-white">
      <div>
        <img
          className="object-cover h-72 w-full"
          src="../../../public/image/Student.jpg"
          alt=""
        />
      </div>
      <div className=" w-[100%] px-4  lg:w-[45%] lg:mx-auto py-10 ">
        <Form
          form={form}
          layout="vertical"
          name="register"
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
          onFinish={onFinish}
          onSubmit={handleSubmit}
        >
          <Form.Item
            name="candidate_name"
            label="Full Name"
            className="ant-label"
            hasFeedback
            iconRender={renderFeedbackIcon}
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item
            name="candidate_email"
            label="E-mail"
            className="ant-label"
            hasFeedback
            iconRender={renderFeedbackIcon}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            name="github"
            label="GitHub Link"
            className="ant-label"
            hasFeedback
            iconRender={renderFeedbackIcon}
            rules={[
              {
                pattern: /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_.-]+\/?$/,
                message: "Please enter a valid GitHub link",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="linkedIn"
            label="LinkedIn Link"
            className="ant-label"
            hasFeedback
            iconRender={renderFeedbackIcon}
            rules={[
              {
                required: true,
                message: "Please enter a valid LinkedIn link !",
                pattern:
                  /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="pdfFile"
            label="Upload Your CV (pdf)"
            valuePropName="fileList"
            getValueFromEvent={handleFileChange}
            rules={[
              {
                required: true,
                message: "PDF file is required",
              },
            ]}
          >
            <Dragger
              className=""
              accept="application/pdf"
              onChange={handleFileChange}
              maxCount={1}
            >
              <p className="ant-upload-drag-icon text-white ">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text text-white">
                Click or drag PDF file
              </p>
              <p className="ant-upload-hint text-white">
                Only PDF files are allowed
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button
              className="bg-amber-950 text-white hover:bg-red-400 hover:text-white focus:bg-red-300 focus:text-slate-50 px-5 "
              type="primary"
              htmlType="submit"
              disabled={isLoading || isPending}
            >
              {isLoading || isPending ? (
                <div className="flex items-center justify-center">
                  <ClipLoader className="mr-2" color="white" size={20} />
                  <span className="text-white">Loading ..</span>
                </div>
              ) : (
                "Apply"
              )}
            </Button>
          </Form.Item>
        </Form>

        <div>
          {isSuccess && (
            <p className="text-green-800 font-light text-2xl py-3">
              Successfully Applied
            </p>
          )}

          {isError && (
            <p className="text-red-600 font-light">{error.message}</p>
          )}
        </div>
      </div>
      {/* <a href="https://res.cloudinary.com/dgurwyvxj/image/upload/v1714245660/internHunt/pdfFile-1714245653704-4Resume_Nayeem_Mehedi_Latest-24.pdf" alt="Page 1" >Link </a> */}
    </div>
  );
};

export default ApplyForm;
