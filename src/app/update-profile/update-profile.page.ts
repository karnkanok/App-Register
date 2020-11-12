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


  save(name){

    // if(this.name){
    //   const loading = await this.loadingCtrl.create({
    //     message: 'loading',
    //     spinner: 'crescent',
    //     showBackdrop: true,
    //   });
    //   loading.present();

    //   // this.afauth.updateCurrentUser(user: firebase.userID)
    //   // 'name': this.name,
    //   //data.user.sendEmailVerification();
    // }

    this.router.navigate(['/update-profile',name]);
  }
  // async save(){
  //   if ( this.name){
  //     const loading = await this.loadingCtrl.create({
  //       message: 'save',
  //       spinner: 'crescent',
  //       showBackdrop:true,
  //     });

  //     loading.present();

  //     // this.afs.collection('profile').doc()
  //   }
  // }

}
