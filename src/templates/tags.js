import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/blog-post'
import SideBar from '../components/blog-sidebar'

import People from '../images/blog-people.png'
// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tags = data.allMarkdownRemark.group

  const posts = data.allMarkdownRemark.edges.map(e => ({
    title: e.node.frontmatter.title,
    path: e.node.frontmatter.path,
    author: e.node.frontmatter.author,
    date: e.node.frontmatter.date,
    image: e.node.frontmatter.image,
    tags: e.node.frontmatter.tags,
    content: e.node.excerpt,
    url: e.node.fields.slug
  }));
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`


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
      <div className="mt-3">
        <h2 className="text-center" style={{ color: "black" }}>{tagHeader}</h2>
      </div>
      <div className="d-flex justify-content-center my-5 px-5">
        <div className="w-620px mr-3">
          {posts.map((e, i) => (
            <Post key={i} data={e} />
          ))}
        </div>

        <SideBar keywords={tags} />
      </div>

    </Layout>
  )
}


Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
query($tag: String)
{
  allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC},filter: { frontmatter: { tags: { in: [$tag] } } }) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          author
          date
          image
          slug
          status
          subtitle
          tags
        }
        excerpt
      }
    }
    group(field: frontmatter___tags) {
      fieldValue
    }
  }
}
`