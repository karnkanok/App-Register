
import { AuthService } from './../service/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
// import { UserService} from '../service/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private afauth : AngularFireAuth,
    private router : Router,
    private toast: ToastController,
    private loadingCtrl: LoadingController,
    private  auth: AuthService,
    private fserv : FirebaseService,
    // private userService : UserService,
  ) {}

  logout(){
    this.afauth.signOut().then(()=>{
      console.log('Logout')
      this.router.navigate(['/login'])
    });
  }

  async updateData(){
    this.router.navigate(['/update-profile']);
  }

  ngOnInit() {
    
  }
  
}
