import express, { Request, Response } from 'express';
import { resizeImages } from '../controller/resizeImage';
const routes = express.Router();

routes.get('/', resizeImages, (req: Request, res: Response) => {
  res.status(200).json({ Message: 'Images have been resized successfully.' });
});

export default routes;
