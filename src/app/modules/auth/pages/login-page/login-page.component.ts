import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup= new FormGroup({});

  // dentro del contructor yo puedo hacer las inyecciones
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin= new FormGroup (
      {
      email: new FormControl('',[
        Validators.required,
        Validators.email,
              ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
      }
    )
  }

  sendLogin():void{
    const {email, password}= this.formLogin.value
    this.authService.sendCredentials(email,password)

  }
}
