import React from "react";
import { apolloCon } from "../apolloCon";
import { GET_ABOUT_PAGE } from "../graphql/queries";

const About = () => {
  return <div>about</div>;
};

export default About;

export async function getStaticProps() {
  const { data, loading, error } = await apolloCon.query({
    query: GET_ABOUT_PAGE,
  });
  console.log(data.aboutPage.data.attributes);

  return { props: { aboutPageData: data.aboutPage.data.attributes } };
}
