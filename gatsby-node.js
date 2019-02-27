const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  async function slugQuery() {
    let result = await graphql(`
      {
        allMarkdownRemark {
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
  slugQuery().then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve("./src/components/postLayout.js"),
        context: {
          slug: node.frontmatter.slug
        }
      });
    });
  });
};
