import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    selectedRecipe = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x375.jpg', [new Ingredient('Meat', 1), new Ingredient('potato', 5)]),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUIkTty2dBJMrXHu8npZfaAWWz7GkEvDM8A&usqp=CAU', [new Ingredient('Meat', 1), new Ingredient('potato', 5)]),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/beefstewwithdumpling_87333_16x9.jpg', [new Ingredient('Meat', 1), new Ingredient('potato', 5)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(i: number) {
        return this.recipes[i];
    }
}