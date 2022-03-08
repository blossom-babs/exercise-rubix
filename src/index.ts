import express, { Request, Response } from 'express';
import routes from './routes/router';
const app = express();
const PORT = 3000;

app.use('/', routes);

app.get('/blossom', (req: Request, res: Response) => {
  res.send('something');
});

app.listen(PORT, () => console.log('server is listening on port', PORT));

export default app;
