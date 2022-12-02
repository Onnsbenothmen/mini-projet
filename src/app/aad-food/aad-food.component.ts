import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food.model';
import { FoodService } from '../services/food.service';
import { Choix } from '../model/choix.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aad-food',
  templateUrl: './aad-food.component.html',
  styleUrls: ['./aad-food.component.css']
})
export class AadFoodComponent implements OnInit {

  newfood = new Food();
  newIdChoix! : number;
  newChoix! : Choix;
  choix!: Choix[];
  
  constructor(private foodService : FoodService,private router :Router) { }

  ngOnInit(): void {
    this.foodService.listeChoix().
    subscribe(chx =>{this.choix = chx;
      console.log(chx);
       
    });

  }
  addFood(){
    this.newfood.choix = this.choix.find(chx => chx.idChoix == this.newIdChoix)!;
    this.foodService.ajouterfood(this.newfood)
    .subscribe(food => {
    console.log(food);
    this.router.navigate(['FOOD']);
    });
    }

}
