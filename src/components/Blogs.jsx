import React, { useEffect, useState } from "react";

import { apiGetAllBlogs } from "./backend/api";
import LoadingSkeleton from "./mycomponents/LoadingSkeleton";
import CardBlog from "./CardBlog";
export default function Blogs() {
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await apiGetAllBlogs();
      console.log(data);
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="container pt-5 mt-5">
      <h1 className="text-center">Our Stories</h1>
      {!loading ? (
        <div>
          {blogs.map((blog) => (
            <CardBlog
              img={blog.blog_url}
              title={blog.blog_title}
              desc={blog.blog_img_desc}
              link={blog.blog_title}
            />
          ))}
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
}
