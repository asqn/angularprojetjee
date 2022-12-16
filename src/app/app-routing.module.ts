import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {canActivate,redirectLoggedInTo,redirectUnauthorizedTo,} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import * as path from 'path';
import { ProducteComponent } from './components/producte/producte/producte.component';
import { ModeleComponent } from './components/modele/modele.component';
import {I1Component} from './components/i1/i1.component';
import {I2Component} from './components/i2/i2.component';
import {I3Component} from './components/i3/i3.component';
import {I4Component} from './components/i4/i4.component';
import {I5Component} from './components/i5/i5.component';
import {I6Component} from './components/i6/i6.component';
import {I7Component} from './components/i7/i7.component';
import {I8Component} from './components/i8/i8.component';
import {I9Component} from './components/i9/i9.component';
import {I10Component} from './components/i10/i10.component';
import {I11Component} from './components/i11/i11.component';
import {I12Component} from './components/i12/i12.component';
import {I13Component} from './components/i13/i13.component';
import {I14Component} from './components/i14/i14.component';
import {I15Component} from './components/i15/i15.component';
import {I16Component} from './components/i16/i16.component';
import {I17Component} from './components/i17/i17.component';
import {I18Component} from './components/i18/i18.component';
import {I19Component} from './components/i19/i19.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'Producte',
    component: ProducteComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
{
  path:'Modele',
  component:  ModeleComponent ,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I1',
  component: I1Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I2',
  component: I2Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I3',
  component: I3Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I4',
  component: I4Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I5',
  component: I5Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I6',
  component: I6Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I7',
  component: I7Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I8',
  component: I8Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I9',
  component: I9Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I10',
  component: I10Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I11',
  component: I11Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I12',
  component: I12Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I13',
  component: I13Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I14',
  component: I14Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I15',
  component: I15Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I16',
  component: I16Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I17',
  component: I17Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I18',
  component: I18Component,
  ...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'I19',
  component: I19Component,
  ...canActivate(redirectUnauthorizedToLogin),
}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
