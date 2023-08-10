import React from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "../utils/SignUpSchema";
import { Link, useNavigate } from "react-router-dom";

function Respon() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      validationSchema: SignUpSchema,
      initialValues: initialValues,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <div className="Main-container">
      <div className="contain">
        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <h1 style={{ marginTop: "70px" }}>Sign In</h1>
            <div style={{ marginTop: "30px" }}>
              <input
                type="email"
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
              <button
                type="submit"
                className="btn"
                onClick={() => navigate("/d")}
              >
                Sign in
              </button>
            </div>

            <p className="account" style={{ marginTop: "30px" }}>
              Don't have any account? <Link to="/signup">sign up?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Respon;
