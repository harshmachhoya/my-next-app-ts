import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { useRouter as NRouter } from "next/router";
import styles from "../../styles/Blog.module.css";
import { IBlog, IPropData } from "../../interfaces/blog.interface";
import * as fs from "fs";
import { NextSeo } from "next-seo";
// NOTE: Comment any of one rendering function

/**
 *
 * Pre Rendering
 * Server Side Rendering / Static Site Rendering
 *
 */
const Slug = (props: IPropData) => {
  const [Blog] = useState(props.myBlog.attributes);
  const SEO = {
    title: props.myBlog.attributes.title,
    titleTemplate: "Blogs | %s",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className={styles.blogPage}>
        <h1>{Blog && Blog.title}</h1>
        <hr />
        <p>{Blog && Blog.content}</p>
        <div className={styles.subContent}>
          <h4>Author:</h4>
          <p>{Blog && Blog.author}</p>
        </div>
        <div className={styles.subContent}>
          <h4>Last Updated:</h4>
          <p>{Blog && new Date(Blog.updatedAt).toUTCString()}</p>
        </div>
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
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Fetch data from external API
//   const res = await fetch(
//     `http://localhost:1337/api/posts/${context.query.slug}`
//   );
//   const { data: myBlog } = await res.json();

//   // Pass myBlog to the page via props
//   return { props: { myBlog } };
// };

/**
 *
 * Static Site Generation
 *
 */
export const getStaticPaths: GetStaticPaths = async () => {
  //   // We'll pre-render only these paths at build time.
  //   // { fallback: false } means other routes should 404.
  // // With Strapi API
  const res = await fetch(`http://localhost:1337/api/posts`);
  const { data: myBlog } = await res.json();
  const paths = myBlog.map((blog: IBlog) => {
    return { params: { slug: blog.attributes.slug } };
  });
  return {
    paths,
    fallback: false,
  };
  // // With static JSON file
  //   return {
  //     paths: [
  //       { params: { slug: "how-to-learn-flask" } },
  //       { params: { slug: "how-to-learn-javascript" } },
  //       { params: { slug: "how-to-learn-nextjs" } },
  //     ],
  //     fallback: true,
  //   };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // // With Strapi API
  // Fetch data from external API
  console.log(context.params?.slug);
  const res = await fetch(
    `http://localhost:1337/api/posts/slug/${context.params?.slug}`
  );
  const { data: myBlog } = await res.json();
  return {
    props: { myBlog: myBlog },
  };

  // // With static JSON file
  //   const slug = context.params?.slug;
  //   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  //   return {
  //     props: { myBlog: JSON.parse(myBlog) },
  //   };
};

// NOTE: Comment any of one rendering function

/**
 *
 * Client Side Rendering
 *
 */
// const Slug = () => {
//   const router = NRouter();
//   const [Blog, setBlog] = useState<IBlog>();
//   const { slug } = router.query;
//   useEffect(() => {
//     if (!router.isReady) return;
//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//       .then((a) => {
//         return a.json();
//       })
//       .then((parsed) => {
//         setBlog(parsed);
//       });
//   }, [router.isReady, slug]);

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1>{Blog && Blog.title}</h1>
//         <hr />
//         <div>{Blog && Blog.content}</div>
//       </main>
//     </div>
//   );
// };

export default Slug;
