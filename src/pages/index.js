import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import ReduxExample from "../components/ReduxExample";
import GetThis from "../components/GetThis";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-orange-bg">
        <Hero />
      </div>
      <div className="is-white-bg">
        <GetThis />
      </div>
      <div className="is-light-grey-bg">
        <ReduxExample />
      </div>
    </Layout>
  );
}
