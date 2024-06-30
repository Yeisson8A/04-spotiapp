import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  // Atributo que vamos a recibir del componente padre
  @Input() items: any[] = [];

  constructor(private _router: Router) { }

  viewArtist(item: any) {
    let artistId: string;

    // Validar el tipo del item,
    // a fin de saber si es un artista o un albúm
    // y de este modo decidir de donde tomar el id
    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    // Navegar a la página del artista
    this._router.navigate(['/artist', artistId]);
  }

}
