import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Navigation } from "../components/Navigation";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloCon } from "../apolloCon";
import { DefaultSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";
import App from "next/app";
import { GET_NAVIGATION } from "../graphql/queries";

function MyApp({ Component, pageProps }: AppProps) {
  const { navigation } = pageProps;
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ApolloProvider client={apolloCon}>
        <Navigation navigation={navigation} />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await apolloCon.query({
//     query: GET_NAVIGATION,
//   });
//   console.log("Navigation", JSON.stringify(data, null, 4));

//   return { props: { navigation: data } };
// };

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (context: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(context);
  // Fetch global site settings from Strapi
  const { data } = await apolloCon.query({
    query: GET_NAVIGATION,
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { navigation: data.renderNavigation } };
};
