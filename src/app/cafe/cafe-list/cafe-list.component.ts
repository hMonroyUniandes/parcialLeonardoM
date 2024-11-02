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
  cafeorigen: number = 0;
  cafeblend: number = 0;

  constructor(private cafeService: CafeService) {

   }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.cafeService.getCafes().subscribe({
      next: (cafe) => {
        this.cafes = cafe;
        this.cafeorigen = cafe.filter(c => c.tipo == 'Café de Origen').length;
        this.cafeblend = cafe.filter(c => c.tipo == 'Blend').length;
      },
      error: (error) => {
        console.error('Error al consultar la informacion', error);
      }
    });
  }

}
