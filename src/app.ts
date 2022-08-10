import express from "express";

const app = express();

const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
];

middleware.forEach((mdw) => app.use(mdw));

export {app};