import gql from "graphql-tag";

export const GET_ABOUT_PAGE = gql`
query {
  aboutPage {
    data {
      attributes{
        title
        description      
       	contacts {
          name
          designation
          description
          email
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
  }
}`