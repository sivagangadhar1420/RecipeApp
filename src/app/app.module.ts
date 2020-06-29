import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeService } from './recipes/recipe.service';
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
//import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
//import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesDetailsComponent,
    RecipesStartComponent,
    RecipesEditComponent,
  //  RecipesStartComponent,
    // RecipeEditComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  
    
  ],
  providers: [RecipeService,ShoppinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
