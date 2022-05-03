import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import LatestBlogs from "../components/LatestBlogs";
import { IPropDataArray } from "../interfaces/blog.interface";
import { IIndexPage } from "../interfaces/common.interface";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NextImage from "../components/Image";

const Home = (props: IIndexPage) => {
  console.log(props);
  return (
    <div>
      {/* <style jsx>
        {`
          h2 {
            font-size: 38px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style> */}
      <Head>
        <title>{props.homePage.attributes.title}</title>
        <meta name="description" content="Generated by Hunting coder" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{props.homePage.attributes.title}</h1>

        <div className={styles.imagewrap}>
          <NextImage
            layout="raw"
            className={styles.myImg}
            width={237}
            height={158}
            alternativeText="Home image"
            url={props.homePage.attributes.photo.data.attributes.url}
          />
          {/* <Image
            className={styles.myImg}
            src={`http://localhost:1337${props.homePage.attributes.photo.data.attributes.url}`}
            width={237}
            height={158}
            alt="Home image"
            layout="raw"
          /> */}
          {/* <img
            className={styles.myImg}
            src={`http://localhost:1337${props.homePage.attributes.photo.data.attributes.url}`}
            width={237}
            height={158}
            alt="Home image"
          /> */}
        </div>
        <p className={styles.description}>{props.homePage.attributes.quotes}</p>
        <LatestBlogs allBlogs={props.allBlogs} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

/**
 *
 * Server Side Generation
 * This gets called on every request
 *
 */
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const resBlog = await fetch(
    `http://localhost:1337/api/posts?sort[0]=updatedAt:desc&pagination[page]=1&pagination[pageSize]=5`
  );
  const { data: allBlogs } = await resBlog.json();

  const resHomePage = await fetch(
    `http://localhost:1337/api/home-page?populate[photo][fields]=name&populate[photo][fields]=url&populate[photo][fields]=formats`
  );
  const { data: homePage } = await resHomePage.json();
  // console.log("homepage", JSON.stringify(homePage, null, 4));
  // Pass allBlogs to the page via props
  return { props: { allBlogs, homePage } };
};

/**
 *
 * Static Site Generation
 *
 */
// export const getStaticProps: GetStaticProps = async (context) => {
//   // // With Strapi API
//   // Fetch data from external API
//   const res = await fetch(
//     `http://localhost:1337/api/posts/${context.params?.slug}`
//   );
//   const { data: myBlog } = await res.json();
//   return {
//     props: { myBlog: myBlog },
//   };

// // With static JSON file
//   const slug = context.params?.slug;
//   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
//   return {
//     props: { myBlog: JSON.parse(myBlog) },
//   };
// };
