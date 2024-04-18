import React from "react";
import { Button, Form, Input, Upload } from "antd";
import { InboxOutlined, FrownOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const ApplyForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    event.preventDefault();
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
    if (fileList.length === 0) {
      form.setFields([{ name: 'pdfFile' }]);
    } else {
      form.setFields([{ name: 'pdfFile' }]);
    }
  };

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

        onFinish={onFinish}
        initialValues={{ residence: ["zhejiang", "hangzhou", "xihu"], prefix: "86" }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Full Name"
          className="ant-label"
          hasFeedback
          feedbackIcon={renderFeedbackIcon}
          rules={[
           
            {
              required: true,
              message: "Please input your Full Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          className="ant-label"
          hasFeedback
          feedbackIcon={renderFeedbackIcon}
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
        </Form.Item>
        
        <Form.Item
          name="github"
          label="GitHub Link"
          className="ant-label"
          rules={[
            {
              pattern: /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9_.-]+\/?$/,
              message: "Please enter a valid GitHub link",
              required:true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="linkedIn"
          label="LinkedIn Link"
          className="ant-label"
          rules={[
            {
              required: true,
              message: "Please enter a valid LinkedIn link !",
              pattern: /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
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
          <Dragger className="" accept="application/pdf" onChange={handleFileChange}>
            <p className="ant-upload-drag-icon text-white ">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text text-white">Click or drag PDF file</p>
            <p className="ant-upload-hint text-white">Only PDF files are allowed</p>
          </Dragger>
        </Form.Item>
        <Form.Item>
          <Button
            className="bg-amber-950 text-white hover:bg-red-400 hover:text-white focus:bg-red-300 focus:text-slate-50 px-5 "
            type="primary"
            htmlType="submit"
          >
            Apply
          </Button>
        </Form.Item>
      </Form>
     </div>
    </div>
  );
};

export default ApplyForm;