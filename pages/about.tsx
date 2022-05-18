import { NextSeo } from "next-seo";
import React from "react";
import ReactMarkdown from "react-markdown";
import { apolloCon } from "../apolloCon";
import AboutCard from "../components/AboutCard";
import seoConfig from "../config/next-seo.config";
import { GET_ABOUT_PAGE } from "../graphql/queries";
import { IAboutPage } from "../interfaces/about.interface";
import styles from "../styles/About.module.css";

const About = ({ aboutPageData }: { aboutPageData: IAboutPage }) => {
  const SEO = {
    title: seoConfig.title,
    titleTemplate: "%s | About",
  };
  return (
    <div>
      <NextSeo {...SEO} />
      <div className={styles.aboutSection}>
        <h1>{aboutPageData.title}</h1>
        <ReactMarkdown>{aboutPageData.description}</ReactMarkdown>
      </div>
      <div className={styles.teamCards}>
        <AboutCard {...aboutPageData} />
      </div>
    </div>
  );
};

export default About;

export async function getStaticProps() {
  const { data, loading, error } = await apolloCon.query({
    query: GET_ABOUT_PAGE,
  });
  // console.log(JSON.stringify(data.aboutPage.data.attributes, null, 4));

  return { props: { aboutPageData: data.aboutPage.data.attributes } };
}
