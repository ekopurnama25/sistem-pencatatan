import React, { useContext } from "react";
import CardComponent from "../../components/Card";
import "./login.css";
//import * as Yup from "yup";
import { Typography } from "@material-tailwind/react";
import { Formik } from "formik";

import { Navigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

const LoginPages = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  return (
    <>
      <div className="login-layout">
        <CardComponent>
          {isAuthenticated ? (
            <Navigate to="/" replace={true} />
          ) : (
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "email cannot be empty";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                } else if (!values.password) {
                  errors.password = "password cannot be empty";
                }
                return errors;
              }}
              onSubmit={(modal) => {
                login(modal);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                    Sign in to our platform
                  </h5>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />

                    <Typography variant="small" color="red">
                      {errors.email && touched.email && errors.email}
                    </Typography>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <Typography variant="small" color="red">
                      {errors.password && touched.password && errors.password}
                    </Typography>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              )}
            </Formik>
          )}
        </CardComponent>
      </div>
    </>
  );
};

export default LoginPages;
