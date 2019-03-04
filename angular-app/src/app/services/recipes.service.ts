import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpClient: HttpClient) { }

  postServerRecipes(d: recipeModel): Observable<object> {
    return this.httpClient.post<object>('http://localhost:8888/recipes', d)
  }

  get(): Observable<object>{
    return this.httpClient.get<recipeModel>('http://localhost:8888/recipes');

  }
}
