# Ingredient Math

This library is for converting recipe ingredients based on a serving size factor.

## Installation
```js
	yarn add ingredient-math
```

### Example
```js
const ingredient = "1 teaspoon sugar"
const servingsFactor(2)

> IngredientMath.convertIngredient(ingredient, servingsFactor)
// "2 teaspoons sugar"
```

It will also automatically calculate and convert units: 
```js
const ingredient = "1 teaspoon sugar"
const servingsFactor(3)

> IngredientMath.convertIngredient(ingredient, servingsFactor)
# "1 tablespoon sugar"
```


