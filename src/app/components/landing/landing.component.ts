import { Component, OnInit } from '@angular/core';
import { VoyageurComponent } from 'src/app/voyageur/voyageur.component';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
  
})
export class LandingComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  Voyageur(){
    this.router.navigate(['/Voyageur']);
      }
      Chauffeur(){
        this.router.navigate(['/Chauffeur']);
          }
          Administrateur(){
            this.router.navigate(['/Administrateur']);
              }
}
