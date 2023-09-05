import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiGetBlog, apiGetAllBlogs } from "../backend/api";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import { FaFacebookF, FaInstagram, FaTwitterSquare } from "react-icons/fa";
export default function ViewBlog() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getBlog();
    getAllBlogs();
  }, [article]);

  const { title } = useParams();
  const encodedtitle = encodeURIComponent(title);
  const getBlog = async () => {
    const { data } = await apiGetBlog(encodedtitle);
    setArticle(data);
  };
  const getAllBlogs = async () => {
    const { data } = await apiGetAllBlogs();
    setArticles(data);
  };
  const [articles, setArticles] = useState([]);

  return (
    <div className="container mt-5 pt-0 pt-md-5">
      {article ? (
        <div className="row">
          <div className="col-md-8 col-12">
            <h1 className="text-capitalize py-5">{article.blog_title}</h1>
            <div className="">
              <img
                src={article.blog_url}
                className="img-fluid mx-auto"
                style={{ maxHeight: 400 }}
                alt="Selected"
              />
            </div>
            <div className="py-3 justify-content-lg-center">
              <span className="pe-3">
                <FacebookShareButton
                  url={`https://www.simbulasafaris.com/blog/${title}`}
                  quote={article.blog_title}
                >
                  <FaFacebookF size={32} round />
                </FacebookShareButton>
              </span>
              <span className="pe-3">
                <TwitterShareButton
                  url={`https://www.simbulasafaris.com/blog/${title}`}
                  quote={"Dummy text!"}
                >
                  <FaTwitterSquare size={32} round />
                </TwitterShareButton>
              </span>
              <span className="pe-3">
                <InstapaperShareButton
                  url={`https://www.simbulasafaris.com/blog/${title}`}
                  quote={"Dummy text!"}
                >
                  <FaInstagram size={32} round />
                </InstapaperShareButton>
              </span>
            </div>
            <h6 className="fst-italic pt-3">{article.blog_img_desc}</h6>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: article.blog_content }}
            ></div>
          </div>
          <div className="col-md-4 col-12 pt-md-5 pt-1">
            <h3 className="text-center ">Our Stories</h3>
            <div className="ps-5 pt-4">
              {articles.map((article, index) => (
                <>
                  <p>
                    {index + 1}) .
                    <Link
                      to={`/article/${encodeURIComponent(article.blog_title)}`}
                      className="text-decoration-none text-capitalize fs-5"
                    >
                      {article.blog_title}
                    </Link>
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: 400 }}
        >
          <h1>loading</h1>
        </div>
      )}
    </div>
  );
}
