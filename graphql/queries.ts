import gql from "graphql-tag";

export const GET_ABOUT_PAGE = gql`
query {
    aboutPage {
      data {
        attributes{
          title
          description
          contact        
          photo {
            data {
              attributes{
                name
                url
                formats
              }
            }
          }
        }
      }
    }
  }`