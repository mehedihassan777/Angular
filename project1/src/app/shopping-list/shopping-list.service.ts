import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredient() {
        return this.ingredients.slice();
    }

    newIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}