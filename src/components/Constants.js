export const GRAPHQL_API = 'https://api.stackshare.io/graphql';


export const GET_TECH_QUERY = `
{
    enrichment(domain: "amazon.com"){
      domain
      companyId
      companyName
      companyTools {
        count
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            tool{
              id
              name
            }
            sourcesSummary
            sources
          }
        }
      }
    }
}`;
