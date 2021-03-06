import { Ingredient } from '../shared/ingredient.model';
//import { Input } from '@angular/core';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
  
    constructor(name: string, desc: string, imagePath: string, ingredients:Ingredient[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
    }
  }
  /*OR
  export class Recipe{
   // constructor(public name:string, public description:string,public imagepath:string){}
  
  } */ 