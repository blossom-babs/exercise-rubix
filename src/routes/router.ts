import express, { Request, Response } from 'express';
import { resizeImages } from '../controller/resizeImage';
const routes = express.Router();

routes.get('/', resizeImages, (req: Request, res: Response) => {
  res.status(200).send('this is the router');
});

export default routes;
