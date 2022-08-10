import {app} from "./app";

app.get('/', (_req, res) => {
    res.status(200).send('Hello world!');
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})