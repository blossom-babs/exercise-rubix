import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import fs from 'fs';

fs.mkdirSync('./assets/resized', { recursive: true }); // create folder for resized images

// get files to be edited
const images: string[] = [];

fs.readdir('./assets/original', (err, files) => {
  if (err) {
    throw new Error(`${err}`);
  } else {
    files.forEach((file) => {
      images.push(`./assets/original/${file}`);
    });
  }
});

export const resizeImages = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (images.length > 1) {
    images.map((item) => {
      const filenameArr = item.split('/');
      const filename = filenameArr[filenameArr.length - 1];
      sharp(item).resize(200, 200).toFile(`./assets/resized/${filename}`);
    });
  }
  next();
};
