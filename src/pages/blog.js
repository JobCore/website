import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/blog-post'
import SideBar from '../components/blog-sidebar'
import { graphql } from 'gatsby';

import People from '../images/blog-people.png'

/* eslint-disable */



export default ({ data }) => {
  // const { markdownRemark } = data // data.markdownRemark holds your post data3
  // const { frontmatter, html } = markdownRemark
  const posts = data.allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    path: e.node.frontmatter.path,
    author: e.node.frontmatter.author,
    date: e.node.frontmatter.date,
    image: e.node.frontmatter.image,
    tags: e.node.frontmatter.tags,
    content: e.node.excerpt
  }));


  return (
    <Layout>
      <SEO title="Blog" />
      <div className="d-none d-lg-block">
        <div className="pink-top-image text-light d-flex align-items-center">
          <div className="text-center w-100 px-10">
            <h1 className="font-size-4em">
              <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>Blog
                            </span>
            </h1>
          </div>
        </div>

      </div>

      <div className="d-flex justify-content-center my-5 px-5">
        <div className="w-620px mr-3">
          {posts.map((e, i) => (
            <Post key={i} data={e} />
          ))}
        </div>

        <SideBar />
      </div>

    </Layout>
  )
}

export const pageQuery = graphql`
{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            date
            image
            tags
          }
          excerpt
        }
      }
    }
  }
`