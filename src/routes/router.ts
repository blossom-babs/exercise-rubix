import express, { Request, Response } from 'express';
import { resizeImage } from '../controller/resizeImage';
const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  const result = resizeImage();
  console.log('the result is from the router file', result);
  res.status(200).send('this is the router');
});

export default routes;
