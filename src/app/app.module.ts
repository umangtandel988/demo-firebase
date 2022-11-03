import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './Auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Auth/auth.service';
import { SignupComponent } from './Auth/signup/signup.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from '@firebase/app';
import { StudentService } from './services/student.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbToastrModule, NbDialogModule, NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireAuthModule,
    // AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase) ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbInputModule
  ],
  providers: [
    AuthService,
    StudentService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
