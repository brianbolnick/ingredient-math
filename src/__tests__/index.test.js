import { Greeter } from '../index';
import convertIngredients, { convertIngredient } from '../index';

//test('My Greeter', () => {
//expect(Greeter('Carl')).toBe('Hello Carl');
//});
describe('convertIngredient', () => {
  it('should convert things', () => {
    const result = convertIngredient('1 tsp sugar', 2);
    expect(result).toEqual('WRONG');
  });
});

//const ingredients = ["1 tablespoon sugar"]
//createParsedIngredients(ingredients)
