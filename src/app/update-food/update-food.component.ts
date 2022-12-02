import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food.model';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Choix } from '../model/choix.model';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styles: [
  ]
})
export class UpdateFoodComponent implements OnInit {
  currentfood = new Food();
  choix! : Choix[];
  updatedChoixId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.listeChoix().
subscribe(choix => {this.choix = choix;
console.log(choix);});

  this.foodService.consulterfood(this.activatedRoute.snapshot.params['id'])
    .subscribe( food =>{ this.currentfood = food; 
    this.updatedChoixId = this.currentfood.choix.idChoix;
    
  });
  }
  updatefood() {

    this.currentfood.choix = this.choix.find(chx => chx.idChoix == this.updatedChoixId)!;
    this.foodService.updateFood(this.currentfood).subscribe(prod => {
    this.router.navigate(['FOOD']); }
    );
    }
}
