import React from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "../utils/SignUpSchema";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      validationSchema: SignUpSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        // console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="Main-container">
      <div className="contain">
        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div>
              <input
                type="text"
                className="first-name"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <p style={{ color: "red" }}>{errors.firstName}</p>
              ) : null}
            </div>
            <div style={{ marginTop: "30px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <p style={{ color: "red" }}>{errors.lastName}</p>
              ) : null}
            </div>
            <div style={{ marginTop: "30px" }}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red" }}>{errors.email}</p>
              ) : null}
            </div>
            <div style={{ marginTop: "30px" }}>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}
            </div>
            <div style={{ marginTop: "30px" }}>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirm_password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p style={{ color: "red" }}>{errors.confirm_password}</p>
              ) : null}
            </div>
            <div style={{ marginTop: "30px" }}>
              <button
                type="submit"
                className="btn "
                onClick={() => navigate("/login")}
              >
                Sign Up
              </button>
            </div>
            <p className="account" style={{ marginTop: "30px" }}>
              Already registered <a href="/login">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
