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

export const GET_NAVIGATION = gql`
query {
  renderNavigation(
    navigationIdOrSlug: "navigation-2"
    type: TREE
  ) {
    id
    title
    path
    items {
      id
      title
      path
    }
    items {
      id
      title
      path
    }
  }
}`

export const POST_CONTACT = gql`
mutation (
  $name: String
  $email: String
  $phone: String
  $message: String
) {
  createContactUs(
    data: {
      name: $name
      email: $email
      phone: $phone
      message: $message
    }
  ) {
    data {
      id
    }
  }
}
`