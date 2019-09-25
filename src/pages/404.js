import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Non trovata" />
    <h1>NON TROVATA</h1>
    <p>Purtroppo sei capitato su un link inesistente del nostro sito.</p>
    <br />
    <p>
      Sarebbe bello tu tornassi alla <Link to="/">HOME</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
