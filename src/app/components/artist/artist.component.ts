import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  // Variables para manejo de errores
  error: boolean;
  messageError: string;

  constructor(
    private _activatedRoute: ActivatedRoute, // Libreria para manipular información enviada en la ruta
    private _spotifyService: SpotifyService // Servicio creado
  ) {
    // Obtenemos parámetros enviados en la ruta
    this._activatedRoute.params.subscribe((params: any) => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.error = false;
    this._spotifyService.getArtist(id).subscribe((data: any) => {
      this.artist = data;
      this.loading = false;
    }, (errorService: any) => { // En caso de error
      this.loading = false;
      this.error = true;
      this.messageError = errorService.error.error.message;
    });
  }

  getTopTracks(id: string) {
    this.error = false;
    this._spotifyService.getTopTracks(id).subscribe((data: any) => {
      console.log(data);
      this.topTracks = data;
    }, (errorService: any) => { // En caso de error
      this.loading = false;
      this.error = true;
      this.messageError = errorService.error.error.message;
    });
  }

}
