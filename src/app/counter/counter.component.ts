import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  @Input('increment-label') incrementLabel: string = '';
  @Input('decrement-label') decrementLabel: string = '';
  @Input('placeholder-text') placeholderText: string = '';
  @Input('initial-value') initialValue: number;
  @Output('on-upward-vote') onUpwardVote: EventEmitter<any> = new EventEmitter();
  @Output('on-downward-vote') onDownwardVote: EventEmitter<any> = new EventEmitter();
  public counter: number;

  ngOnInit() {
    this.counter = (this.initialValue) ? this.initialValue : 0 ;
  }

  public upCounter(): void {
    this.initialValue = this.counter = this.counter += 1;
    this.onUpwardVote.emit(this.counter);
  }

  public downCounter(): void {
    if ((this.counter - 1) > -1) {
      this.initialValue = this.counter = this.counter -= 1;
      this.onDownwardVote.emit(this.counter);
    }
  }

  public updateCounterValueFromInput(evt): void {
    const numbersOnly = new RegExp(/\d+/, 'g');
    if ((evt.target.value !== '') && (numbersOnly.test(evt.target.value))) {
      if (evt.target.value > this.counter) {
        this.initialValue = this.counter = parseInt(evt.target.value, 10);
        this.onUpwardVote.emit(this.counter);
        return;
      }
      if (evt.target.value < this.counter) {
        this.initialValue = this.counter = parseInt(evt.target.value, 10);
        this.onDownwardVote.emit(this.counter);
        return;
      }
    }
  }
}
