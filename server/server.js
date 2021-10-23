const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');

const app = express();


/* Body Parser
=========================== */
app.use(express.json());


/* Graph Ql Initialization
=========================== */
app.use('/graphql', graphqlHTTP({

}));


/* Config Variables
=========================== */
dotenv.config({ path: './config/config.env' });

/* Route Files
=========================== */


/* Mounting Router
=========================== */


const PORT = process.env.PORT || 5000;


/* To start server
=========================== */
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} `.blue.bold))