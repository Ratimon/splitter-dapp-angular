import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'account-display',
  templateUrl: './account-display.component.html',
  styleUrls: ['./account-display.component.scss']
})
export class AccountDisplayComponent implements OnInit {

  @Input() title :string;
  @Input() detail: string;

  constructor() { }

  ngOnInit() {
  }

}
