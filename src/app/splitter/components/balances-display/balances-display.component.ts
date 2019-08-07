import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy
 } from '@angular/core';

 import {
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'balances-display',
  templateUrl: './balances-display.component.html',
  styleUrls: ['./balances-display.component.scss']
})
export class BalancesDisplayComponent implements OnInit {

  @Input() title :string;
  @Input() detail: string;

  @Output() add = new EventEmitter<Object>();

  hide :boolean = true;

  form = this.fb.group({
    address: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(42),
        Validators.maxLength(42)
      ])],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  get addressControl() {
    return this.form.get('address') as FormControl;
  }

  get addressControlInvalid() {
    return this.addressControl.hasError('required') && this.addressControl.touched;
  }

  get addressControlLengthInvalid() {
    return this.addressControl.hasError('maxlength') || this.addressControl.hasError('minlength');
  }


  addAddress(){
    this.add.emit({
      address : this.addressControl.value,
    });
  }

}
