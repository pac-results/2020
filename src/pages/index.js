import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>PAC Results 2020</h1>
    <p><Link to="/athletes/">Athletes</Link></p>
    <p><Link to="/races/">Races</Link></p>
    <p><Link to="/monthly_reports/">Monthly Reports</Link></p>
    <p><Link to="/championship/">Championship Standings</Link></p>
    <p><Link to="/adam_eve/">Adam and Eve Standings</Link></p>
  </Layout>
);

export default IndexPage
