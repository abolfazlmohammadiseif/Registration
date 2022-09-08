import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //@ViewChild('f') signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

    //console.log(this.signupForm);
  }

}
