import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
//import{ ShoppinglistService } from '../shopping-list/shopping-list.service';
import { ActivatedRoute, Params,Router} from '@angular/router';
import { Subscription } from 'rxjs';
// import { ShoppinglistService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes-details',
     templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
 recipedetail:Recipe ;
 id1:number ;
 //detailsubscription:Subscription;
 
 constructor(private recipeservices: RecipeService,
  private router: Router,
 // private slist: ShoppinglistService,
            private route: ActivatedRoute){}
    
  ngOnInit() { 
 //const id=this.route.snapshot.params['id'];
 //this.detailsubscription
this.route.params.subscribe(
  (params:Params) => {
   this.id1= +params['id'];
     this.recipedetail=this.recipeservices.getRecipes(this.id1);  
  //  alert("NewRecipeswasSelected:" +params)
} 
 ); }  

OnAddShoppingList() {
  this.recipeservices.Addshoppingtolist(this.recipedetail.ingredients)
    } 
     ToEditlist(){
      // this.router.navigate(['edit'], {relativeTo: this.route});
       this.router.navigate(['../' ,this.id1, 'edit'], {relativeTo:this.route});
     }
    // ngOnDestroy(){
      // this.detailsubscription.unsubscribe();
     //}
   }



 /*clicks = false;
 sclick()
{
  this.clicks = !this.clicks;
}  */

 

