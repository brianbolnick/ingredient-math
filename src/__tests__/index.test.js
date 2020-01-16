import { Greeter } from '../index';
import convertIngredients, { convertIngredient, calculateQuantity } from '../index';

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

  it('converts fractions properly', () => {
    const ing = '1/3 Qt Goat Milk';
    const result = convertIngredient(ing, 2);
    expect(result.quantity).toEqual('2/3');
    expect(result.unit).toEqual('quarts');
    expect(result.ingredient).toEqual('goat milk');
  });

  it('should return the first value of a range', () => {
    const ing = '75-100 grams of flour';
    const result = convertIngredient(ing, 1);
    expect(result.quantity).toEqual(75);
    expect(result.unit).toEqual('grams');
    expect(result.ingredient).toEqual('of flour');
  });

  it('simplifies fractions', () => {});

  it('converts fractions mixed numbers when necessary', () => {
    const ing = '3/4 c of flour';
    const result = convertIngredient(ing, 2);
    expect(result.quantity).toEqual('1 1/2');
    expect(result.unit).toEqual('cup');
    expect(result.ingredient).toEqual('of flour');
  });

  //TODO:
  it('properly converts teaspoons to tablespoons', () => {});
  it('properly converts tablespoons to cups', () => {});
  it('properly converts tablespoons to cups', () => {});
  it('properly converts tablespoons to cups', () => {});
});

describe('convertIngredients', () => {
  it('should convert a list of ingredients with the proper result', () => {
    const ings = [
      '1/3 Qt Goat Milk',
      '2 quart Chives',
      '1 Qt Tea',
      '1/4 Tbsp Chives',
      '2 Tbsp Tom Yum',
      '2 gallon Peaches',
      '2 C Broccolini',
      '3 Qt Duck',
      '3 C Snowpea sprouts',
      '3 C Whiting Wild Rice',
      '1/4 Qt Mackerel',
      '1/2 gallon Sun dried tomatoes',
      '1/3 Pint Peaches',
    ];
    const result = convertIngredients(ings, 2);

    const expectedRes = {
      '1/3 Qt Goat Milk': { quantity: '2/3', unit: 'quarts', ingredient: 'goat milk' },
      '2 quart Chives': { quantity: 4, unit: 'quarts', ingredient: 'chives' },
      '1 Qt Tea': { quantity: 2, unit: 'quarts', ingredient: 'tea' },
      '1/4 Tbsp Chives': { quantity: '1/2', unit: 'tablespoon', ingredient: 'chives' },
      '2 Tbsp Tom Yum': { quantity: 4, unit: 'tablespoons', ingredient: 'tom yum' },
      '2 gallon Peaches': { quantity: 4, unit: 'gallons', ingredient: 'peaches' },
      '2 C Broccolini': { quantity: 4, unit: 'cups', ingredient: 'broccolini' },
      '3 Qt Duck': { quantity: 6, unit: 'quarts', ingredient: 'duck' },
      '3 C Snowpea sprouts': { quantity: 6, unit: 'cups', ingredient: 'snowpea sprouts' },
      '3 C Whiting Wild Rice': { quantity: 6, unit: 'cups', ingredient: 'whiting wild rice' },
      '1/4 Qt Mackerel': { quantity: '1/2', unit: 'quart', ingredient: 'mackerel' },
      '1/2 gallon Sun dried tomatoes': { quantity: 1, unit: 'gallon', ingredient: 'sun dried tomatoes' },
      '1/3 Pint Peaches': { quantity: '2/3', unit: 'pints', ingredient: 'peaches' },
    };

    expect(result).toEqual(expectedRes);
  });
});

describe('convertGrams', () => {
  //TODO:
  it('converts values to grams', () => {});
});
