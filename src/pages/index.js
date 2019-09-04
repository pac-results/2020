import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>PAC Results</h1>
    <p><Link to="/athletes/">Athletes</Link></p>
    <p><Link to="/races/">Races</Link></p>
    <p><Link to="/monthly_reports/">Monthly Reports</Link></p>
  </Layout>
);

export default IndexPage
