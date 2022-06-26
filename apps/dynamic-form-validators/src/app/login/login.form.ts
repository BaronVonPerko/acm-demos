import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, tap } from "rxjs";

@Injectable()
export default class LoginForm {
    group!: FormGroup;    
    minAge = 13;
    valueChanged$: Observable<null> | undefined;

    constructor() {
        this.group = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            age: new FormControl('', [Validators.required]),
            parentEmail: new FormControl(''),
        });

        this.valueChanged$ = this.group.get('age')?.valueChanges
        .pipe(
            tap(age => {
                const parentEmailCtrl = this.group.get('parentEmail');

                if (age && age < this.minAge) {
                    parentEmailCtrl?.setValidators([Validators.required, Validators.email])
                } else {
                    parentEmailCtrl?.clearValidators();
                }

                parentEmailCtrl?.updateValueAndValidity();
            })
        );
    }
}