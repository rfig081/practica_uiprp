import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
interface Reportes {
    type: string;
    name: string;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportesCollection: AngularFirestoreCollection<Reportes>;
  reportes: Observable<Reportes[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
      this.reportesCollection = this.afs.collection('reportes');
      this.reportes = this.reportesCollection.valueChanges();
  }

}
