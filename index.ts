import express from 'express';

const app = express();
app.use(express.json());

app.all('*', (req, res) => {
  const info = {
    path: req.path,
    method: req.method,
    headers: req.headers,
    body: req.body,
  }
  console.log(JSON.stringify(info, undefined, 2));

  res.status(200).send(info);
})

app.listen(8000);
