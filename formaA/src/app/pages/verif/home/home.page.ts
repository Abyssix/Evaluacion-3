import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombre_usuario: string = 'Nicolas Saez'; // Asume que el nombre del usuario está disponible.

    // Listas de alumnos y materias
    alumnos: { nombre: string }[] = [
      { nombre: 'María Toloza' },
      { nombre: 'Pedro Perez' },
      { nombre: 'Ana Morales' },
    ];

    materias: { nombre: string }[] = [
      { nombre: 'Matemáticas' },
      { nombre: 'Ciencias' },
      { nombre: 'Historia' },
    ];

    constructor(private alertController: AlertController, private navCtrl: NavController) {}

  // Función para ver la asistencia del día
  async verAsistencia() {
    const alert = await this.alertController.create({
      header: 'Asistencia del Día',
      message: 'María Toloza = Presente',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  irAPaginaQR() {
    this.navCtrl.navigateForward('/qr'); // Redirige a la página del código QR
  }

}

  







