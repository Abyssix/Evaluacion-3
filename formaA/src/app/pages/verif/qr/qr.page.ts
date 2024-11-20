import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {
  qrData: string;

  constructor(private navCtrl: NavController) {
    // Valor del código QR
    this.qrData = 'https://example.com'; // Puedes cambiar esto por el valor que desees
  }

  // Función para regresar a la página Home
  regresarHome() {
    this.navCtrl.navigateBack('/home'); // Navega de vuelta a la página Home
  }
}

