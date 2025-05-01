import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { createHandler } from 'graphql-http/lib/use/express';
import {ruruHTML} from 'ruru/server';
import schema from "./schema/schema.js";
import cors from "cors";


const port = process.env.PORT || 5000;
import {connectDB} from "./config/db.js";

const app = express();
connectDB();


app.use(cors());

app.all("/graphql", createHandler({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),)


app.listen(port, console.log(`Server started at ${port}`));


// Serve the GraphiQL IDE.
app.get('/', (_req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/graphql' }));
  });