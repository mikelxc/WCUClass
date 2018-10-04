import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hello, students in Jingkang Zhang's Python Course</h1>
    <p>Welcome to the course home page</p>
  <div>
  <h1>Lectures and Resources</h1>
  <h3>Lecture Videos</h3>
  <ul>
    <li><a href="https://class.wildchickenuniversity.com/python/Lecture1.mp4">Lecture 1 Sept. 16</a></li>
    <ul>
      <li><a href="https://class.wildchickenuniversity.com/python/Lecture1.mp4">Video</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/Lecture1Notes.pdf">Notes</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/demo1.py">Lecture Codes</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/hw1.zip">Homework</a> and <a href="https://class.wildchickenuniversity.com/python/hw1Specification.pdf">Specification</a></li>
    </ul>
      <video controls muted src="https://class.wildchickenuniversity.com/python/Lecture1.mp4" width={300} height={200}>
        Sorry, your browser doesn't support embedded videos.
      </video>
    <li><a href="https://class.wildchickenuniversity.com/python/Lecture2.mp4">Lecture 2 Sept. 23</a></li>
    <ul>
      <li><a href="https://class.wildchickenuniversity.com/python/Lecture2.mp4">Video</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/Lecture2Notes.pdf">Notes</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/demo2.py">Lecture Codes</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/hw2.zip">Homework</a> and <a href="https://class.wildchickenuniversity.com/python/hw2Specification.pdf">Specification</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/KeyIdeasOfRecursion.pdf">Key ideas of Recursion</a></li>
    </ul>
    <video controls muted src="https://class.wildchickenuniversity.com/python/Lecture2.mp4" width={300} height={200}>
      Sorry, your browser doesn't support embedded videos.
    </video>
    <li><a href="https://class.wildchickenuniversity.com/python/Lecture3.mp4">Lecture 3 Sept. 30</a></li>
    <ul>
      <li><a href="https://class.wildchickenuniversity.com/python/Lecture3.mp4">Video</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/Lecture3Notes.pdf">Notes</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/demo3.py">Lecture Codes</a></li>
      <li><a href="https://class.wildchickenuniversity.com/python/hw3.zip">Homework</a> and <a href="https://class.wildchickenuniversity.com/python/hw3Specification.pdf">Specification</a></li>
      <video controls muted src="https://class.wildchickenuniversity.com/python/Lecture3.mp4" width={300} height={200}>
        Sorry, your browser doesn't support embedded videos.
      </video>
    </ul>
  </ul>
  </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
