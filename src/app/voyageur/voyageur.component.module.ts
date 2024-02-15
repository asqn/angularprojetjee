// voyageur.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
// Importez d'autres modules Material Design nécessaires

import { VoyageurComponent } from './voyageur.component';

@NgModule({
  declarations: [
    VoyageurComponent,
    // ... Autres composants
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    // ... Autres modules Material Design nécessaires
  ],
})
export class VoyageurModule { }
