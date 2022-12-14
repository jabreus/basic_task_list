import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      const username = this.validateForm.value.username;
      const password = this.validateForm.value.password;
      this.userService.signinUser(username, password).subscribe((res:any)=>{
        if(res==='0'){
          window.alert("No such user");
        }else{
          this.userService.setToken(res.accessToken);
          this.router.navigate(['/tasks']);
        }
      });

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder, private router: Router, private userService: UserService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null,[Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
