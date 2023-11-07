const typeDefs = `#graphql
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    saveBooks: [Book]!
  }

  type Book {
    BookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input BookInput {
    bookId: String!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
