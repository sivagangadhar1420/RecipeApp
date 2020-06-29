import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
// selectedRecipe:Recipe;
//private recipesubscription:Subscription;

 constructor(private recipeServices:RecipeService ) { }

 ngOnInit() { }
  
 /* this.recipesubscription= this.recipeServices.recipeSelected.subscribe(
        (recipeees: Recipe) => 
        {
         this.selectedRecipe = recipeees;
        alert("selected REcipe:" +recipeees);
        }
        
       ); }    
    
    ngOnDestroy(){
      this.recipesubscription.unsubscribe();
    }     */
  }


   /* this.recipeServices.recipeSelected .subscribe(
  function(recipe:Recipe) {
    this.selectedRecipe = recipe;
    alert("selected REcipe:" +recipe);
  }
); /*



}
 */
 //}

