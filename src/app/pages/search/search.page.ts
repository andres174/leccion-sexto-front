import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CancionI } from 'src/app/interfaces/cancion';
import { DeezerServiceService } from 'src/app/services/deezer-service.service';
import { SongServiceService } from 'src/app/services/song-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  busqueda:string = "";

  canciones:any[] = [];

  isSearch:boolean = false;

  constructor(private deezerS: DeezerServiceService, private songS: SongServiceService, private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  loadSearch(event:any){
    this.busqueda = event.detail.value;
  }

  buscar(){
    if(this.busqueda.length > 0){
      this.deezerS.searchDeezer(this.busqueda.toLowerCase()).subscribe({
        next: (res) => {
          this.canciones = res.data;
          console.log(this.canciones);
          this.isSearch = true;
        }, 
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log("error");
    }

  }


  guardar(id:number){
    let cancion = this.canciones.find(e => e.id == id);
    console.log(cancion);
    let data:CancionI = {
      title: cancion.title,
      title_short: cancion.title_short,
      duration: cancion.duration,
      preview: cancion.preview,
      cover_small: cancion.album.cover_small
    }
    console.log(data);
  
    this.songS.store(data).subscribe({
      next: (res) => {
        console.log(res);
        this.alert(res.message);
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

}
