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
  selector: 'split-form',
  templateUrl: './split-form.component.html',
  styleUrls: ['./split-form.component.scss']
})
export class SplitFormComponent implements OnInit {

  hide :boolean = true;

  @Output() split = new EventEmitter<Object>();

  form = this.fb.group({
    firstRecipient: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(42),
        Validators.maxLength(42)
      ])],

    secondRecipient: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(42),
        Validators.maxLength(42)
      ])],

    amount: [
      '',
      Validators.compose([
        Validators.required,
        Validators.min(0)
      ])]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  get firstRecipientControl() {
    return this.form.get('firstRecipient') as FormControl;
  }

  get secondRecipientControl() {
    return this.form.get('secondRecipient') as FormControl;
  }

  get amountControl() {
    return this.form.get('amount') as FormControl;
  }

  get firstRecipientControlInvalid() {
    return this.firstRecipientControl.hasError('required') && this.firstRecipientControl.touched;
  }

  get firstRecipientControlLengthInvalid() {
    return this.firstRecipientControl.hasError('maxlength') || this.firstRecipientControl.hasError('minlength');
  }

  get secondRecipientControlInvalid() {
    return this.secondRecipientControl.hasError('required') && this.secondRecipientControl.touched;
  }

  get secondRecipientControlLengthInvalid() {
    return this.secondRecipientControl.hasError('maxlength') || this.secondRecipientControl.hasError('minlength');
  }

  get amountControlInvalid() {
    return this.amountControl.hasError('required') && this.amountControl.touched;
  }

  get amountControlMinInvalid() {
    return this.amountControl.hasError('min');
  }

  splitValue(){
    // console.log('form',this.firstRecipientControl.value);
    this.split.emit({
      firstRecipient : this.firstRecipientControl.value,
      secondRecipient : this.secondRecipientControl.value,
      amount: this.amountControl.value
    });
  }

}
