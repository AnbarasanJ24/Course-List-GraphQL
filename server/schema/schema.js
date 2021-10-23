const graphql = require('graphql');

// we need to create schema to work with graphql. 
// Each schema is called as Graph QL Object 

const { GraphQLObjectType, GraphQLString } = graphql;

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        area: { type: GraphQLString },
    })
})