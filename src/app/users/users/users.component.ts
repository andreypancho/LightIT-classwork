import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

function inputValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'Only 4-9': {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public fb = new FormGroup({
    title: new FormControl('', [inputValidator(/[1-3]/), Validators.required, Validators.minLength(10)]),
  });

  constructor() {

  }

  ngOnInit() {
  }
  
}
