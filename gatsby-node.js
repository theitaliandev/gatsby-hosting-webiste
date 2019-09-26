const path = require("path");

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              postType
            }
          }
        }
      }
    }
  `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if(node.frontmatter.postType === "blog") {
      createPage({
        path: "/blog/" + node.frontmatter.slug,
        component: path.resolve("./src/components/postLayout.js"),
        context: {
          slug: node.frontmatter.slug
        }
      })}else{
        createPage({
          path:"/recensioni/" + node.frontmatter.slug,
          component: path.resolve("./src/components/postLayout.js"),
          context: {
            slug: node.frontmatter.slug
          }
        })
      }
    });
    const posts = []
    const recensioni = []
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      if(node.frontmatter.postType === "blog") {
        posts.push(node)
      }else{
        recensioni.push(node)
      }
    })
    const postsPerPage = 2;
    const numPagesBlog = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPagesBlog }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/pagina${i}`,
        component: path.resolve("./src/components/blogListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numPagesBlog,
          index: i
        }
      });
    });
    const numPagesRecensioni = Math.ceil(recensioni.length / postsPerPage);
    Array.from({ length: numPagesRecensioni }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/recensioni` : `/recensioni/pagina${i}`,
        component: path.resolve("./src/components/recensioniListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numPagesRecensioni,
          index: i
        }
      });
    });
};
