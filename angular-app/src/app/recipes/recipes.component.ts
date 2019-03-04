import { Component, OnInit } from '@angular/core';
import { recipeModel } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipeModel:recipeModel;
  constructor(private recipesService:RecipesService) { 
    this.recipeModel=<recipeModel>{};
  }

  ngOnInit() {
  }

  recipes(){
    this.recipesService.postServerRecipes(this.recipeModel).subscribe(d =>{
      console.log('ok');
    })
     
   }

}
