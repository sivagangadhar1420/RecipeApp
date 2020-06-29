import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
 import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  
})
export class RecipesListComponent implements OnInit {
 //@Output() recipeWasSelected= new EventEmitter<Recipe>();
 
 recipes: Recipe[]; 

 
  constructor(private recipeServices:RecipeService ,
               private router: Router,
     private route: ActivatedRoute)
   {}
 ngOnInit() { 
         this.recipes=this.recipeServices.recipeses;
 //   this.recipes=this.recipeServices.writerecipes();

 } 
 OnEdit(){
   this.router.navigate(['new'], {relativeTo:this.route})
 }


}
/*   new Recipe('A Tasty Recipe', 'This_Is_A_Test_Recipy','assets/images/1.jpg'),
    new Recipe('Firing Recipe', 'This Is _OUR_recipy','assets/images/1.jpg')
  ];
  */