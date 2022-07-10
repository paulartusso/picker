import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'picker';
  lists: boolean = false;
  foodList: boolean = false;
  foods: any = []
  modal: boolean = false;
  random: any;
  newFood: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.foods = ["pizza", "ensalada", "pasta", "Comida 4", "Comida 5", "Comida 6", "+ hardcode"]
  }

  addNewFood() {
    console.log(this.newFood)
    this.newFood == ""
  }

  navigateToFoodList() {
    this.lists = true;
    this.foodList = true;
  }

  backHome() {
    this.lists = false;
    this.foodList = false;
    this.modal = false;
  }

  getRandom() {
    this.random = Math.floor(Math.random() * this.foods.length);
    console.log(this.foods[this.random])
    this.modal = true;
    console.log(this.modal)
    return this.foods[this.random]
  }

}


