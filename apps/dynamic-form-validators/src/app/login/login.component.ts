import { Component } from "@angular/core";
import LoginForm from "./login.form";

@Component({
    selector: 'acm-demos-login',
    styles: [
        `
            .login-form {
                display: flex;
                flex-direction: column;
            }
        `
    ],
    template: `
        <ng-container *ngIf="loginForm.valueChanged$ | async"></ng-container>

        <form [formGroup]="loginForm.group" class="login-form">
            <mat-form-field *ngIf="loginForm.group.get('email'); let email">
                <mat-label>Email</mat-label>
                <input matInput formControlName="email" type="email" />
                <mat-error *ngIf="email.errors?.['email'] || email.errors?.['required']">
                    A valid email address is required.
                </mat-error>
            </mat-form-field>

            <mat-form-field *ngIf="loginForm.group.get('age'); let age">
                <mat-label>Age</mat-label>
                <input matInput type="number" formControlName="age">
                <mat-error *ngIf="age.errors?.['required']">
                    Age is required.
                </mat-error>
            </mat-form-field>

            <ng-container *ngIf="loginForm.group.get('age')?.value < loginForm.minAge">
                <mat-form-field *ngIf="loginForm.group.get('parentEmail'); let parentEmail">
                    <mat-label>Parent Email</mat-label>
                    <input matInput formControlName="parentEmail" type="email">
                    <mat-error *ngIf="parentEmail.errors?.['email'] || parentEmail.errors?.['required']">
                        A valid email address is required.
                    </mat-error>
                </mat-form-field>
            </ng-container>

            <button mat-raised-button color="primary">Login</button>

            <h4>Form Valid: {{loginForm.group.valid}}</h4>
        </form>
    `,
    providers: [LoginForm]
})
export default class LoginComponent {
    constructor(public loginForm: LoginForm) {}
}