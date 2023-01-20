import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() detailRecipe: Recipe;
  constructor(private shoLiSer: ShoppingListService) { }
  AddToShoppingList() {
    for (let ingredient of this.detailRecipe.ingredients)
      this.shoLiSer.newIngredient(ingredient);
  }
}
