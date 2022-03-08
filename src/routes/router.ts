import express, {Request, Response} from 'express';
const routes = express.Router();

routes.get('/', (req: Request, res:Response) => {
  res.status(200).send('this is the router')
})

export default routes