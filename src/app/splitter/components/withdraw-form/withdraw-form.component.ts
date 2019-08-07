import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy
 } from '@angular/core';

@Component({
  selector: 'withdraw-form',
  templateUrl: './withdraw-form.component.html',
  styleUrls: ['./withdraw-form.component.scss']
})
export class WithdrawFormComponent implements OnInit {

  @Output() withdraw = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  withdrawValue(){
    this.withdraw.emit(null);
  }
  

}
