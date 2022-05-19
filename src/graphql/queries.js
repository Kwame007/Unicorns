import { gql } from '@apollo/client'

const GET_UNICORNS = gql`
query GetUniversity {
  universities {
    id
    slug
    name
    location
    campusImage {
			url
    }
    hasCourses {
      id
      courseCode
      courseTitle
    }
  },
  courses {
    id
    courseCode
    courseTitle
    courseRating {
      ratingType
      rating
    }
    courseAt{
      slug
      name
    }
  }
}
`






export { GET_UNICORNS }
