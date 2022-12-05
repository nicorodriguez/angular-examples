import { Component } from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    username;
    password;

    login(formData){
        console.log(formData);
    }
}