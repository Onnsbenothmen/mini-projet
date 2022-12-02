import { Injectable } from '@angular/core';
import {Food} from '../model/food.model';
import { Choix } from '../model/choix.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class FoodService {
  apiURL: string = 'http://localhost:8010/Food/api';
  apiURLChoix : string='http://localhost:8010/Food/choix';

  food! : Food[];
  Food!: Food;
  choix!: Choix[] 
  //Food: food = new food;
  constructor(private http:HttpClient) {
    // this.choix=[
    //   {idChoix:1,nomChoix:"healthyFood"},
    //   {idChoix:2,nomChoix:"junkFood"},

    // ]
    /*this.food = [
      {idfood : 1, nomfood : "pizza", prixfood : 12000, datePreparation: new Date("01/14/2011"),choix : {idChoix : 1, nomChoix : "healthyFood"}},
      {idfood : 2, nomfood : "kosksi", prixfood : 50000, datePreparation : new Date("12/17/2010"),choix : {idChoix : 2, nomChoix : "healthyFood"}},
      {idfood : 3, nomfood :"gâteau", prixfood : 65000, datePreparation : new Date(" 01/01/2022"),choix : {idChoix : 1, nomChoix : "junkFood"}},
    ];*/

  }
   listefood(): Observable<Food[]>{
    return this.http.get<Food[]>(this.apiURL);
    }

  ajouterfood( food: Food):Observable<Food>{
      return this.http.post<Food>(this.apiURL, food, httpOptions);
      }
      

  supprimerfood(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
     }
     
  consulterfood(id: number): Observable<Food> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Food>(url);
      }
  updateFood(prod :Food) : Observable<Food>
      {
      return this.http.put<Food>(this.apiURL, prod, httpOptions);
      }
trierfood(){
  this.food = this.food.sort((n1,n2) => {
  if (n1.idFood!>n2.idFood!){
       return 1;
  }
  if (n1.idFood! < n2.idFood!) {
       return -1;
  }
  return 0;
  }
  );}


  listeChoix():Observable<Choix[]>{
    return this.http.get<Choix[]>(this.apiURL+"/choix");
    }
    
    rechercherParChoix(idChoix: number):Observable< Food[]> {
      const url = `${this.apiURL}/foodschx/${idChoix}`;
      return this.http.get<Food[]>(url);
      }

      rechercherParNom(nom: string):Observable< Food[]> {
        const url = `${this.apiURL}/foodsByName/${nom}`;
        return this.http.get<Food[]>(url);
        }
        ajouterChoix( choix: Choix):Observable<Choix>{
          return this.http.post<Choix>(this.apiURLChoix, choix, httpOptions);
          }  
}
