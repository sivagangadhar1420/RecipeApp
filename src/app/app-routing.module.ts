
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recepient', pathMatch: 'full' },
  { path: 'recepient', component: RecipesComponent, children: [
   { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipesEditComponent},
    { path: ':id/edit', component: RecipesEditComponent },
 
    { path: ':id', component: RecipesDetailsComponent },
        
 
  ] },
  { path: 'slist', component: ShoppingListComponent },
];
@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinngCompponent=[RecipesComponent,ShoppingListComponent,RecipesDetailsComponent];
  

/*import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript-angular/router";

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';

export const COMPONENTS = [RecipesComponent, ShoppingListComponent,RecipeStartComponent,RecipesDetailsComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(recipe:rest//shoppinglist:slist)", pathMatch: "full" },
    { path: "",  },
    { path: "rest", component: RecipesComponent, outlet: "recipe",  children:
    [
      {path: 'Recipes', component: RecipesComponent , children:
       [
        {path: '' , component: RecipeStartComponent },
         {path:'id', component: RecipesDetailsComponent},

            ]
           },
    { path: "slist", component: ShoppingListComponent, outlet: "shoppinglist" },

    ] },
  

    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { } 
*/
