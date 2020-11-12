import { User } from './../models/user';
import { Observable } from 'rxjs';
import {Injectable}from '@angular/core'
import { AngularFirestoreCollection, AngularFirestoreDocument ,AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService{
    userCol: AngularFirestoreCollection<User>;
    userDoc: AngularFirestoreDocument<User>;
    users: Observable<User[]>;
    user: Observable<User>;
    user$: any;

    constructor(
        private afs : AngularFirestore
    ){
        this.userCol =this.afs.collection('user',ref => ref.orderBy('createdAt','desc'));
        this.users = this.userCol.snapshotChanges().pipe(
            map(action => {
                return action.map(
                    a =>{
                        const data = a.payload.doc.data() as User;
                        data.userId = a.payload.doc.id;
                        return data;
                    }
                )
            })
        );

    }//end constructor

    getUsers()
    {
        return this.users;

    }//end get user 

    getUser(userId){
        this.userDoc = this.afs.doc<User>('user/${userId}');
        return this.user = this.userDoc.valueChanges();
    }//end getUser
}