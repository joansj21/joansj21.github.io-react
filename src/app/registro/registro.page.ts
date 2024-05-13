import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:string='';
  apellido:string='';
  fechaNacimiento:string='';
  sexo:string='';
  profesion:string='';

  constructor(private http:HttpClient,private alertController: AlertController) {




  }

  ngOnInit() {

    console.log("hola")

  }

  enviarDatos() {
    const Persona = {
      id:0,
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      sexo: this.sexo,
      profesion: this.profesion
    };


    console.log("datos obtenidos", Persona);


    this.http.post('http://localhost:5211/api/Persona',Persona).subscribe(async (response)=>{

      console.log("datos enviados",response)
      const alert = await this.alertController.create({
        header: 'Respuesta del servidor',
        message: JSON.stringify(response),
        buttons: ['OK']
      });
      await alert.present();
    })

    // Reiniciar los valores de los input a blanco
    this.nombre = '';
    this.apellido = '';
    this.fechaNacimiento = '';
    this.sexo = '';
    this.profesion = '';
  }

}
