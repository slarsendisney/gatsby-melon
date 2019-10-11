import React from "react";
import { Hero, GetThis } from "sld-component-library";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReduxExample from "../components/ReduxExample";

import Places from "../data/Start.json";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-orange-bg">
        <Hero places={Places} title="Melon" />
      </div>
      <div className="is-white-bg">
        <GetThis flag="melon" />
      </div>
      <div className="is-light-grey-bg">
        <ReduxExample />
      </div>
    </Layout>
  );
}
