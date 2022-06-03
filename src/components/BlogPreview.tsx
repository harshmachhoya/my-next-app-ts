import React, { useEffect, useState } from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { IBlog, IPropDataArray } from "../../interfaces/blog.interface";

const BlogPrview = ({ allBlogs }: IPropDataArray) => {
  return (
    <div className={styles.blogPreview}>
      {allBlogs.map(({ id, attributes: blogitem }: IBlog) => {
        return (
          <div key={id}>
            <Link href={`/blogpost/${blogitem.slug}`} passHref>
              <a>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </a>
            </Link>
            <p>{blogitem.content.substring(0, 200)}...</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPrview;
