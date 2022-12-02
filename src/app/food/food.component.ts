import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class foodComponent implements OnInit {
  food !: Food[];
  constructor(private foodService : FoodService) {
    //this.food = foodService.listefood();
  }

  ngOnInit(): void {
    this.chargerFood();
  }

  chargerFood(){
    this.foodService.listefood().subscribe(foods => {
      console.log(foods);
      this.food = foods;
    });
  }
  supprimerfood( p: Food)
{
let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.foodService.supprimerfood(p.idFood).subscribe(() => {
    console.log("produit supprimé");
    this.chargerFood();
 
});
} 

  
  




}
