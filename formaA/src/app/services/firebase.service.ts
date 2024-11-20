import { Injectable, inject} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

    auth = inject(AngularFireAuth);
    firestore = inject(AngularFirestore)


    // ============ Autentificacion ============== //

    //acceder
    ingresar(user: User){
      return signInWithEmailAndPassword(getAuth(), user.email, user.password)
    }

    //crear usuario
    registrar(user: User) {
      return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
    }

    //actualizar usuario
    actualizarusuario(displayName: string){
      return updateProfile(getAuth().currentUser, { displayName })
    }

    //base de datos y funciones

    nuevoDocumento(path: string, data: any){
      return setDoc(doc(getFirestore(),path), data);
    }

    async obtenerDocumento(path: string){
      return (await getDoc(doc(getFirestore(), path))).data();
    }
    
}
