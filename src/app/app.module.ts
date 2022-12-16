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
import { I1Component } from './components/i1/i1.component';
import { I2Component } from './components/i2/i2.component';
import { I3Component } from './components/i3/i3.component';
import { I4Component } from './components/i4/i4.component';
import { I5Component } from './components/i5/i5.component';
import { I6Component } from './components/i6/i6.component';
import { I7Component } from './components/i7/i7.component';
import { I8Component } from './components/i8/i8.component';
import { I9Component } from './components/i9/i9.component';
import { I10Component } from './components/i10/i10.component';
import { I11Component } from './components/i11/i11.component';
import { I12Component } from './components/i12/i12.component';
import { I13Component } from './components/i13/i13.component';
import { I14Component } from './components/i14/i14.component';
import { I15Component } from './components/i15/i15.component';
import { I16Component } from './components/i16/i16.component';
import { I17Component } from './components/i17/i17.component';
import { I18Component } from './components/i18/i18.component';
import { I19Component } from './components/i19/i19.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgxPayPalModule } from 'ngx-paypal';
import { ModeleComponent } from './components/modele/modele.component';
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
    I1Component,
    I2Component,
    I3Component,
    I4Component,
    I5Component,
    I6Component,
    I7Component,
    I8Component,
    I9Component,
    I10Component,
    I11Component,
    I12Component,
    I13Component,
    I14Component,
    I15Component,
    I16Component,
    I17Component,
    I18Component,
    I19Component,
    ModeleComponent,
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