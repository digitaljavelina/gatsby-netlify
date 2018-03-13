import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
	<div>
		<h2>Posts</h2>
		{data.allMarkdownRemark.edges.map(({node}) => (
			<PostListing key={node.id} post={node} />
		))}
		<h2>Contact Form</h2>
		<form
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input name="name" placeholder="Your Name" type="text"/>
			<button>Send</button>
		</form>
	</div>

);



export default IndexPage;

export const query = graphql`
  query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
        html
        excerpt(pruneLength: 280)
      }
    }
  }
}
`;