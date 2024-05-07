import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LottieFile from "../../LottiFile";
import loginAnimation from "../../../utils/animation/login.json";
import { Form, Input, Button, Select } from "antd";
import { useMutation } from "@tanstack/react-query";
import { googleLogin, login } from "../../../api/Auth";
import LoadingPage from "../../ResponseStatus/LoadingPage";
import { useAuth } from "../../../contexts/AuthContext";
import { googleProvider, auth } from "../../firebase";

const { Option } = Select;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [form] = Form.useForm();
  const { mutateAsync, isLoading, isSuccess, isError, error, data } =
    useMutation({
      mutationFn: login,
    });

  const {
    mutateAsync: mutateAsyncs,
    isLoading: isLoadings,
    isSuccess: isSuccesss,
    isError: isErrors,
    error: errors,
    data: datas,
  } = useMutation({
    mutationFn: googleLogin,
  });

  const onFinish = async (values) => {

    try {
      const value = await mutateAsync(values);


      if (value.statusCode === 200) {
        localStorage.setItem("accessToken", value.data.accessToken);
        localStorage.setItem("refreshToken", value.data.refreshToken);
        localStorage.setItem("pending", value.data.pending);
        localStorage.setItem("role", value.data.role);
        localStorage.setItem("email", value.data.userEmail);
        localStorage.setItem("name", value.data.userName??"User");
        localStorage.setItem("company_id", value.data.id);
      }

      setTimeout(() => {
        navigate(from);

        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();
      // Handle successful login

      const value = await mutateAsyncs({ idToken: idToken });


      if (value.statusCode === 200) {
        localStorage.setItem("accessToken", value.data.accessToken);
        localStorage.setItem("refreshToken", value.data.refreshToken);
        localStorage.setItem("pending", value.data.pending);
        localStorage.setItem("role", value.data.role);
        localStorage.setItem("email", value.data.userEmail);
        localStorage.setItem("name", value.data.userName??"User");
      }

      setTimeout(() => {
        navigate(from);

        window.location.reload();
      }, 1000);
    } catch (error) {
      // Handle login error
      console.error(error);
    }
  };

  if (isLoading || isLoading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  return (
    <div className="my-5">
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <LottieFile height={"550px"} value={loginAnimation} />
        </div>
        <div className="bg-black text-white p-8 rounded-lg w-[90%] mx-4 lg:mx-0">
          <p className="text-end">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300">
              Sign Up
            </Link>
          </p>
          <div className="py-3">
            <h4 className="font-bold">Get started free...</h4>
            <p className="font-extralight mb-8 text-gray-400">
              No credit card required
            </p>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ role: "intern" }}
          >
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
                { min: 6, message: "Password must be at least 6 characters" },
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
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="flex items-center justify-center mb-4">
            <div className="border-t border-gray-600 flex-grow mr-2"></div>
            <span className="text-gray-400">or</span>
            <div className="border-t border-gray-600 flex-grow ml-2"></div>
          </div>
          <button
            onClick={signInWithGoogle}
            className="w-full bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition-colors mb-4 flex items-center justify-center"
          >
            <span className="mr-2">
              <i className="fab fa-google fa-2x text-red-500"></i>
            </span>
            <span className="text-lg font-semibold">Sign in with Google</span>
            <span className="ml-2 underline text-red-500">click here</span>
          </button>

          <div>
            {(isSuccess || isSuccesss) && (
              <p className="text-green-800 font-light text-3xl py-3 ">
                Succesfully Logged in
              </p>
            )}

            {isError && (
              <p className="text-red-600 font-light text-3xl py-3">
                {error.data.message}
              </p>
            )}

            {isErrors && (
              <p className="text-red-600 font-light text-3xl py-3">
                {errors.data.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
