// voyageur.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-voyageur',
  templateUrl: './voyageur.component.html',
  styleUrls: ['./voyageur.component.css'],
})
export class VoyageurComponent {
  selectedTransport: string = '';
  selectedBusStation: string = '';
  // Autres variables nécessaires

  transports = [
    { label: 'Bus', value: 'bus' },
    { label: 'Taxi', value: 'taxi' }
  ];

  busStations = [
    { label: 'Station A', value: 'stationA' },
    { label: 'Station B', value: 'stationB' },
    // Ajoutez d'autres stations
  ];

  validateReservation() {
    // Logique de validation de la réservation en fonction des choix du voyageur
    console.log('Réservation validée');
  }
}
