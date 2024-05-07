// import React, { useState } from 'react';
// import { Form, Input, Button, Upload } from 'antd';
// import { InboxOutlined } from '@ant-design/icons';

// const { Dragger } = Upload;

// const ApplyForm = () => {
//   const [form] = Form.useForm();
//   const [fileList, setFileList] = useState([]);

//   const onFinish = (values) => {
//   };

//   const handleFileChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const validateEmail = (_, value) => {
//     const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     if (!value || emailRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error('Please enter a valid email address'));
//   };

//   const validatePhoneNumber = (_, value) => {
//     const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
//     if (!value || phoneRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error('Please enter a valid Bangladeshi phone number'));
//   };

//   const validateURL = (_, value) => {
//     const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
//     if (!value || urlRegex.test(value)) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error('Please enter a valid URL'));
//   };

//   const validateFileType = (_, value) => {
//     const isPDF = value.file.type === 'application/pdf';
//     if (isPDF) {
//       return Promise.resolve();
//     }
//     return Promise.reject(new Error('Only PDF files are allowed'));
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
//         <Form
//           form={form}
//           name="personal-info"
//           onFinish={onFinish}
//           layout="vertical"
//         >
//           <Form.Item
//             name="fullName"
//             label="Full Name"
//             rules={[{ required: true, message: 'Please input your full name' }]}
//           >
//             <Input placeholder="Enter your full name" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               { required: true, message: 'Please input your email' },
//               { validator: validateEmail },
//             ]}
//           >
//             <Input placeholder="Enter your email" />
//           </Form.Item>

//           <Form.Item
//             name="phoneNumber"
//             label="Phone Number (BD)"
//             rules={[
//               { required: true, message: 'Please input your phone number' },
//               { validator: validatePhoneNumber },
//             ]}
//           >
//             <Input placeholder="Enter your phone number" />
//           </Form.Item>

//           <Form.Item
//             name="githubLink"
//             label="GitHub Link"
//             rules={[
//               { required: true, message: 'Please input your GitHub link' },
//               { validator: validateURL },
//             ]}
//           >
//             <Input placeholder="Enter your GitHub link" />
//           </Form.Item>

//           <Form.Item
//             name="cv"
//             label="CV (PDF)"
//             rules={[
//               { required: true, message: 'Please upload your CV' },
//               { validator: validateFileType, type: 'pdf' },
//             ]}
//           >
//             <Dragger
//               fileList={fileList}
//               onChange={handleFileChange}
//               beforeUpload={() => false}
//             >
//               <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//               </p>
//               <p className="ant-upload-text">
//                 Click or drag file to this area to upload
//               </p>
//               <p className="ant-upload-hint">
//                 Supported file type: PDF
//               </p>
//             </Dragger>
//           </Form.Item>

//           <Form.Item
//             name="linkedinLink"
//             label="LinkedIn Link"
//             rules={[
//               { required: true, message: 'Please input your LinkedIn link' },
//               { validator: validateURL },
//             ]}
//           >
//             <Input placeholder="Enter your LinkedIn link" />
//           </Form.Item>

//           <div className="flex justify-end">
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ApplyForm;


// and d input icon modify 

import React from 'react';
import { Form, Input } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';

const MyForm = () => {
  const onFinish = (values) => {
  };

  const renderFeedbackIcon = (props) => {
    const { status } = props;
    const iconStyle = { color: status === 'error' ? '#ff4d4f' : '#52c41a' };

    switch (status) {
      case 'success':
        return null;
      case 'error':
        return <FrownOutlined style={iconStyle} />;
      default:
        return null;
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email address',
          },
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
        hasFeedback
        validateStatus={['success', 'error']}
        feedbackIcon={renderFeedbackIcon}
      >
        <Input />
      </Form.Item>

      {/* Other form fields */}
    </Form>
  );
};

export default MyForm;