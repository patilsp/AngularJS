import { Component, OnInit } from '@angular/core';

import {Recipe } from './recipe.model';
import {RecipesService} from './recipe.service';
import { RecipeService } from '../shopping-list/shopping-list.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
