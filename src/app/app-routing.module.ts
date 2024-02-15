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
import { VoyageurComponent } from './voyageur/voyageur.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
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
  path:'Voyageur',
  component:  VoyageurComponent ,
  //...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'Chauffeur',
  component:  ChauffeurComponent ,
  //...canActivate(redirectUnauthorizedToLogin),
},
{
  path:'Administrateur',
  component:  AdministrateurComponent ,
  //...canActivate(redirectUnauthorizedToLogin),
},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
