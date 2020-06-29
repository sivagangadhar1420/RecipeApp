import { Recipe} from './recipe.model';
//import { EventEmitter, Injectable } from '@angular/core';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()

export class RecipeService{
  //  recipeSelected=new EventEmitter<Recipe>();
  recipeSelected=new Subject();
       
   recipeses: Recipe[] = [
    
     /*   1 OR 2   private recipeses:Recipe[]=[
      new Recipe('A Tasty Recipe', 'This_Is_A_Test_Recipy','assets/images/2.jpg' ,
        [
          new Ingredient('Meat', 10),
          new Ingredient('FrenchFries' , 30)
        ]),
        new Recipe('Firing Recipe', 'This Is _OUR_recipy','assets/images/2.jpg' ,
        [
          new Ingredient('Icecreams', 10),
          new Ingredient('Burgers(Chicken)' , 30)
       
        ]
        )
      ];
    ]
     */

      new Recipe('A Tasty Recipe', 'Else AnyThing Is There To Select ','assets/images/2.jpg' ,
        [
          new Ingredient('Meat', 10),
          new Ingredient('FrenchFries' , 30)
        ]),
        new Recipe('Firing Recipe', 'Check A New Recipe We Have More','assets/images/2.jpg' ,
        [
          new Ingredient('Icecreams', 10),
          new Ingredient('Burgers(Chicken)' , 30)
       
        ]
        )
      ];
      constructor(private slServices:ShoppinglistService){}

      Addrecipe(recipes:Recipe){
      //  this.recipeses.push(recipes);
        this.recipeSelected.next(recipes);

      }
      Addshoppingtolist(ingredients:Ingredient[])
      {
        this.slServices.ingredientadded(ingredients);
        
        
      }
    
   getRecipes(index:number)
     {
       return this.recipeses.slice()[index];
       // return  this.recipeses.slice()[index];
      }  
    }
    
    /*  1 OR 2  writerecipes(){
      return  this.recipeses.slice();
     }
    }
    */
 
 /* getRecipes(){
         return this.recipes.slice();
      }  
       recipeSelected=new EventEmitter<Recipe>();

        private recipes: Recipe[] = [
        new Recipe('A Tasty Recipe', 'This_Is_A_Test_Recipy','assets/images/1.jpg'),
        new Recipe('Firing Recipe', 'This Is _OUR_recipy','assets/images/1.jpg')
      ];
      private_untey out side access cheyalemu or use anothter method to write the program

    */
//}