export const GRAPHQL_API = 'https://api.stackshare.io/graphql';


export function getQuery(anyTool) {
  return (
  `{
  tools(query: "${anyTool}" ) {
    edges {
      node {
        name
        title
        slug
        canonicalUrl
        id
        imageUrl
        ossRepo
        description
        websiteUrl
      }
    }
  }
}`)
};
