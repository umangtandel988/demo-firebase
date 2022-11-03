import { Injectable } from '@angular/core';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, CollectionReference, deleteDoc, getDoc, getFirestore, updateDoc } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';

@Injectable()
export class StudentService {

  db: Firestore;
  studentCollection : CollectionReference = collection(this.fs, 'Student');

  constructor(private fs : Firestore) {
    initializeApp(environment.firebase);
    this.db = getFirestore();
   }

   addStudent(data : Student){
    return addDoc(this.studentCollection, data)
   }

   getAllStudents() : Observable<Student[]>{
    // let usersCollection: AngularFirestoreCollection<IUser>;
    // usersCollection = this.firestore.collection('/users');
    // return usersCollection;
      return collectionData(this.studentCollection, { idField : 'id' }) as Observable<Student[]>
   }

   getStudentById(id){
     let docRef = doc(this.fs, `Student/${id}`);
     return getDoc(docRef);
   }

   updateStudent(id : string, data : any){
     let docRef = doc(this.fs, `Student/${id}`)
     return updateDoc(docRef, data)
   }

   deleteStudent(id : string){
    let docRef = doc(this.fs, `Student/${id}`)
    return deleteDoc(docRef)
   }
}
