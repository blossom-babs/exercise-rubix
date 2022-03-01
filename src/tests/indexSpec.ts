import { textEditor } from "../index";

it('expects textEditor to return a string', () => {
  expect (textEditor('The movie that just came out is a phenomenal movie')).toEqual('The film that just came out is a phenomenal film')
})

