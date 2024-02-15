import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { LandingComponent } from './components/landing/landing.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/profile/profile.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ProducteComponent } from './components/producte/producte/producte.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import  { NgxPhotoEditorModule } from "ngx-photo-editor" ;
import { ImageDrawingModule } from 'ngx-image-drawing';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ColorPickerModule } from 'ngx-color-picker';
import { Im1Component } from './im1/im1.component';

import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgxPayPalModule } from 'ngx-paypal';
import { ModeleComponent } from './components/modele/modele.component';
//import { VoyageurComponent } from './voyageur/voyageur.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
@NgModule({
  declarations: [
    ProducteComponent,
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    Im1Component,
    ModeleComponent,
   // VoyageurComponent,
    ChauffeurComponent,
    AdministrateurComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    AppRoutingModule,
    FormsModule,
    ImageCropperModule,
    NgxPhotoEditorModule,
    ImageDrawingModule,
    AngularEditorModule,
    HttpClientModule,
    DragDropModule,
    ColorPickerModule,
    DialogModule,
    RichTextEditorAllModule ,
    NgxPayPalModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}