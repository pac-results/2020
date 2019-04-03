import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p><Link to="/athletes/">Go to athletes</Link></p>
    <p><Link to="/races/">Go to races</Link></p>
  </Layout>
);

export default IndexPage
