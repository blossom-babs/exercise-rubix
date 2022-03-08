import sharp from 'sharp';

export const resizeImage = async () => {
  const transformer = sharp('./assets/original/encenadaport.jpeg')
    .resize(200, 200)
    .toFile('./assets/edited/encenadaport.jpeg', (err) => console.log(err));
  return transformer;
};
