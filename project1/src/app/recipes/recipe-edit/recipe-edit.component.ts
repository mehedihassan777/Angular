import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  inputImgScr: string;
  constructor(private route: ActivatedRoute, private recSer: RecipeService) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let dis = '';
    if (this.editMode) {
      recipeName = this.recSer.getRecipe(this.id).name;
      this.inputImgScr = this.recSer.getRecipe(this.id).imagePath;
      dis = this.recSer.getRecipe(this.id).description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'inputImgScr': new FormControl(this.inputImgScr),
      'dis': new FormControl(dis)
    });
  }

  onSubmit() {

  }
}
