import { Component, OnInit, inject } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-recu-pass',
  templateUrl: './recu-pass.page.html',
  styleUrls: ['./recu-pass.page.scss'],
})
export class RecuPassPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  firebaseSvc = inject(FirebaseService)

  ngOnInit() {
  }

  submit() {
    if(this.form.valid){
        this.firebaseSvc.ingresar(this.form.value as User).then(res => {
          console.log(res);
          
        })
    }
  }
}
