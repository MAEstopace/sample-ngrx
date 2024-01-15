import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from '../../shared/store/counter.actions';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css',
})
export class CounterbuttonComponent {
  constructor(private store: Store<{ counter: number }>) {}

  OnIncrement() {
    this.store.dispatch(increment(1));
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }
}
