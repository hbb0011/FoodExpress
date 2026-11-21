import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RestaurantList } from './restaurant-list';
import { RestaurantService } from '../../services/restaurant';

describe('RestaurantList', () => {
  let component: RestaurantList;
  let fixture: ComponentFixture<RestaurantList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantList],
      providers: [
        {
          provide: RestaurantService,
          useValue: {
            getRestaurants: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});