import { Component, OnInit } from '@angular/core';
import { recipeModel } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: recipeModel[];

  constructor(private recipesServices: RecipesService) { 
       
  }

  ngOnInit() {

    this.recipesServices.get().subscribe(recipesData => {
      this.recipes = <recipeModel[]>recipesData;
    });
  }

  

}
