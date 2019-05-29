import { Component } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Post>;
  title = 'firebase-angular';
  
  items: Observable<Post[]>;
  name:string;
  value:number;
  constructor(private _db: AngularFirestore) {
   
  }
  ngOnInit(){
    this.itemsCollection = this._db.collection('test');
    this.items=this.itemsCollection.valueChanges();

  }

  addPost() {
    this._db.collection('test').add({'title': this.name, 'value': this.value});
  }
}

interface Post {
  name: string;
  value: number;
}
