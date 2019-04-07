import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const MonthlyReports = () => (
  <Layout>
    <p><Link to="/January/">January</Link></p>
    <p><Link to="/February/">February</Link></p>
    <p><Link to="/March/">March</Link></p>
    <p><Link to="/April/">April</Link></p>
  </Layout>
);

export default MonthlyReports;
