const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  async function postsQuery() {
    let result = await graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);
    return result;
  }
  postsQuery().then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: "/blog/" + node.frontmatter.slug,
        component: path.resolve("./src/components/postLayout.js"),
        context: {
          slug: node.frontmatter.slug
        }
      });
    });
  });
  postsQuery().then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/pagina${i}`,
        component: path.resolve("./src/components/blogListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numPages,
          index: i
        }
      });
    });
  });
};
