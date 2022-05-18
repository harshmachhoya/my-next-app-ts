import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apolloCon } from "../apolloCon";
import { DefaultSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <ApolloProvider client={apolloCon}>
        <Navbar />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
