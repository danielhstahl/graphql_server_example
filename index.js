const { buildSchema }=require('graphql')
const graphqlHTTP=require('express-graphql')
const { addResolveFunctionsToSchema, makeExecutableSchema } = require('graphql-tools')
const {resolverMap}=require('./resolvers')
const express=require('express')
const fs=require('fs')
fs.readFile('./graphql.schema', 'utf8', (err, schema)=>{
    if(err){
        throw new Error(err)
    }
    startApp(schema)
})

const startApp=(schemaString)=>{
    //let schema= buildSchema(schemaString)
    //addResolveFunctionsToSchema(schema, resolverMap)
    const schema = makeExecutableSchema({
        typeDefs:schemaString,
        resolvers:resolverMap,
    })
    const root={
        hello:()=>'Hello World!'
    }
    const app=express()
    app.use('/graphql', graphqlHTTP({
        schema,
        //rootValue:root,
        graphiql:true
    }))
    app.use('/schema', (req, res)=>{
        res.send(schemaString)
    })
    app.listen(4000)
}



