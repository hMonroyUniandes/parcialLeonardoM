import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) {

   }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.cafeService.getCafes().subscribe({
      next: (cafe) => {
        this.cafes = cafe;
      },
      error: (error) => {
        console.error('Error al consultar la informacion', error);
      }
    });
  }

}
