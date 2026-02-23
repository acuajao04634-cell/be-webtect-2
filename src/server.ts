import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});