import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },

      {
        id: 2,
        title: 'banana',
        price: 20.5,
        quantity: 7,
        completed: false
      },

      {
        id: 3,
        title: 'pera',
        price: 5.5,
        quantity: 5,
        completed: false
      },

      {
        id: 4,
        title: 'zapallo',
        price: 7.5,
        quantity: 2,
        completed: true
      },

      {
        id: 5,
        title: 'cebolla',
        price: 5.5,
        quantity: 3,
        completed: false
      }
    ]
  }

}
