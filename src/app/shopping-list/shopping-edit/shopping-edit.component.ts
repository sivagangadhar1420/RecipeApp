import { Component, OnInit,ViewChild, ElementRef, Input, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];

//@ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
//@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
editMode=false;
editItemIndex: number;
editedItem: Ingredient;
@ViewChild('f',{static:false}) AddingForm: NgForm;
@ViewChild('f', {static:false}) slForm:NgForm;
private subscription:Subscription;
edit="";
editer=" ";

constructor(private slService:ShoppinglistService) { }

  ngOnInit() {
  this.subscription=  this.slService.startEditing.subscribe(
      (index:number)=>{
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.names,
          amount:this.editedItem.amount
        })


      }
    );
  }

  OnAdditems(){

    /*
    
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredients=new Ingredient(ingName, ingAmount);
   this.slService.addIngredient(newIngredients);
   OR
    */
   const value=this.AddingForm.value;
   const newIngredients=new Ingredient(value.name, value.amount);
   if(this.editMode){
     this.slService.UpdateItems(this.editItemIndex,newIngredients);
   }
   else {
     (this.slService.addIngredient(newIngredients));
    }
    this.editMode=false;
    this.AddingForm.reset(); 

 }
 OnClear(){
  // this.slForm.reset();
  this.AddingForm.reset();
   this.editMode=false;
 }
 OnDelete(index:number){
this.slService.deleteItems(index);
this.OnClear();
 }
   
 ngOnDestroy(){
   this.subscription.unsubscribe();

 }

}
  

 
  //this.slService.shoppingSelected.emit(this.ingredients) 
 
  /* (OR) 
  @Output() shoppingSelected=new EventEmitter< { shoppingName: string, shoppingAmount: string} >(); */

  /*(OR1) 
  @Output() shoppingSelected=new EventEmitter<Ingredient>(); */
 
  //newShoppingName= '';
  //newShoppingAmount=' ' ;

  
 /* constructor() { }

  ngOnInit() {
  }
  */
   
  /*
   (OR)
  OnAddShopping() {
    this.shoppingSelected.emit({
    shoppingName:  this.newShoppingName,
    shoppingAmount: this.newShoppingAmount 
  });
}
} */
    
  /* (OR1) 
   OnAddShopping(ingredients:Ingredient) {
    this.shoppingSelected.emit(ingredients);
      }
    } */
    

   /* newshopping(){
      this.newShoppingName = (<HTMLInputElement>event.target).value
      this.newShoppingAmount = (<HTMLInputElement>event.target).value
    }*/
