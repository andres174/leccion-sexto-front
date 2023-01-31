import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CancionI } from 'src/app/interfaces/cancion';
import { resCancionI } from 'src/app/interfaces/resCancion';
import { SongServiceService } from 'src/app/services/song-service.service';

@Component({
  selector: 'app-mis-canciones',
  templateUrl: './mis-canciones.page.html',
  styleUrls: ['./mis-canciones.page.scss'],
})
export class MisCancionesPage implements OnInit {

  misCanciones:resCancionI[] = [];

  constructor(private songS: SongServiceService, private alertCtrl:AlertController) {
    
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.songS.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.misCanciones = res;
        console.log(this.misCanciones.length);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  eliminar(id:number){
    console.log(id);
    this.songS.eliminar(id).subscribe({
      next: (res) => {
        console.log(res);
        this.alert(res.message);
        this.getAll();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  async alert(message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'modal-delete',
      header: message,
      buttons: [
        {
          text: 'Ok',
          id: 'confirm-button',
        },
      ],
    });
    alert.present();
  }

  convertDuration(){
    for (let index = 0; index < this.misCanciones.length; index++) {
      
    }
  }

  

}
