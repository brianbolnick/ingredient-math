import { Greeter } from '../index';
import convertIngredients, { convertIngredient, getParsedIngredient } from '../index';

describe('getParsedIngredient', () => {
  it('should return fractions as decimals', () => {
    const ing = '3/4 C of chocolate';
    const result = getParsedIngredient(ing);
    expect(result.quantity).toEqual('0.75');
  });

  it('should return the first value of a range', () => {
    const ing = '75-100 grams of flour';
    const result = getParsedIngredient(ing);
    expect(result.quantity).toEqual(75);
  });

  it('should return null with no quantity provided', () => {
    const ing = 'salt and pepper to taste';
    const result = getParsedIngredient(ing);
    expect(result.quantity).toEqual(null);
  });

  it('should return the same value for whole numbers', () => {
    const ing = '4 gallons water';
    const result = getParsedIngredient(ing);
    expect(result.quantity).toEqual(4);
  });

  //TODO: figure this out since recipe parser
  //gives back the wrong value
  //it('should return the same value for decimals', () => {
  //const ing = '.5 cups gallons water';
  //const result = getParsedIngredient(ing);
  //expect(result.quantity).toEqual(0.5);
  //});
});

describe('convertIngredient', () => {
  it('parses ingredient strings and returns an object with converted values', () => {
    const ing = '1 teaspoon sugar';
    const result = convertIngredient(ing, 1);
    expect(result.quantity).toEqual(1);
    expect(result.unit).toEqual('teaspoon');
    expect(result.ingredient).toEqual('sugar');
  });

  it('should return an object with the same values if servings is 1', () => {
    const ing = '1 Tbsp fine grated kosher salt';
    const result = convertIngredient(ing, 1);
    expect(result.quantity).toEqual(1);
    expect(result.unit).toEqual('tablespoon');
    expect(result.ingredient).toEqual('fine grated kosher salt');
  });

  it('should handle ingredients with no measurement', () => {
    const ing = 'salt and pepper to taste';
    const result = convertIngredient(ing, 1);
    expect(result.quantity).toEqual(null);
    expect(result.unit).toEqual(null);
    expect(result.ingredient).toEqual('salt and pepper to taste');
  });

  it('converts whole numbers properly', () => {
    const ing = '2 cups of whole milk';
    const result = convertIngredient(ing, 2);
    expect(result.quantity).toEqual(4);
    expect(result.unit).toEqual('cups');
    expect(result.ingredient).toEqual('of whole milk');
  });

  it('pluralizes units when necessary', () => {});

  it('converts fractions properly', () => {});
  it('simplifies fractions', () => {});
  it('converts fractions mixed numbers when necessary', () => {});
  it('properly converts teaspoons to tablespoons', () => {});
  it('properly converts tablespoons to cups', () => {});
  it('properly converts tablespoons to cups', () => {});
  it('properly converts tablespoons to cups', () => {});
});

describe('convertIngredients', () => {
  it('should convert a list of ingredients with the proper result', () => {
    const ing = '1 tsp sugar';
    const result = convertIngredients([ing], 2);

    expect(result[ing].quantity).toEqual(2);
    expect(result[ing].unit).toEqual('teaspoons');
    expect(result[ing].ingredient).toEqual('sugar');
  });
});

describe('convertGrams', () => {
  it('converts values to grams', () => {});
});
