import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { IPropDataArray, IBlog } from "../interfaces/blog.interface";
import BlogPrview from "./BlogPreview";

const LatestBlogs = ({ allBlogs }: IPropDataArray) => {
  return (
    <div>
      <h2>Latest Blogs</h2>
      <BlogPrview allBlogs={allBlogs} />
    </div>
  );
};

export default LatestBlogs;
