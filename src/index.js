import { parse } from 'recipe-ingredient-parser';
import Fraction from 'fraction.js';

/**
 * Maps an ingredient string to a parsed result
 * using `recipe-ingredient-parser` and calculates new
 * serving sizes based on a passed in servings factor.
 *
 * Ex:
 * 	> createParsedIngredients(["3 Tbsp Sugar"], 2)
 *
 *		{
 *			"3 Tbs Sugar": {
 *				quantity: 6,
 *				unit: "tablespoon",
 *				ingredient: "sugar"
 *			}
 *		}
 **/
const convertIngredients = (ingredients, servingFactor = 1) => {
  return ingredients.reduce((acc, ing) => {
    return {
      ...acc,
      [acc[ing]]: convertIngredient(ing),
    };
  }, {});
};

export const convertIngredient = (ing, servingFactor) => {
  const parsedIng = parse(ing.toLowerCase());
  const { quantity, unit, ingredient } = parsedIng;

  const formattedQuantity = calculateQuantity(quantity, servingFactor);

  return {
    quantity: formattedQuantity,
    unit,
    ingredient,
  };
};

/**
 * Calculates the appropriate quantity size
 * based on the serving size
 */
const calculateQuantity = (quantity, serving) => {
  const newQuantity = parseInt(quantity) * serving;

  const newQuantityType = getQuantityType(newQuantity);
  const quantityType = getQuantityType(quantity);

  if (quantityType === 'fraction' || newQuantityType === 'fraction') {
    const frac = createFraction(quantity);
    const value = frac.mul(serving);
    return convertImproperFraction(value);
  }

  if (newQuantity === 'empty') return '';

  return newQuantity;
};

/**
 *	Converts an improper fraction into a reduced
 *  and normalized fraction
 **/
const convertImproperFraction = fraction => {
  const numerator = fraction.n;
  const denominator = fraction.d;

  if (numerator % denominator === 0) {
    return numerator / denominator;
  }

  const mix = Math.floor(numerator / denominator);
  const newNumerator = numerator % denominator;
  return `${displayMix(mix)}${newNumerator}/${denominator}`;
};

const createFraction = val => {
  return new Fraction(parseInt(val)).simplify();
};

/**
 *	Helper for displaying mixed fractions
 **/
const displayMix = mix => {
  if (mix) return `${mix} `;
  return '';
};

const getQuantityType = quantity => {
  const frac = createFraction(quantity);
  if (frac.d === 1) return 'number';
  if (isNaN(frac.n) || isNaN(frac.d)) return 'empty';

  return 'fraction';
};

export default convertIngredients;
