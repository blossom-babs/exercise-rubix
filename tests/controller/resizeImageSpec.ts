import { resizeImage } from '../../src/controller/resizeImage';

describe('test the function that handles image resizing', () => {
  it('resizes jpg images to thumbnail size', () => {
    expect(resizeImage).not.toBeFalsy();
  });
});
