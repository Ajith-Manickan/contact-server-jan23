// import json-server
const jsonServer = require('json-server')

// create server application
const server = jsonServer.create()

// set up route for db.json
const router = jsonServer.router("db.json")

// return a middleware used br JSON server
const middleware = jsonServer.defaults()

// set up port number for server application
const port = process.env.PORT || 3000

// use router and middleware in server application
server.use(middleware)
server.use(router)

// to listen server application in port
server.listen(port,()=>{
    console.log(`contact server application started at port ${port}`);
})
