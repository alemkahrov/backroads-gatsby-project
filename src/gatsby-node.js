exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query{
    tours: allContentfulTourExample{
      edges{
        node{
          slug
        }
      }
    }
  }
  `)

  console.log(data);
}