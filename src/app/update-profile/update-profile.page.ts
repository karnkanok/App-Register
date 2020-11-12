import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../service/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
// import { create } from 'domain';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  name: string;
  email: string;
  password: string ;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private auth: AuthService, //todo
    private toastr: ToastController, 
    private afauth: AngularFireAuth,
     

  ) { }

  ngOnInit() {
    // this.auth.getName().subscrib(t)
  }
  


  save(){

    this.router.navigate(['/profile',]);
  }



  async register() {
    if (this.name && this.email && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'loading',
        spinner: 'crescent',
        showBackdrop: true,
      });
      loading.present();


      this.afauth.createUserWithEmailAndPassword(this.email,this.password).then((data) => {
        this.afs.collection('user').doc(data.user.uid).set({
          'userID': data.user.uid,
          'name': this.name,
          'email': this.email,
          'createdAt': Date.now()
        });

        data.user.sendEmailVerification();
        console.log(data.user.email);
      })
      
    }
   
  }// end of register

}
