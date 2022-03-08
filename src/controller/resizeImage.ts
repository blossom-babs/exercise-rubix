import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';

const images = [
  './assets/original/encenadaport.jpeg',
  './assets/original/fjord.jpeg',
  './assets/original/icelandwaterfall.jpeg',
  './assets/original/palmtunnel.jpeg',
  './assets/original/santamonica.jpeg',
];

export const resizeImages = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  images.map((item) => {
    const filename = item.split('/').find((el) => el.endsWith('jpeg'));
    sharp(item)
      .resize(200, 200)
      .toFile(`./assets/edited/${filename}-${Date.now()}.jpeg`);
  });
  next();
};
