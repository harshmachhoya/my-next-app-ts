import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { IBlog, IPropDataArray } from "../interfaces/blog.interface";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import * as fs from "fs";
import BlogPrview from "../src/components/BlogPreview";
import { NextSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";

// NOTE: Comment any of one rendering function

/**
 *
 * Pre Rendering
 * Server Side Rendering / Static Site Rendering
 *
 */
const Blog = (props: IPropDataArray) => {
  const SEO = {
    title: seoConfig.title,
    titleTemplate: "%s | Blogs",
  };
  const [Blogs, setBlogs] = useState(props.allBlogs);

  return (
    <>
      <NextSeo {...SEO} />
      <div className={styles.blogPage}>
        <h2>All Blogs</h2>
        <BlogPrview allBlogs={Blogs} />
      </div>
    </>
  );
};

/**
 *
 * Server Side Generation
 * This gets called on every request
 *
 */
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:1337/api/posts`);
  const { data: allBlogs } = await res.json();
  // Pass allBlogs to the page via props
  return { props: { allBlogs } };
};

/**
 *
 * Static Site Generation
 *
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   let data = await fs.promises.readdir("blogdata");
//   let myfile;
//   let allBlogs: Array<IBlog> = [];
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
//     allBlogs.push(JSON.parse(myfile));
//   }
//   return { props: { allBlogs } };
// };

// NOTE: Comment any of one rendering function

/**
 *
 * Client Side Rendering
 *
 */

// const Blog = () => {
//   const [Blogs, setBlogs] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/api/blogs")
//       .then((a) => {
//         return a.json();
//       })
//       .then((parsed) => {
//         setBlogs(parsed);
//       });
//   }, []);

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         {Blogs.map((blogitem: IBlog) => {
//           return (
//             <div key={blogitem.slug}>
//               <Link href={`/blogpost/${blogitem.slug}`} passHref>
//                 <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
//               </Link>
//               <p className={styles.blogItemhp}>
//                 {blogitem.content.substring(0, 200)}...
//               </p>
//             </div>
//           );
//         })}
//       </main>
//     </div>
//   );
// };

export default Blog;
