# Ingredient Math

This library is for converting recipe ingredients based on a serving size factor.

## Installation
```js
yarn add ingredient-math
```

### Example
```js
import { convertIngredient } from 'ingredient-math';

const ingredient = "1 teaspoon sugar"
const servingsFactor(2)

> convertIngredient(ingredient, servingsFactor)
{
	quantity: "2",
	unit: "teaspoons"
	ingredient: "sugar"
}
```

It will also automatically calculate and convert units: 
```js
import { convertIngredient } from 'ingredient-math';

const ingredient = "1 teaspoon sugar"
const servingsFactor(3)

> convertIngredient(ingredient, servingsFactor)

{
	quantity: "3",
	unit: "tablespoons"
	ingredient: "sugar"
}
```


