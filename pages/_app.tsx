import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navigation } from "../components/Navigation";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloCon } from "../apolloCon";
import { DefaultSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";
import { hydrateFetchStore } from "../src/myFetch";

function MyApp({ Component, pageProps }: AppProps) {
  // hydrateFetchStore(fetchStore);
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ApolloProvider client={apolloCon}>
        <Navigation />
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

// MyApp.getInitialProps = async () => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const { data, loading, error } = await apolloCon.query({
//     query: GET_NAVIGATION,
//   });
//   // console.log("Navigation", JSON.stringify(data.renderNavigation, null, 4));

//   return { navigation: data.renderNavigation };

//   // return { ...appProps };
// };
