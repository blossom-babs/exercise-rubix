import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = 3000;

const logger = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.id === 'secure') {
    res.redirect('/api/admin');
    next();
  }
};

app.get('/:id', logger, (req, res) => {
  res.send('this is the entry page');
});

app.get('/api/admin', (req, res) => {
  res.send('this is the secure route');
});

app.listen(port, () => console.log('server is live on port', port));

export default app;
