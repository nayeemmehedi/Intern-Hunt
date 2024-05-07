import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../api/Auth";
import { useQuery, useMutation } from "@tanstack/react-query";
import LoadingPage from "../../ResponseStatus/LoadingPage.jsx";
import { auth, googleProvider } from "../../firebase/index.jsx";

const { Option } = Select;

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // const { isLoading, data, error } = useQuery('userData', signUp);

  const signUpMutation = useMutation({ mutationFn: signUp });

  const onFinish = async (values) => {
    // event.preventDefault();

    try {
      const value = await signUpMutation.mutateAsync(values);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Passwords do not match!"));
    },
  });

  if (signUpMutation.isLoading) {
    return (
      <>
        <LoadingPage></LoadingPage>
      </>
    );
  }

  // NayeemMehedi#12
  // boyneel79
  // Nayeem@12nayeem
  // nayeem01

  // Nayrrm12$jdjd
  // nayeemehedi@gmail.com

  return (
    // <LoadingPage></LoadingPage>
    <div className="bg-black text-white py-3">
      <div className="text-center py-3">
        <p className="font-extralight text-2xl ">Create an account....</p>
      </div>
      <div className="w-[75%] lg:w-[35%] mx-auto">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onValuesChange={() => forceUpdate({})}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                min: 10,
                message: "Password must be at least 10 characters long",
              },
              {
                pattern: /(?=.*[A-Z])/,
                message: "Password must contain at least one uppercase letter",
              },
              {
                pattern: /(?=.*[!@#$%^&*])/,
                message: "Password must contain at least one special character",
              },
              {
                pattern: /(?=.*[0-9])/,
                message: "Password must contain at least one number",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[
              { required: true, message: "Please confirm your password" },
              validateConfirmPassword,
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select>
              <Option value="intern">Intern</Option>
              <Option value="company">Company</Option>
              {/* <Option value="admin">Admin</Option> */}
            </Select>
          </Form.Item>

          <Form.Item className="flex justify-content-between">
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <div className="text-white ">
            already have an account ?{" "}
            <Link className="no-underline" to="/login">
              Log In
            </Link>{" "}
          </div>
        </Form>

        <div>
          {signUpMutation.isSuccess && (
            <p className="text-green-800 font-light text-2xl py-3">
              Succesfully SignUp
            </p>
          )}

          {signUpMutation.error && (
            <p className="text-red-600 font-light">
              {signUpMutation.error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
