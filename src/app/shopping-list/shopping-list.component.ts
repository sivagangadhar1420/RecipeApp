import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from  '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  //@ViewChild('f', {static:false}) AddingForm:NgForm;

private shoppingsubscription:Subscription;

ingredients:Ingredient[];
  
constructor(private slService:ShoppinglistService) { }

  ngOnInit() {
  this.ingredients=this.slService.ingredients; 
  this.shoppingsubscription=this.slService.shoppingSelected.subscribe(
    
      (ingredientses : Ingredient[]) =>
      {
        this.ingredients=ingredientses;
    //  alert("changesNewNw Items:" +ingredientses)
       }  );
    }
    OnEditing(index:number){
  this.slService.startEditing.next(index);
    }
   

  OnDelete()
  {
     this.ingredients.pop();
    //  this.ingredients.slice();

  }
  OnClear(){
    
  //console.log(this.ingredients);
 // this.AddingForm.value;
  //this.ingredients=[];
  
  }
  ngOnDestroy(){
  this.shoppingsubscription.unsubscribe();
  }


 }
// OR
      
 /*OnShoppingAdded(shopping:{shoppingName:string,shoppingAmount:number}){
   this.ingredients.push({
     names:shopping.shoppingName, 
      amount:shopping.shoppingAmount
     });
 
     }
     
}*/