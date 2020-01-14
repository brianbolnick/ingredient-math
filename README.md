# Ingredient Math

This library is for converting recipe ingredients based on a serving size factor.

### Example
```
const ingredient = "1 teaspoon sugar"
const servingsFactor(2)

IngredientMath.convertIngredient(ingredient, servingsFactor)
 --> "2 teaspoons sugar"
```

It will also automatically calculate and convert units: 
```
const ingredient = "1 teaspoon sugar"
const servingsFactor(3)

IngredientMath.convertIngredient(ingredient, servingsFactor)
--> "1 tablespoon sugar"
```


