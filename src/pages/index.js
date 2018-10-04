import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi Students</h1>
    <p>Welcome to the home page of Wild Chicken University Classes.</p>
    <p>Now please select your course.</p>
    <button><Link to="/cs101/">CS101,Introduction to Python</Link></button>
    <br></br>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
