/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { Cafe } from '../cafe';


class MockCafeService {
  getCafes() {
    return of([
      new Cafe(1, 'Café Especial para tí', 'Blend', 'Angelópolis, Antioquia', 'Panela, Durazno, Caramelo', 1920, 'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg'),
      new Cafe(2, 'Café Especial Navegante', 'Café de Origen', 'Guatapé, Antioquia', 'Cítrico, Naranja, Cacao', 1800, 'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png'),
      new Cafe(3, 'Café Especial El Prístino', 'Blend', 'Chinchiná, Caldas', 'Chocolate negro, Caramelo', 1700, 'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png'),
    ]);

  }
}

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let cafeService: CafeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      providers: [{ provide: cafeService, useClass: MockCafeService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CafeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
