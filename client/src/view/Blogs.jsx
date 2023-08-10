import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../Redux/slice/blogSlice";
import Logo from "../logo.svg";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, status, error, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <img className="rotate" src={Logo} />
        <h2>Loading...</h2>
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-container">
      <h1 className="heading1 bold black" style={{ textAlign: "center" }}>
        Blog List
      </h1>
      <ul className="blog-box" style={{ margin: "auto" }}>
        {blogs?.slice(0, 14).map((blog) => (
          <li key={blog.id} className="blog">
            <div className="blog-header">
              <div className="img-container">
                <img
                  src={blog.image}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <h3 className="heading3 bold blog-heading">
                {blog.title.slice(0, 35)}
              </h3>
            </div>
            <p className="blog-des">{blog.description.slice(0, 250)}</p>
            <div className="price-container">
              <span>Price: {blog.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
