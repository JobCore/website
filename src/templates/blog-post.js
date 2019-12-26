import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/blog-post'
import SideBar from '../components/blog-sidebar'
import rehypeReact from "rehype-react";
import SocialMediaSideBar from '../components/socialmedia-sidebar.js'

import People from '../images/blog-people.png'
export default ({ data }) => {
    const post = data.markdownRemark
    const tags = data.allMarkdownRemark.group
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
            <SocialMediaSideBar />
            <div className="d-flex justify-content-center my-5 px-5">
                <div className="w-620px mr-3">
                    {/* {posts.map((e, i) => (
            <Post key={i} data={e} />
          ))} */}
                    <div className="pb-3">
                        <img src={post.frontmatter.image} style={{ width: "100%" }} alt="Blog Post Article" />
                        {/* <h2 className="pt-3">sdasdasd</h2> */}
                        <span className="text-secondary pb-3 pt-3">
                            {post.frontmatter.date + " by "}<a className="text-brightblue">{post.frontmatter.author}</a>
                        </span>
                        <div className="pt-3" dangerouslySetInnerHTML={{ __html: post.html }} />


                    </div>
                </div>

                <SideBar keywords={tags} />
            </div>

        </Layout>

    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        date
        author
      }
    }
    allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
  }
`