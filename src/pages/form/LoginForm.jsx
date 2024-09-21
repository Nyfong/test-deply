import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../auth/authAction"; // Adjusted path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one specail case charecter"
      )
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  //handle Register
  const handleRegister = async (values) => {
    const registerData = await register(values);
    registerData?.status
      ? toast.error(registerData.message)
      : toast.success(registerData.message);

    console.log("RegisterData", registerData);
  };

  return (
    <>
      <section className="flex justify-center my-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleRegister(values);
            resetForm();
          }}
        >
          <Form className="w-1/2 bg-grey-100 p-5  rounded-md">
            <h3 className="text-semiBlue-600 text-center py-3 font-semibold text-header-3">
              Log in
            </h3>
            <div>
              {/* Continue with Google */}
              <button className="border w-[100%] border-grey-500 rounded-2xl py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="mr-2">
                    <img
                      className="w-8 ml-1 h-8 object-cover rounded-l-lg"
                      src="/src/assets/login/google.png"
                      alt="Google"
                    />
                  </span>
                  <p className="mt-1">Continue with Google</p>
                </div>
              </button>
              {/* Continue with Facebook */}
              <button className="border w-[100%] mt-2 border-grey-500 rounded-2xl py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="ml-6">
                    <img
                      className="w-7 h-7 object-cover rounded-l-lg"
                      src="/src/assets/login/fb.png"
                      alt="Facebook"
                    />
                  </span>
                  <p className="ml-1">Continue with Facebook</p>
                </div>
              </button>
              {/* Continue with Apple */}
              <button className="border w-[100%] mt-2 border-grey-500 rounded-2xl py-2 flex items-center justify-center hover:bg-gray-100 transition">
                <div className="flex">
                  <span className="mr-2">
                    <img
                      className="w-8 h-8 object-cover rounded-l-lg"
                      src="/src/assets/login/apple.png"
                      alt="Apple"
                    />
                  </span>
                  <p className="mt-1">Continue with Apple</p>
                </div>
              </button>
              <div className="flex items-center mt-3">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-600">Or continue with</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Username */}
              {/* <div className="mt-5">
              <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <Field type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username"></Field>
              <ErrorMessage name="email" className="text-red-600" component="div"></ErrorMessage>
              </div> */}

              {/* Email */}
              <div className="mt-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-semiBlue-500 focus:border-semiBlue-500 block w-full p-2.5 dark:text-white dark:focus:ring-semiBlue-500 dark:focus:border-semiBlue-500"
                  placeholder="name@gmail.com"
                ></Field>
                <ErrorMessage
                  name="email"
                  className="text-primary-600"
                  component="div"
                ></ErrorMessage>
              </div>
              {/* Password */}
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-semiBlue-500 focus:border-semiBlue-500 block w-full p-2.5 dark:text-white dark:focus:ring-semiBlue-500 dark:focus:border-semiBlue-500"
                  placeholder="********"
                ></Field>
                <ErrorMessage
                  name="password"
                  className="text-primary-600"
                  component="div"
                ></ErrorMessage>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-600">
                    Remamber me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-semiBlue-600 text-sm mb-4 block text-right underline underline-offset-1"
                >
                  Forget password?
                </a>
              </div>
              {/* ConfirmPassword */}
              {/* <div className="mt-5">
              <label htmlFor="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <Field type="password" name="confirmPassword" id="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********"></Field>
              <ErrorMessage name="password" className="text-red-600" component="div"></ErrorMessage>
              </div> */}

              {/* Button login */}

              <button
                type="submit"
                className="text-white mx-auto w-[100%] mt-3 bg-grey-400 hover:bg-grey-600 focus:ring-2 focus:ring-blue-200 font-medium rounded-2xl text-lg px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800"
              >
                Log in
              </button>

              <p className="font-semibold text-header-5 text-center py-2">
                Don't have an account?
              </p>
              <Link to="/signup" className="w-full">
                <button
                  type="button"
                  className="text-semiBlue-600 mx-auto w-full mt-5 border border-grey-300 hover:bg-grey-600 focus:ring-2 focus:ring-blue-200 font-medium rounded-2xl text-lg px-5 py-2.5 me-2 mb-2 hover:text-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </Form>
        </Formik>
        <ToastContainer />
      </section>
    </>
  );
}
