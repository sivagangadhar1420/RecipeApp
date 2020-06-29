
import{ Ingredient} from '../shared/ingredient.model';
//import { EventEmitter } from '@angular/core';
import { Subject} from 'rxjs';

export class ShoppinglistService {
  
 
  //  shoppingSelected=new EventEmitter<Ingredient[]>();
  shoppingSelected=new Subject<Ingredient[]>();
  startEditing= new Subject<number>();
 
  ingredients:Ingredient[]=[
        new Ingredient('Apple',5) ,
        new Ingredient('orange',7)
        ];
    
        /* getIngredient(){
            return this.ingredients.slice();
         }  */
         
         getIngredient(index:number){
            return this.ingredients[index];
         }

addIngredient(ingredientss:Ingredient)
   {
    this.ingredients.push(ingredientss);
    this.shoppingSelected.next(this.ingredients);
  // this.shoppingSelected.emit(this.ingredients);

   }

ingredientadded(ingredient:Ingredient[])
{
this.ingredients.push(...ingredient);
this.shoppingSelected.next(this.ingredients);
}
UpdateItems(index:number, newIngredient:Ingredient){
   this.ingredients[index]=newIngredient;
   this.shoppingSelected.next(this.ingredients.slice());

}
deleteItems(index:number){
   this.ingredients.splice(index,1);
   this.shoppingSelected.next(this.ingredients.slice());
}
    }
