import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromCounterActions from './actions/counter.actions';
import * as fromStore from './reducers/reducers';
import * as fromCounterSelectors from './selectors/counter.selectors';
import { CounterState } from './models/counter.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title: string = 'The NGRX Counter App';
  public incrementLabel: string = 'button';
  public decrementLabel: string = 'button';
  public placeholderText: string = 'Nos:';
  public counterVal: number = 5;
  public newCounterVal: number;
  public counter$:  Observable<CounterState>;

  constructor(
    private _store: Store<fromStore.AppState>
  ) {
    this.counter$ = this._store.pipe(select(fromCounterSelectors.getCounterState));
  }

  public incrementCounter(counterValue: number): void {
    this.newCounterVal = counterValue;
    this.increaseCounterUp(counterValue);
  }

  public decrementCounter(counterValue: number): void {
    this.newCounterVal = counterValue;
    this.decreaseCounterUp(counterValue);
  }

  public increaseCounterUp(val: number): void {
    this._store.dispatch({
      type: fromCounterActions.INCREMENT_COUNTER,
      payload: val
    });
  }

  public decreaseCounterUp(val: number): void {
    this._store.dispatch({
      type: fromCounterActions.DECREMENT_COUNTER,
      payload: val
    });
  }


}
