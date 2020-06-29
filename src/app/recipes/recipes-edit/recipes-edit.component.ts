import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {  FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
//import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  recipeForm:FormGroup;
id:number;
editMode=false;
// 12 retriving parametrs (Routing )
  constructor(private route:ActivatedRoute,
    private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (  params:Params ) => {
        this.id= +params['id'];
        this.editMode= params['id'] != null;
        console.log(this.editMode);
        this.initForm();
   }
    );
  }
  
  OnSubmitForm(){
    console.log(this.recipeForm);
  }
  OnAddIngredient(){
    (<FormArray>this.recipeForm.get('Ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
                                       Validators.pattern(/^[1-9]+[]0-9]*$/)])
      })
    );
  }
  initForm(){
    let RecipeName='';
    let RecipeImagepath='';
    let RecipeDescription='';
    let RecipeIngredients= new FormArray([]);

    if(this.editMode){
      const items= this.recipeService.getRecipes(this.id);
      RecipeName=items.name;
      RecipeImagepath=items.imagePath;
      RecipeDescription=items.description;
      // name,imagepath,description in model .ts file
      if(items['ingredients']) {
        for(let ingredient of items.ingredients){
          RecipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.names, Validators.required),
                'amount': new FormControl(ingredient.amount,[
                  Validators.required,
                  Validators.pattern(/^[1-9]+[]0-9]*$/)
                ]),
                  })
          );
       }
  }
    
}

  this.recipeForm= new FormGroup({
    'Name': new FormControl(RecipeName),
    'Imagepath': new FormControl(RecipeImagepath),
    'Description': new FormControl(RecipeDescription),
    'Ingredients': RecipeIngredients
    });
  }


}
