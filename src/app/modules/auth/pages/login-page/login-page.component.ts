import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  errorSession:boolean=false
  formLogin: FormGroup= new FormGroup({});

  // dentro del contructor yo puedo hacer las inyecciones
  constructor(private authService: AuthService, private cookie : CookieService, 
    private router:Router ) { }

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
    .subscribe(responseOK =>{//ingresa credenciales correctas
      console.log('sesion iniciada correctamente',responseOK);
    const {tokenSession,data     }=responseOK
      this.cookie.set('token',tokenSession, 4,'/')
      this.router.navigate(['/','tracks'])
    },
    error=>  { //errores =<400
      this.errorSession=true
      console.log('error de mail o password');
      
    })

  }
}
