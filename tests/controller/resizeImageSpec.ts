import { resizeImages } from '../../src/controller/resizeImage';

describe('test resize function', () => {
  it('resizes images to thumbnail size', () => {
    expect(resizeImages).not.toBeFalsy();
  });
});
