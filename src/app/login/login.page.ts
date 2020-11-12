import { ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastr: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['/register']
    )
  }//end register

  async login(){
    if(this.email && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'Loging in...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.auth.login(this.email, this.password)
      .then(()=>{
        loading.dismiss();
        // this.router.navigate(['/profile'])
        
      })
      .catch((error)=>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    }else{
      this.toast('Please enter you email and password', 'danger');
    }
  }//end login


  async toast(massage, status){
    const toast =  await this.toastr.create({
      message: massage,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }// end toast

}
